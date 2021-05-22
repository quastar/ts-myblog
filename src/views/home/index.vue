<script lang="ts" src="./index.ts"/>
<style lang="less">
@import url("./index.less");
</style>
<template>
  <div class="home">
    <div class="home-header" @click="showSetting=true;hideSetting=false;">
      <van-Image
        round
        class="header-avatar"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
    <div class="home-body">
      <div>
        <Search v-model="searchKeyWord" shape="round" placeholder="搜索" />
      </div>
      <div>
        <div
          v-for="message in messageList"
          :key="message.id"
          :class="{
            'message-box': true,
            'message-box-active': touch_this === message.id,
          }"
          @click="check_message_detail(message.id)"
        >
          <van-Image round class="header-avatar" :src="message.avatar" />
          <div class="message-box-details">
            <p>{{ message.name }}</p>
            <div>
                <p v-if="message.isGroup">{{message.talker}}：</p>
                <p>{{ message.message }}</p> 
            </div>
          </div>
          <div class="message-box-tag">
            <Badge :content="message.tag" max="99" />
          </div>
        </div>
      </div>
    </div>
    <Tabbar v-model="active">
      <TabbarItem badge="3">
        <span>自定义</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </TabbarItem>
      <TabbarItem icon="search">标签</TabbarItem>
      <TabbarItem icon="setting-o">标签</TabbarItem>
    </Tabbar>
    <div :class="{'setting-page-show':showSetting,'setting-page-hide':hideSetting}">
        <span class="setting-page-close" @click="hideSetting=true;showSetting=false">
         <VIcon name="close" />
        </span>
    </div>
  </div>
</template>