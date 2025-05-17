export type ProjectCategory = 'app' | 'website' | 'design' | 'other';

export interface Project {
  id: string;
  title: string;
  description: string;
  description_long?: string;
  image: string | string[];
  icon?: string;
  category: ProjectCategory;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  status?: string;
  date?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: '真相配方',
    description: '通过扫描自动识别包装带上的添加剂信息，根据添加剂安全级别提示，为您提供安全饮食生活。',
    icon: 'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/real_eat.png',
    image: [
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/show/real-eat/01.png',
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/show/real-eat/02.png',
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/real-eat-1.png',
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/show/real-eat/04.png'
    ],
    category: 'app',
    technologies: ['生活', '工具', 'iOS', 'AI生成'],
    liveUrl: '',
    githubUrl: '',
    featured: true,
    status: '审核中',
    date: '2025/05'
  },
  {
    id: '2',
    title: '原研药清单',
    description: '实时更新的进口原研药数据库，辅助您查询药品信息，了解药品价格，为您的健康保驾护航。',
    icon: 'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/39d496dc-2c6d-48ce-9306-d013929d2ddb.png',
    image: [
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/show/ori/WechatIMG12.jpg',
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/show/ori/WechatIMG13.jpg',
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/show/ori/WechatIMG14.jpg'
    ],
    category: 'app',
    technologies: ['生活', '药品', 'iOS', 'AI生成'],
    liveUrl: '',
    githubUrl: '',
    status: '审核中',
    date: '2025/05'
  },
  {
    id: '3',
    title: 'BTC合约助手',
    description: 'BTC涨停分析工具，重点针对10分钟的事件合约进行预判，预测10分钟内的涨跌概率。(交易有风险，投资需谨慎)',
    icon: 'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/btc-helper.png',
    image: [
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/show/btc-helper/01.png',
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/show/btc-helper/02.png',
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/show/btc-helper/03.png'
    ],
    category: 'app',
    technologies: ['BTC', '合约', 'iOS', 'AI生成'],
    liveUrl: '',
    githubUrl: '',
    status: '审核中, 内容敏感已经被拒了一次',
    date: '2024/12'
  },
  {
    id: '4',
    title: 'ClipyBuffer',
    description: '一款极简的剪切板管理工具，支持文本、图片等格式的复制粘贴记录保存。',
    icon: 'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/copy.png',
    image: [
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/copy/01.png',
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/copy/02.png',
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/IMG_0136.png'
    ],
    category: 'app',
    technologies: ['工具', 'iOS', 'AI生成'],
    liveUrl: '',
    githubUrl: '',
    status: '审核中',
    date: '2025/05'
  },
  {
    id: '5',
    title: '帧间漫游',
    description: '帧间漫游 - 发现Live Photo中的精彩瞬间，将Live Photo中的所有帧提取并展示，发现那些易被忽略的精彩表情和动作。',
    icon: 'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/photo.png',
    image: [
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/live/04.png',
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/live/01.png',
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/live/02.png',
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/live/03.png'
    ],
    category: 'app',
    technologies: ['工具', '实况照片', 'iOS', 'AI生成'],
    liveUrl: '',
    status: '已上线',
    date: '2025/04'
  },
  {
    id: '6',
    title: 'Coin Monitor',
    description: '「Coin Monitor」是一款为加密货币交易者打造的数字资产监控工具，帮助您实时追踪市场动态和管理自己的加密货币资产。通过简洁直观的界面，让您随时掌握市场机会和持仓状态，辅助您做出更明智的交易决策。',
    icon: 'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/monitor.png',
    image: [
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/monitor/01.png',
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/monitor/02.png',
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/monitor/04.png',
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/monitor/06.png',
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/monitor/07.png',
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/09.png'
    ],
    category: 'app',
    technologies: ['BTC', '加密货币', 'iOS', 'AI生成'],
    liveUrl: '',
    githubUrl: '',
    status: '审核中',
    date: '2025/04'
  },
  {
    id: '7',
    title: '人生100',
    description: '人生清单. 记录您的人生目标，帮助您实现梦想。',
    icon: 'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/lift.png',
    image: [
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/lift/WechatIMG16.jpg',
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/lift/WechatIMG17.jpg',
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/lift/WechatIMG18.jpg'
    ],
    category: 'app',
    technologies: ['清单', '工具', '人生目标', 'iOS', 'AI生成'],
    liveUrl: '',
    githubUrl: '',
    status: '开发中',
    date: '2025/05'
  },
  {
    id: '8',
    title: 'huhu提词器',
    description: '一款简单的文本提词器工具，我的第一个iOS应用，也是我第一个上架的App。',
    icon: 'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/huhu.png',
    image: [
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/huhu/01.png',
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/huhu/02.png',
      'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/huhu/03.png'
    ],
    category: 'app',
    technologies: ['工具', 'iOS', 'AI生成'],
    liveUrl: '',
    githubUrl: '',
    status: '已上线',
    date: '2025/03'
  },
  // {
  //   id: '9',
  //   title: 'AR Furniture Viewer',
  //   description: 'An augmented reality app that lets users visualize furniture in their space before purchasing.',
  //   icon: 'https://cdn-icons-png.flaticon.com/512/2231/2231605.png',
  //   image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   category: 'website',
  //   technologies: ['Swift', 'ARKit', 'SceneKit', '3D Modeling'],
  //   liveUrl: 'https://example.com/ar-furniture',
  // },
  {
    id: '10',
    title: 'WikiKit',
    description: '一款适用于iOS的Wiki工具，支持搭配Markdown文件，快速搭建一个Wiki相关的App。',
    icon: 'https://cdn-icons-png.flaticon.com/512/2231/2231605.png',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'design',
    technologies: ['Swift', 'ToolKit', 'Wiki', 'iOS'],
    date: '2025/05',
    status: '测试中'
  },
  {
    id: '11',
    title: 'AntzOS',
    description: '一个随心所欲制造的操作系统Antz。（支持部分自定义命令、显存操作、vim、图片显示、启动动画、进程与时钟）',
    icon: 'https://cdn-icons-png.flaticon.com/512/2231/2231605.png',
    image: 'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/WX20250517-195419%402x.png',
    category: 'other',
    technologies: ['操作系统', 'C语言', '汇编语言'],
    liveUrl: 'https://github.com/CasterWx/AntzOS?tab=readme-ov-file',
    githubUrl: 'https://github.com/CasterWx/AntzOS?tab=readme-ov-file',
    date: '2019/02'
  },
  {
    id: '12',
    title: 'AntzGameOS',
    description: '基于AntzOS的操作系统级别RPG冒险游戏。(手持一把大刀，开局遇到lv.99的Linus之父。)',
    icon: 'https://cdn-icons-png.flaticon.com/512/2231/2231605.png',
    image: 'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/WX20250517-195604%402x.png',
    category: 'other',
    technologies: ['Game', 'RPG', '操作系统', 'C语言', '汇编语言'],
    liveUrl: 'https://github.com/CasterWx/AntzGameOS?tab=readme-ov-file',
    githubUrl: 'https://github.com/CasterWx/AntzGameOS?tab=readme-ov-file',
    date: '2019/08'
  },
  {
    id: '13',
    title: 'python-girlfriend-mood',
    description: '😚 女朋友聊天时的情绪波动图谱，没女朋友的可自用(雾）。(17年的无LLM时代的玩具，现在看来有点蠢，但当时觉得很有趣)',
    icon: 'https://cdn-icons-png.flaticon.com/512/2231/2231605.png',
    image: 'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/WX20250517-200558%402x.png',
    category: 'other',
    technologies: ['情绪分析'],
    liveUrl: 'https://github.com/CasterWx/python-girlfriend-mood',
    githubUrl: 'https://github.com/CasterWx/python-girlfriend-mood',
    date: '2017/08'
  },
  {
    id: '14',
    title: 'Jmeter-Plus',
    description: '基于jmeter扩展dubbo压测能力。(不再进行维护)',
    icon: 'https://cdn-icons-png.flaticon.com/512/2231/2231605.png',
    image: 'https://antzuhl-file.oss-cn-beijing.aliyuncs.com/app_list/img/WX20250517-200129%402x.png',
    category: 'other',
    technologies: ['工具', '压测', 'jmeter'],
    liveUrl: 'https://github.com/CasterWx/jmeter-plus',
    githubUrl: 'https://github.com/CasterWx/jmeter-plus',
    date: '2021/03'
  }
];