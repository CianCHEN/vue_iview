<template>
    <div>
<!--
      <Input  search enter-button style="width: 200px" clearable placeholder="Enter something..."  @on-search="handleSearch"/>
-->
      <Input v-model="searchVal" style="width: 200px" @on-change="handleClear" clearable placeholder="Search Something..."/>
      <Button @click="handleSearch" class="search-btn" type="primary"><Icon type="search"/>&nbsp;&nbsp;搜索</Button>
      <Table border stripe :loading="loading" :columns="historyColumns" :data="historyData">
          <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
            <Button type="error" size="small" @click="remove(index)">Delete</Button>
        </template>
      </Table>
      <Page :total="dataCount" :page-size="pageSize" :page-size-opts="[10,15,20,25,30]" @on-page-size-change="_nowPageSize" show-total show-sizer show-elevator class="paging" @on-change="changepage"></Page>
      <Spin size="large" fix v-if="spinShow"></Spin>
    </div>
</template>
<style scoped>
  .paging{
      float:right;
      margin-top:10px;
  }
</style>
<script>
    //let testData = {
    //    "data": []
    //}
    export default {
        data () {
            return {
                loading: false,
                spinShow: false,
                ajaxHistoryData:[],
                testData: {},
                // 初始化信息总条数
                dataCount:0,
                // 每页显示多少条
                pageSize:15,
                searchVal: '',
                historyColumns: [
                    {
                        title: 'sid',
                        key: 'sid'
                    },
                    {
                        title: 'platform',
                        key: 'alias'
                    },
                    {
                        title: 'ip',
                        key: 'ip'
                    },
                    {
                        title: 'minion_id',
                        key: 'minion_id'
                    },
                    {
                        title: 'cdn',
                        key: 'cdn'
                    },
                    {
                        title: 'link_dir',
                        key: 'link_dir'
                    },
                    {
                        title: 'create_date',
                        key: 'create_date',
                        sortable: true
                    },
                    {
                        title: 'operation',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }

                ],
                historyData: []
            }
        },
        methods:{
            // 获取历史记录信息
            handleListApproveHistory(){
                // 保存取到的所有数据
                this.loading = true;
                this.ajaxHistoryData = testData.data;
                this.dataCount = testData.data.length;
                this.loading = false;
                // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
                if(testData.data.length < this.pageSize){
                    this.historyData = this.ajaxHistoryData;
                }else{
                    this.historyData = this.ajaxHistoryData.slice(0,this.pageSize);
                }
            },

            // 从远端获取数据源
            handleListApproveHistory1(){
                this.axios.get('/api/dbcheck').then((response) => {
                    //console.log(response.data)
                    this.testData = response.data;
                this.ajaxHistoryData = this.testData.data;
                this.dataCount = this.testData.data.length;
                // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
                if(this.testData.data.length < this.pageSize){
                    this.historyData = this.ajaxHistoryData;
                }else{
                    this.historyData = this.ajaxHistoryData.slice(0,this.pageSize);
                }
                }).catch((response) => {
                         console.log(response)
                    }
                )
            },
            

            //每页显示的数据条数
            _nowPageSize(index) {
            //实时获取当前需要显示的条数
                this.pageSize = index;
                if(this.testData.data.length < this.pageSize){
                    this.historyData = this.ajaxHistoryData;
                }else{
                    this.historyData = this.ajaxHistoryData.slice(0,this.pageSize);
                }
                console.log(index)
                console.log(this.pageSize)
            },
            changepage(index){
                var _start = ( index - 1 ) * this.pageSize;
                var _end = index * this.pageSize;
                this.historyData = this.ajaxHistoryData.slice(_start,_end);
            },

            handleSearch () {
                console.log(this.searchVal);
                //console.log(this.ajaxHistoryData);
                if (this.searchVal == "") {
                    this.$Message.warning("查询条件不能为空~~!!");
                    //this.handleListApproveHistory();
                    return
                }

                //this.spinShow = true 
                this.historyData = []
                //this.$Spin.show()
                //this.$Loading.start()
                this.ajaxHistoryData.forEach((value, index) => {
                    if (value.sid){
                        if (value.sid.indexOf(this.searchVal) > -1){
                            //console.log(value);
                            this.historyData.push(value)
                        }
                    }
                }
                )
                //setTimeout(() =>{
                //    this.spinShow = !this.spinShow 
                //    console.log(this.spinShow)
                //},2000);
                //this.$Spin.hide()
                //this.$Loading.finish()
            },

            handleClear (e) {
                if (e.target.value === '') this.historyData = this.ajaxHistoryData.slice(0,this.pageSize)
                console.log("handleClear")
           },

           show (index) {
               this.$Modal.info({
                    title: 'Server Info',
                    content: `<hr/>Sid：${this.historyData[index].sid}<br>
                                   Platform：${this.historyData[index].alias}<br>
                                   Ip：${this.historyData[index].ip}<br>
                                   Minion_id: ${this.historyData[index].minion_id}<br>
                                   Cdn: ${this.historyData[index].cdn}<br>
                                   Link_dir: ${this.historyData[index].link_dir}<br>
                                   Create_date: ${this.historyData[index].create_date}
                                  
                             `
                })
           },
 
           remove (index) {
                this.historyData.splice(index, 1);
                console.log(this.ajaxHistoryData.length)
           }
        },
     
//        watch : {
//            dataCount(newval, oldval) {
//                this.dataCount = this.ajaxHistoryData.length 
//                console.log(newval)
//            }
//        },

        created(){
             //this.handleListApproveHistory();
             this.handleListApproveHistory1();
        }
    }
</script>
