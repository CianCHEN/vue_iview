<template>
    <div>
        <Button :disabled="disabled" @click="modalVal = true">Set the width</Button>
        <br>
        <p> 控制按钮开关: </p>
        <i-switch v-model="switchstatus"  size='large' @on-change="handleChange">
            <span slot="open"> ON </span>
            <span slot="close"> OFF </span>
        </i-switch>
        <Modal
            v-model="modalVal"
            title="Custom width"
            width="500"
            mask
            @on-ok="handleOk"
            @on-cancel="handleCancel"
               >
            <p>Customize width, unit px, default 520px.</p>
            <p>The width of the dialog box is responsive, and the width becomes <code>auto</code> when the screen size is less than 768px.</p>
        </Modal>

        <br>
        <br>
        <br>
        <Checkbox
            :indeterminate="indeterminate"
            :value="checkAll"
            @click.prevent.native="handleCheckAll">全选</Checkbox>
        <CheckboxGroup v-model="social"  @on-change="checkAllGroupChange">
            <Checkbox label="twitter">
                <Icon type="logo-twitter"></Icon>
                <span>Twitter</span>
            </Checkbox>
            <Checkbox label="facebook">
                <Icon type="logo-facebook"></Icon>
                <span>Facebook</span>
            </Checkbox>
            <Checkbox label="github">
                <Icon type="logo-github"></Icon>
                <span>Github</span>
            </Checkbox>
            <Checkbox label="snapchat">
                <Icon type="logo-snapchat"></Icon>
                <span>Snapchat</span>
            </Checkbox>
        </CheckboxGroup>
        <p>{{ social }}</p>
        <CheckboxGroup >
            <Checkbox checked label="香蕉"></Checkbox>
            <Checkbox label="苹果"></Checkbox>
            <Checkbox label="西瓜"></Checkbox>
        </CheckboxGroup>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                modalVal: false,
                switchstatus: false,
                disabled: true,
                indeterminate: false,
                checkAll: false,
                social: ['facebook', 'github']
            }
        },
        methods: {
            handleOk () {
                // on-ok control
                this.$Message.success("触发确认事件~~")
            },
            handleCancel () {
                // on-cancel crontrol
                this.$Message.error("触发取消事件~~")
           },
           handleChange (status) {
               this.disabled = !this.disabled; 
           },
           handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.social = ["facebook", "github", "twitter", "snapchat"];
                } else {
                    this.social = [];
                }
            },
          checkAllGroupChange (data) {
                if (data.length === 4) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            } 
        }
    }
</script>
