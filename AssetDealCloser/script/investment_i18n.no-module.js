// investment_i18n.no-module.js (enhanced)
const PAGE_MESSAGES = {
  th: {
    __doc_title: "Asset Deal Closer — ที่ปรึกษาการลงทุน",
    nav_home:"หน้าแรก", nav_services:"บริการ", nav_about:"เกี่ยวกับเรา", nav_invest:"ที่ปรึกษาการลงทุน", nav_contact:"ติดต่อ",
    footer_line1:"© 2025 Asset Deal Closer (Thailand) Co., Ltd.",
    footer_line2:"Bangkok, Thailand | Tel: 089-444-1021 | Email: pls1.jiratth@gmail.com",

    inv_h1:"ที่ปรึกษาการลงทุนอสังหาฯ",
    inv_intro:"บริการตั้งแต่การค้นหาโอกาส–ประเมินดีล–ออกแบบโครงสร้างการลงทุน–จนถึงการติดตามผลหลังปิดดีล เพื่อให้ผลตอบแทนคุ้มความเสี่ยงและสอดคล้องเป้าหมายของนักลงทุน",

    off_h:"เราทำอะไรให้คุณ",
    off_1_h:"ค้นหา & คัดกรองดีล",    off_1_p:"สแกนทำเล/ประเภทสินทรัพย์ วิเคราะห์ซัพพลาย–ดีมานด์ และคัดกรองตามเกณฑ์ผลตอบแทน",
    off_2_h:"วิเคราะห์ตัวเลข",       off_2_p:"ทำแบบจำลอง CF/NPV/IRR, เซนซิทิวิตี้, เบรคอีเวน และวิเคราะห์ความเสี่ยงเชิงสถานการณ์",
    off_3_h:"โครงสร้างดีล",          off_3_p:"ออกแบบ LTV, DSCR, Waterfall, กรรมสิทธิ์/นิติบุคคล, และเอกสารเชิงพาณิชย์",
    off_4_h:"กลยุทธ์เพิ่มมูลค่า",     off_4_p:"ปรับใช้งาน/รีโนเวต/รีแบรนด์/รีโพซิชัน เพื่อยกระดับค่าเช่า/อัตราเข้าอยู่/ราคาขาย",
    off_5_h:"ระดมทุน & เจรจา",       off_5_p:"เตรียม IM/Teaser, สื่อสารกับผู้ให้กู้/นักลงทุน, วงรอบการอนุมัติ และการเจรจาเงื่อนไข",
    off_6_h:"ติดตามหลังปิดดีล",      off_6_p:"รายงานผลการดำเนินงาน KPI/คาช์โฟลว์ และแผน Exit/Refinance",

    strat_h:"กลยุทธ์ยอดนิยม",
    strat_1_h:"Yield Play", strat_1_p:"ซื้อสินทรัพย์กระแสเงินสดดี ปรับเพิ่มค่าเช่า/ลดช่องว่างรายได้",
    strat_2_h:"Value-Add",  strat_2_p:"รีโนเวต ปรับผัง เพิ่มประสิทธิภาพพื้นที่ เพื่อ Upside ราคาขาย/ค่าเช่า",
    strat_3_h:"Opportunistic", strat_3_p:"ซื้อทรัพย์ต่ำกว่ามูลค่า/สถานการณ์พิเศษ แล้วปรับโครงสร้างเพื่อสร้างส่วนต่าง",

    metric_h:"ตัวชี้วัดที่เราดู",
    m_irr:"อัตราผลตอบแทนภายในโครงการ",
    m_npv:"มูลค่าปัจจุบันสุทธิ",
    m_dscr:"ความสามารถชำระหนี้",
    m_vac:"อัตราพื้นที่ว่าง/อัตราเข้าอยู่",

    proc_h:"ขั้นตอนการทำงาน",
    proc_1_h:"บรีฟเป้าหมาย", proc_1_p:"กำหนดกรอบผลตอบแทน/ความเสี่ยง/วงเงิน",
    proc_2_h:"สำรวจ–คัดกรอง", proc_2_p:"รวบรวมข้อมูลทรัพย์/ตลาด และจัดอันดับโอกาส",
    proc_3_h:"ดีลดิว/แบบจำลอง", proc_3_p:"Site visit, DD เชิงพาณิชย์, สร้างโมเดล CF",
    proc_4_h:"เจรจา–โครงสร้าง", proc_4_p:"Term sheet, เงินกู้, โครงสร้างถือครอง",
    proc_5_h:"ปิดดีล & ติดตาม", proc_5_p:"เอกสารครบ/รายงาน KPI/แผน Exit",

    case_h:"ตัวอย่างผลลัพธ์",
    case_1_h:"อาคารสำนักงาน (Value-Add)", case_1_p:"เพิ่มอัตราเข้าอยู่จาก 72% → 91% ภายใน 10 เดือน IRR เป้าหมาย 17%",
    case_2_h:"คลังสินค้า (Yield Play)",    case_2_p:"อัปค่าเช่าเฉลี่ย +11% ต่อปี ระยะสัญญายืดเป็น 3–5 ปี",
    case_3_h:"ที่อยู่อาศัย (Opportunistic)", case_3_p:"ซื้อส่วนลด 18% จากมูลค่าตลาด ปรับภาพลักษณ์ ก่อนขายออก",

    risk_h:"การจัดการความเสี่ยง",
    risk_1:"เซนซิทิวิตี้อัตราว่าง/ค่าเช่า/อัตราดอกเบี้ย",
    risk_2:"เงื่อนไขสัญญาเชิงพาณิชย์และประเด็นกฎหมายไทย",
    risk_3:"ทางเลือก Exit/Refinance และเสถียรภาพคาช์โฟลว์",

    faq_h:"คำถามที่พบบ่อย",
    faq_1_q:"ขั้นต่ำในการลงทุนเท่าไร?", faq_1_a:"ยืดหยุ่นตามประเภทสินทรัพย์/โครงสร้างดีล เริ่มตั้งแต่ระดับล้านบาทขึ้นไป",
    faq_2_q:"ให้บริการต่างจังหวัดหรือไม่?", faq_2_a:"ให้บริการ โดยทีม/พาร์ทเนอร์ในหัวเมืองสำคัญ",
    faq_3_q:"ช่วยระดมทุนด้วยหรือไม่?",   faq_3_a:"ได้ เราช่วยเตรียมเอกสารและประสานผู้ให้กู้/นักลงทุนตามหลักเกณฑ์",

    cta_h:"ให้ตัวเลขตอบแทนคุณ—เริ่มออกแบบดีลวันนี้",
    cta_p:"โทร 089-444-1021 หรืออีเมล pls1.jiratth@gmail.com",
    cta_btn:"ขอปรึกษาผู้เชี่ยวชาญ"
  },

  en: {
    __doc_title: "Asset Deal Closer — Investment",
    nav_home:"Home", nav_services:"Services", nav_about:"About", nav_invest:"Investment", nav_contact:"Contact",
    footer_line1:"© 2025 Asset Deal Closer (Thailand) Co., Ltd.",
    footer_line2:"Bangkok, Thailand | Tel: +66 89-444-1021 | Email: pls1.jiratth@gmail.com",

    inv_h1:"Real-Estate Investment Advisory",
    inv_intro:"From sourcing and deal analysis to capital structuring and post-closing monitoring — we tailor returns to your risk profile.",

    off_h:"What We Deliver",
    off_1_h:"Sourcing & Screening", off_1_p:"Market/location scans, supply–demand review, return-based filtering.",
    off_2_h:"Financial Analysis",   off_2_p:"CF/NPV/IRR models, sensitivity, break-even, scenario risk analysis.",
    off_3_h:"Deal Structuring",    off_3_p:"LTV, DSCR, waterfall, SPV/ownership, commercial documents.",
    off_4_h:"Value Creation",      off_4_p:"Repurpose/renovation/repositioning to lift rent/occupancy/prices.",
    off_5_h:"Capital & Negotiation", off_5_p:"IM/teaser prep, lender/investor comms, approvals & terms.",
    off_6_h:"Post-Closing",        off_6_p:"KPI/CF reporting and Exit/Refinance planning.",

    strat_h:"Popular Strategies",
    strat_1_h:"Yield Play", strat_1_p:"Acquire strong cash-flow assets; tighten leakage, lift rents.",
    strat_2_h:"Value-Add",  strat_2_p:"Renovate/optimize layout to unlock pricing/occupancy upside.",
    strat_3_h:"Opportunistic", strat_3_p:"Distressed/discounted assets with restructuring for spread.",

    metric_h:"Key Metrics",
    m_irr:"Internal Rate of Return",
    m_npv:"Net Present Value",
    m_dscr:"Debt Service Coverage Ratio",
    m_vac:"Vacancy/Occupancy",

    proc_h:"Our Process",
    proc_1_h:"Brief & Targets", proc_1_p:"Define return bands, risk, and capital.",
    proc_2_h:"Scan & Shortlist", proc_2_p:"Collect market/asset data; rank opportunities.",
    proc_3_h:"DD & Modeling",    proc_3_p:"Site visits, commercial DD, CF model.",
    proc_4_h:"Negotiate & Structure", proc_4_p:"Term sheet, debt, holding structure.",
    proc_5_h:"Close & Monitor",  proc_5_p:"Documentation, KPI reporting, exit plan.",

    case_h:"Case Snapshots",
    case_1_h:"Office (Value-Add)", case_1_p:"Occupancy 72%→91% in 10 months; IRR target 17%.",
    case_2_h:"Warehouse (Yield)",  case_2_p:"Avg. rent +11% YoY; lease terms 3–5 years.",
    case_3_h:"Residential (Opp.)", case_3_p:"Bought at 18% discount; brand refresh then sell.",

    risk_h:"Risk Management",
    risk_1:"Sensitivity to vacancy/rent/interest rate.",
    risk_2:"Commercial terms & Thai regulatory factors.",
    risk_3:"Exit/refi options and cash-flow resilience.",

    faq_h:"FAQs",
    faq_1_q:"Minimum ticket?",     faq_1_a:"Flexible by asset type/structure; from low millions (THB).",
    faq_2_q:"Up-country coverage?", faq_2_a:"Yes, via team/partners in key provinces.",
    faq_3_q:"Capital raising support?", faq_3_a:"Yes — docs and coordination with lenders/investors.",

    cta_h:"Let the numbers work for you",
    cta_p:"Call +66 89-444-1021 or email pls1.jiratth@gmail.com",
    cta_btn:"Speak to an Advisor"
  },

  zh: {
    __doc_title: "Asset Deal Closer — 投资顾问",
    nav_home:"首页", nav_services:"服务", nav_about:"关于我们", nav_invest:"投资顾问", nav_contact:"联系",
    footer_line1:"© 2025 Asset Deal Closer (Thailand) Co., Ltd.",
    footer_line2:"曼谷，泰国 | 电话：+66 89-444-1021 | 电子邮箱：pls1.jiratth@gmail.com",

    inv_h1:"不动产投资顾问",
    inv_intro:"覆盖：项目搜寻、交易分析、资金结构到成交后跟踪——以您的风险偏好为核心定制回报。",

    off_h:"核心服务",
    off_1_h:"搜寻与筛选", off_1_p:"区域/市场扫描、供需分析、按回报率筛选。",
    off_2_h:"财务分析",   off_2_p:"CF/NPV/IRR 模型、敏感性与情景风险分析。",
    off_3_h:"交易结构",   off_3_p:"LTV、DSCR、分成结构、SPV/持有与商用文件。",
    off_4_h:"价值提升",   off_4_p:"改造/重定位，提升租金/入住率/售价。",
    off_5_h:"资金与谈判", off_5_p:"制作 IM/Teaser，与贷方/投资人沟通与谈判。",
    off_6_h:"成交后管理", off_6_p:"KPI/现金流报告与退出/再融资计划。",

    strat_h:"常用策略",
    strat_1_h:"收益策略", strat_1_p:"购入现金流稳健资产，提升租金并减少损耗。",
    strat_2_h:"价值提升", strat_2_p:"改造与优化布局，释放价格/入住率的上升空间。",
    strat_3_h:"机会型",   strat_3_p:"折价/困境资产，通过重组获取价差。",

    metric_h:"关键指标",
    m_irr:"内部收益率",
    m_npv:"净现值",
    m_dscr:"本息偿付比",
    m_vac:"空置/入住率",

    proc_h:"流程",
    proc_1_h:"目标梳理", proc_1_p:"确定回报/风险区间与资本规模。",
    proc_2_h:"筛选清单", proc_2_p:"收集市场/资产数据并排序机会。",
    proc_3_h:"尽调与建模", proc_3_p:"实勘、商用尽调与现金流模型。",
    proc_4_h:"谈判与结构", proc_4_p:"条款、债务与持有架构。",
    proc_5_h:"成交与跟踪", proc_5_p:"文件完善、KPI 报告与退出方案。",

    case_h:"案例速览",
    case_1_h:"写字楼（价值提升）", case_1_p:"入住率 72%→91%（10 个月），IRR 目标 17%。",
    case_2_h:"仓储（收益型）",     case_2_p:"租金年增约 11%，租期 3–5 年。",
    case_3_h:"住宅（机会型）",     case_3_p:"以低于市价 18% 收购，品牌焕新后出售。",

    risk_h:"风险管理",
    risk_1:"空置/租金/利率的敏感性。",
    risk_2:"商业条款与泰国法规相关因素。",
    risk_3:"退出/再融资方案与现金流稳健性。",

    faq_h:"常见问题",
    faq_1_q:"投资门槛？",   faq_1_a:"依资产/结构而定，起点为百万泰铢级别。",
    faq_2_q:"覆盖外府？",   faq_2_a:"覆盖，联合各省团队/伙伴执行。",
    faq_3_q:"可协助募资？", faq_3_a:"可以，协助文件与对接贷方/投资人。",

    cta_h:"让数字替您工作——马上开始",
    cta_p:"致电 +66 89-444-1021 或电邮 pls1.jiratth@gmail.com",
    cta_btn:"联系顾问"
  }
};
window.initI18n(PAGE_MESSAGES);
