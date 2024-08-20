<template>
  <!-- Left Navigation Bar -->
  <nav class="h-screen bg-white shadow-sm rounded-r-lg">
    <!-- Logo and Title -->
    <div class="flex items-center justify-center p-2.5 border-b border-gray-200">
      <img src="../../public/gurummang_logo.png" alt="Logo" class="size-10 mr-4">
      <h1 class="text-xl font-semibold text-indigo-950">구름망 CASB</h1>
    </div>
    
    <!-- Navigation Items -->
    <div class="pd-4">
      <div v-for="(item, index) in navItems" :key="index">
        <a :class="['flex items-center justify-between px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-200 hover:text-white',
                  item.active ? 'bg-orange-500 text-white' : '']"
          @click="toggleItem(index, item.link)">
          <div class="flex items-center">
            <component :is="item.icon" class="size-6 mr-3" />
            {{ item.title }}
          </div>
          <component 
            :is="item.expanded ? 'ChevronUpIcon' : 'ChevronDownIcon'" 
            class="size-5"
            v-if="item.children"
          />
        </a>
        
        <!-- Child items -->
        <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @leave="leave">
          <div v-if="item.children && item.expanded">
            <a
              v-for="(child, childIndex) in item.children"
              :key="`child-${index}-${childIndex}`"
              :class="['flex items-center px-10 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-200 hover:text-white',
                        child.active ? 'bg-orange-500 text-white' : '']"
              @click="activateChild(index, childIndex, child.link)"
            >
              <component :is="child.icon" class="size-6 mr-3" />
              {{ child.title }}
            </a>
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { 
  HomeIcon, 
  WindowIcon,
  CloudIcon, 
  ChatBubbleLeftIcon,
  CloudArrowUpIcon,
  DocumentIcon, 
  UsersIcon, 
  ShieldCheckIcon, 
  ChevronDownIcon, 
  ChevronUpIcon,
  ChartPieIcon,
  ListBulletIcon,
  DocumentCheckIcon, 
} from '@heroicons/vue/24/outline'

export default defineComponent({
  name: 'LeftNav',
  components: {
    HomeIcon,
    WindowIcon,
    CloudIcon,
    ChatBubbleLeftIcon,
    CloudArrowUpIcon,
    DocumentIcon,
    UsersIcon,
    ShieldCheckIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    ChartPieIcon,
    ListBulletIcon,
    DocumentCheckIcon,
  },
  setup() {
    const navItems = ref([
      { 
        title: '메인', 
        icon: HomeIcon, 
        active: false,
        link: '/',
      },
      { 
        title: '등록', 
        icon: WindowIcon, 
        active: false, 
        children: [
          { title: 'SaaS', icon: CloudIcon, active: false, link: '/register/saas', },
          { title: '이메일 알림', icon: ChatBubbleLeftIcon, active: false, link: '/register/email', },
        ] 
      },
      { 
        title: 'SaaS', 
        icon: CloudIcon, 
        expanded: false, 
        active: false, 
        children: [
          { title: 'Google Drive', icon: CloudArrowUpIcon, active: false, link: '/saas/googledrive', },
          { title: 'Slack', icon: CloudArrowUpIcon, active: false, link: '/saas/slack', }
        ] 
      },
      { 
        title: '파일', 
        icon: DocumentIcon, 
        expanded: false, 
        active: false, 
        children: [
          { title: 'DashBoard', icon: ChartPieIcon, active: false, link: '/file/dashboard', },
          { title: '파일 히스토리', icon: ListBulletIcon, active: false, link: '/file/history', },
          { title: '파일 검사', icon: DocumentCheckIcon, active: false, link: '/file/scan', }
        ]
      },
      { 
        title: '사용자', 
        icon: UsersIcon, 
        active: false,
        link: '/users',
      },
      { 
        title: 'DLP 설정', 
        icon: ShieldCheckIcon, 
        active: false ,
        link: '/dlp',
      },
    ]);

    const router = useRouter();
    const route = useRoute();

    const toggleItem = (index, link) => {
      navItems.value.forEach((item, idx) => {
        if (idx === index) {
          item.active = true; // Set the clicked item as active
          item.expanded = !item.expanded; // Toggle the expanded state
          if (!item.expanded) {
            item.active = false; // Deactivate the item if it is collapsed
          }
        } else {
          item.active = false; // Deactivate other items
          if (item.children) {
            item.expanded = false; // Collapse other items with children
            item.children.forEach((child) => {
              child.active = false; // Deactivate all children
            });
          }
        }
      });

      // If the clicked item has a link and no children, navigate to the link
      if (!navItems.value[index].children) {
        router.push(link);
      }
    };

    const activateChild = (parentIndex, childIndex, link) => {
      const parentItem = navItems.value[parentIndex];
      const childItem = parentItem.children[childIndex];

      // Deactivate other children and activate the clicked child
      parentItem.children.forEach((child) => {
        child.active = false;
      });
      childItem.active = true;

      // Activate and expand the parent item
      parentItem.active = true;
      parentItem.expanded = true;

      // Navigate to the child's link
      router.push(link);
    };

    const setActiveNavItem = () => {
      navItems.value.forEach((item) => {
        item.active = item.link === route.path;
        if (item.children) {
          item.children.forEach((child) => {
            child.active = child.link === route.path;
          });
          item.expanded = item.children.some(child => child.active);
          if (item.expanded) {
            item.active = true;
          } else {
            item.active = false;
          }
        }
      });
    };

    watch(route, setActiveNavItem, { immediate: true });

    const beforeEnter = (el) => {
      el.style.height = '0';
    };

    const enter = (el) => {
      el.style.height = el.scrollHeight + 'px';
    };

    const leave = (el) => {
      el.style.height = '0';
    };

    return {
      navItems,
      toggleItem,
      activateChild,
      beforeEnter,
      enter,
      leave
    }
  }
})
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.2s ease;
}

.accordion-enter, 
.accordion-leave-to {
  height: 0;
  overflow: hidden;
}
</style>
