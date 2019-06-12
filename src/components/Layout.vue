<style scoped>
    .ivu-btn-text:hover{
        background-color: rgba(255, 255, 255, .2) !important;
    }
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        /*background: #5b6270;*/
        background:#fff;
        border-radius: 3px;
        margin: 15px auto;
    }
    .ivu-layout-sider{
        background: #fff;
    }
    .menu-icon{
        cursor: pointer;
        transition: all .3s;
        margin: 0 20px 0;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }

/*    .header-left{
        display:flex;
        align-items:center;
    }
    .header-title{
        font-size:18px;
        font-weight:bold;
    }

   .header-right{
        margin-right:20px;                
   }
*/

     .layout-header-bar{
            background: #fff;
            padding: 0;
            position: relative;
            display: flex;
            flex-direction: column;
            z-index: 20;
            width:100%;
     }
             .header-wapper{
                display:flex;
                align-tems:center;
                justify-content:space-between;
                position: relative;
                z-index: 1;
                box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1);
                /*background: #0e64c3;*/
                background: #2d8cf0!important;
                color: #fff;
    }
                .header-left{
                    display:flex;
                    align-items:center;
                 }
                .header-title{
                     font-size:18px;
                     font-weight:bold
                }
                .header-right{
                    margin-right:20px;                
                 }
                     .btn-blue{
                        color: #fff;
                        font-size:16px;
                    }

    .ivu-badge {
        line-height: 32px;
    }
    
</style>
<template>
    <div class="layout">
        <Layout>
<!--
            <Sider ref="side1" breakpoint="md" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" style="height: 100vh">
-->
            <Sider ref="side1" breakpoint="md" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses" v-if="!isCollapsed">
                      <MenuItem name="first">
                        <router-link tag='li' to="/">
                            <Icon type="md-home" size="24"/> &nbsp;&nbsp首 &nbsp;&nbsp;页
                        </router-link>
                      </MenuItem>
<!--
                    <MenuGroup>
                    </MenuGroup>
-->
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper" />
                            Components 
                    </template>
                    <MenuItem name="1-1">
                        <router-link tag='li' to="/components/table">
                            Table
                        </router-link>
                    </MenuItem>
                    <MenuItem name="1-2">
                        <router-link tag='li' to="/components/form">
                            Form
                        </router-link>
                    </MenuItem>
                    <MenuItem name="1-3">
                        <router-link tag='li' to="/components/modal">
                            Modal
                        </router-link>
                    </MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people" />
                        用户管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
<!--
                    <MenuItem name="1-1">
                        <Icon type="ios-navigate"></Icon>
                        <span>Option 1</span>
                    </MenuItem>
                    <MenuItem name="1-2">
                        <Icon type="ios-search"></Icon>
                        <span>Option 2</span>
                    </MenuItem>
                    <MenuItem name="1-3">
                        <Icon type="ios-settings"></Icon>
                        <span>Option 3</span>
                    </MenuItem>
-->
                </Menu>
                <div style="margin-left: 5px" v-if="isCollapsed">
                    <Dropdown transfer placement="right-start">
                        <Button class="dd-btn" type="text">
                            <Icon :size="25" type="md-home"></Icon>
                        </Button>
                        <DropdownMenu slot="list">
                            <DropdownItem>
                                <router-link tag='li' to="/">
                                    首页
                                </router-link>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown transfer placement="right-start">
                        <Button class="dd-btn" type="text">
                            <Icon :size="25" type="ios-paper"></Icon>
                        </Button>
                        <DropdownMenu slot="list">
                            <DropdownItem>
                                <router-link tag='li' to="/components/table">
                                    Table
                                </router-link>
                            </DropdownItem>
                            <DropdownItem>
                                <router-link tag='li' to="/components/form">
                                    Form
                                </router-link>
                            </DropdownItem>
                            <DropdownItem>
                                <router-link tag='li' to="/components/modal">
                                    Modal 
                                </router-link>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                  <div class="header-wapper">
                    <div class="header-left">
                        <Icon @click.native="collapsedSider" :class="rotateIcon" type="md-menu" size="30"></Icon>
<!--
                        <span class="header-title"> 后台管理系统 </span>
-->
                        <bread-crumb />
                    </div>
                    <div class="header-right user-avatar-dropdown">
                            <Button type="text" icon="md-notifications" size="large" @click="clickNotice" class="btn-blue">消息通知</Button> 
<!--
                             <Dropdown @on-click="handleClick">
                                 <Button type="text" icon="md-person" size="large" class="btn-blue">
                                     个人中心
                                     <Icon type="ios-arrow-down"></Icon>
                                 </Button>
                                <DropdownMenu slot="list" >
                                    <DropdownItem name="user_info">用户管理</DropdownItem>
                                    <DropdownItem name="doc">Doc</DropdownItem>
                                    <DropdownItem name="logout" divided>
                                        Logut
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown> 
-->
                        <Dropdown @on-click="handleClick">
<!--
                          <Badge :class="{width: '64px', height: '64px'}" text="new" :dot="!!messageUnreadCount">
-->
                          <Badge dot>
                            <Avatar :src="userAvatar"/>
                          </Badge>
                          <Icon :size="18" type="md-arrow-dropdown"></Icon>
                          <DropdownMenu slot="list">
                            <DropdownItem name="message">
                              消息中心<Badge style="margin-left: 10px" :count="messageUnreadCount"></Badge>
                            </DropdownItem>
                            <DropdownItem name="logout" divided>退出登录</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
<!--
                        <Button type="text" icon="md-exit" class="btn-blue" size="large" @click="Logout">Logout</Button>
-->
                    </div>
                  </div>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: 'calc(100vh - ( 60px + 24px + 24px  + 24px  + 22px ))' }">
<!--
                <Content :style="{margin: '20px', background: '#fff', minHeight: 'auto' }">
-->
                  <!--
                    <table-page></table-page>
                    <home/>
                  -->
                    <keep-alive>
                        <router-view/>
                    </keep-alive>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    import TablePage from './TablePage.vue'
    import Home from './Home.vue'
    import BreadCrumb from './BreadCrumb.vue'
    export default {
        components: {
            //TablePage,
            //Home,
            BreadCrumb
        },
        data () {
            return {
                isCollapsed: false,
                //userAvatar: "https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png",
                userAvatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
                messageUnreadCount: 3
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            Logout () {
                    this.$Message.success("用户成功退出当前系统~~"); 
                    this.$router.push('/login');
           },
           clickNotice () {
               this.$Message.warning("Notice message!!");
           },
           handleClick (val) {
              console.log(val);
              if (val === "logout") {
                   this.Logout()
              }
          }
        }
    }
</script>

