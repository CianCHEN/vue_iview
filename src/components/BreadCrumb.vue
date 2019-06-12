<template>
    <div>
        <Breadcrumb>
            <BreadcrumbItem to="/">
                <Icon type="ios-home"></Icon> Home
            </BreadcrumbItem>
            <BreadcrumbItem to="/components/table">
                <Icon type="logo-buffer"></Icon> Components
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Icon type="ios-cafe"></Icon> Breadcrumb
            </BreadcrumbItem>
        </Breadcrumb>
    </div>
</template>

<style>
    .ivu-breadcrumb>span:last-child {
        color: #fff
    }
    .ivu-breadcrumb a {
        color: #fff
    }

</style>

<script>
    export default {
        name: 'BreadCrumb'    
    }
</script>

