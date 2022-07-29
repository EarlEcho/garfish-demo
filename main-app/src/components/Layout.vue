<template>
  <arco-layout class="layout-demo">
    <arco-layout-sider hide-trigger collapsible :collapsed="collapsed">
      <div class="logo">Echo Test Pro</div>
      <arco-menu :defaultOpenKeys="['1']" :defaultSelectedKeys="['1_2']" :style="{ width: '100%' }" @menuItemClick="onClickMenuItem">
        <template v-for="(menu, index) in menuConfig">
          <template v-if="menu.childrens && menu.childrens.length > 0">
            <arco-sub-menu :key="index">
              <template #title>
                <span> <IconCalendar />{{ menu.name }} </span>
              </template>
              <arco-menu-item v-for="(childrens, k) in menu.childrens" @click="onClickMenuItem(childrens)" :key="`${index}_${k}`">{{ childrens.name }}</arco-menu-item>
            </arco-sub-menu>
          </template>

          <template v-else>
            <arco-menu-item :key="index" @click="onClickMenuItem(menu)">
              <IconCalendar />
              {{ menu.name }}
            </arco-menu-item>
          </template>
        </template>
      </arco-menu>
    </arco-layout-sider>
    <arco-layout>
      <arco-layout-header style="padding-left: 20px">
        <arco-button shape="round" @click="onCollapse">
          <IconCaretRight v-if="collapsed" />
          <IconCaretLeft v-else />
        </arco-button>
        <span>
          &emsp;
          <arco-button @click="sendMsgToSub">点击向子应用发送消息</arco-button>
        </span>
      </arco-layout-header>
      <arco-layout style="padding: 0 24px">
        <arco-breadcrumb :style="{ margin: '16px 0' }">
          <arco-breadcrumb-item>Home</arco-breadcrumb-item>
          <arco-breadcrumb-item>List</arco-breadcrumb-item>
          <arco-breadcrumb-item>App</arco-breadcrumb-item>
        </arco-breadcrumb>
        <arco-layout-content>
          <slot></slot>
        </arco-layout-content>
        <arco-layout-footer> footer </arco-layout-footer>
      </arco-layout>
    </arco-layout>
  </arco-layout>
</template>
<script setup>
import Garfish from "garfish";
import { defineComponent, ref, onMounted, getCurrentInstance } from "vue";
import { MenuConfig } from "@/utils/menu.js";
import { Message } from "@arco-design/web-vue";
import { IconCaretRight, IconCaretLeft, IconHome, IconCalendar } from "@arco-design/web-vue/es/icon";
const { proxy } = getCurrentInstance();
const collapsed = ref(false);
const menuConfig = ref(MenuConfig);
const onCollapse = () => {
  collapsed.value = !collapsed.value;
};
const onClickMenuItem = async (key) => {
  console.log(key, proxy);
  if (key.isMain) {
    proxy.$router.push(key.path);
  }
  if (key.isSub) {
    window?.Garfish?.router.push({
      path: key.path,
      basename: "/sub",
    });
  }
  if (key.isSub && key.isLazyLoad) {
    // 手动挂载应用

    let appInstance = null;
    appInstance = await Garfish.loadApp("appAntv", {
      cache: true,
      basename: "/sub",
      domGetter: "#subApp",
      strictIsolation: true, // 严格隔离
      sandbox: {
        open: false,
      },
      entry: "http://127.0.0.1:3002",
    });
    console.log("appInstance", appInstance);
    appInstance.mounted ? appInstance.show() : await appInstance.mount();
  }
};

const sendMsgToSub = () => {
  Garfish.channel.emit("msgChild", "这是一条从主应用发出，发给子应用的消息");
};
</script>
<style scoped>
.layout-demo {
  height: 100%;
  background: var(--color-fill-2);
  border: 1px solid var(--color-border);
}

.layout-demo :deep(.arco-layout-sider) .logo {
  height: 32px;
  line-height: 32px;
  margin: 12px 8px;
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
}

.layout-demo :deep(.arco-layout-sider-light) .logo {
  background: var(--color-fill-2);
}

.layout-demo :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  background: var(--color-bg-3);
}

.layout-demo :deep(.arco-layout-footer) {
  height: 48px;
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
}

.layout-demo :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
}

.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}
</style>
