import branchWork from '../pages/admin/branchWork/branchWork'
export const adminRouters = [
  {
    title: "数智大屏",
    name: "IntelligenceScreen",
    path: '/admin/branchWork/:id',
    component: branchWork,
    // eslint-disable-next-line global-require
    src: require(`../static/images/leftMenu/IntelligenceScreen.png`)
  }
]
// ,
//   {
//     title: "日志中心",
//     name: "Logcenter",
//     src: require(`../static/images/leftMenu/Logcenter.png`),
//     children: [
//       {
//         path: "/Entrance/Logcenter/statistics",
//         title: "访问统计"
//       }
//     ]
//   },
//   {
//     title: "组织查看",
//     name: "OrganizationManagement",
//     src: require(`../static/images/leftMenu/OrganizationManagement.png`),
//     children: [
//       {
//         path: "/Entrance/OrganizationManagement/EntityOrganization",
//         title: "实体组织"
//       },
//       {
//         path: "/Entrance/OrganizationManagement/Virtualorganization",
//         title: "虚拟组织"
//       },
//       {
//         path: "/Entrance/OrganizationManagement/Partymembersview",
//         title: "党员查看"
//       }
//     ]
//   },
//   {
//     title: "党费管理",
//     name: "PartyFeeManagement",
//     src: require(`../static/images/leftMenu/PartyFeeManagement.png`),
//     children: [
//       {
//         path: "/Entrance/PartyFeeManagement/RevenueManagement",
//         title: "收入管理"
//       },
//       {
//         path: "/Entrance/PartyFeeManagement/CalculationBase",
//         title: "缴费基数"
//       }
//     ]
//   },
//   {
//     title: "安全管理",
//     name: "SafetyManagement",
//     src: require(`../static/images/leftMenu/SafetyManagement.png`),
//     children: [
//       {
//         path: "/Entrance/SafetyManagement/securityStrategy",
//         title: "安全策略"
//       }
//     ]
//   },
//   {
//     title: "开放平台",
//     name: "Openplatform",
//     src: require(`../static/images/leftMenu/Openplatform.png`),
//     children: [
//       {
//         path: "/Entrance/Openplatform/AppManager",
//         title: "应用管理"
//       },
//       {
//         path: "/Entrance/Openplatform/interfaceControl",
//         title: "接口管理"
//       }
//     ]
//   },
//   {
//     title: "权限管理",
//     name: "authorityManagement",
//     src: require(`../static/images/leftMenu/authorityManagement.png`),
//     children: [
//       {
//         path: "/Entrance/authorityManagement/Organizationedit",
//         title: "组织管理"
//       },
//       {
//         path: "/Entrance/authorityManagement/PartyMemberManagement",
//         title: "党员管理"
//       },
//       {
//         path: "/Entrance/authorityManagement/UserManagement",
//         title: "用户管理"
//       },
//       {
//         path: "/Entrance/authorityManagement/RoleGroupManagement",
//         title: "角色组管理"
//       }
//     ]
//   },
//   {
//     title: "表单管理",
//     name: "FormManagement",
//     src: require(`../static/images/leftMenu/FormManagement.png`),
//     children: [
//       {
//         path: "/Entrance/FormManagement/MyForm",
//         title: "我的表单"
//       },
//       {
//         path: "/Entrance/FormManagement/formCloud",
//         title: "云表单"
//       }
//     ]
//   },
//   {
//     title: "系统设置",
//     name: "SystemSettings",
//     src: require(`../static/images/leftMenu/SystemSettings.png`)
//   },
//   {
//     title: "数据集成",
//     name: "BaseDocking",
//     src: require(`../static/images/leftMenu/Strongbase.png`),
//     children: [
//       {
//         path: "/Entrance/BaseDocking/OrganizationData",
//         title: "强基数据"
//       },
//       {
//         path: "/Entrance/BaseDocking/ZwdList",
//         title: "浙政钉数据"
//       },
//       {
//         path: "/Entrance/BaseDocking/partCount",
//         title: "党员进社村统计"
//       },
//       {
//         path: "/Entrance/BaseDocking/DataMonitoring",
//         title: "接口监控"
//       }
//     ]
//   },
//   {
//     title: "组织建设",
//     name: "AccountManagement",
//     src: require(`../static/images/leftMenu/AccountManagement.png`),
//     children: [
//       {
//         path: "/Entrance/AccountManagement/Account",
//         title: "账号管理"
//       },
//       {
//         path: "/Entrance/AccountManagement/AccountGroup",
//         title: "账号组管理"
//       }
//     ]
//   },
//   {
//     title: "使用情况",
//     name: "usAge",
//     src: require(`../static/images/leftMenu/usageStatisticsCount.png`),
//     children: [
//       {
//         path: "/Entrance/usAge/usageStatistics",
//         title: "使用情况统计"
//       }
//     ]
//   }