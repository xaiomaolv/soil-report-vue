<template>
  <ejkj-crud ref="listPage" :option="crudOption"> </ejkj-crud>
</template>
<script>
import {
  gettListDict,
  getDictData
} from "@/api/report/data";
export default {
  name: "DictItem",
  components: {
    ejkjCrud: require("@/components/report/AnjiPlus/anji-crud/ejkj-crud").default
  },
  data() {
    return {
      searchForm: {
        setCode: this.$route.query.setCode,
        pageNumber: 1,
        pageSize: 10
      },
      searchQuery:[],
      crudOption: {
        // 使用菜单做为页面标题
        title: "",
        // 详情页中输入框左边文字宽度
        labelWidth: "120px",
        // 查询表单条件
        queryFormFields: [],
        // 操作按钮
        buttons: {
          query: {
            api: gettListDict,
            permission: "dictItemManage:query"
          },
          // queryByPrimarykey: {
          //   api: getDictData,
          //   permission: "dictItemManage:query"
          // }
        },
        // 表格列
        columns: [
          // {
          //   label: "",
          //   field: "id",
          //   primaryKey: true, // 根据主键查询详情或者根据主键删除时, 主键的
          //   tableHide: true, // 表格中不显示
          //   editHide: true // 编辑弹框中不显示
          // }
          // {
          //   label: '部门领导',
          //   placeholder: '',
          //   field: '部门领导',
          //   editField: '部门领导',
          //   inputType: 'input',
          //   disabled: false,
          //   editHide: true, // 编辑弹框中不显示
          // },
          // {
          //   label: '领导电话',
          //   placeholder: '',
          //   field: '领导电话',
          //   editField: '部门名称',
          //   inputType: 'input',
          //   disabled: false,
          //   editHide: true, // 编辑弹框中不显示
          // },
          // {
          //   label: '部门人数',
          //   placeholder: '',
          //   field: '部门人数',
          //   editField: '部门人数',
          //   inputType: 'input',
          //   disabled: false,
          //   editHide: true, // 编辑弹框中不显示
          // },
          // {
          //   label: '部门名称',
          //   placeholder: '',
          //   field: '部门名称',
          //   editField: '部门名称',
          //   inputType: 'input',
          //   disabled: false,
          //   editHide: true, // 编辑弹框中不显示
          // },
        ],
        contextData:{}
      },
    };
  },
  created() {
    let params = {
      setCode:this.searchForm.setCode
    }
    getDictData(params).then(res=>{
      res.data.forEach(el => {
        this.crudOption.queryFormFields.push({
          inputType: "input",
          label:el.paramDesc,
          field: el.paramName,
          defaultValue:''
        })
        
      });
    })
      // DictData.forEach(el => {
      //   this.crudOption.queryFormFields.push({
      //     inputType: "input",
      //     label:el.paramDesc,
      //     field: el.paramName,
      //     defaultValue:''
      //   })
      //   console.log(this.crudOption.queryFormFields,'queryFormFields');
      // });
    // console.log(this.searchForm.setCode);
  },
  methods: {}
};
</script>
