const theme = {
  p: {
    x: {
      xs: "sm:px-14 px-4",
      sm: "sm:px-18 px-8",
      md: "sm:px-22 px-12",
      lg: "sm:px-26 px-16",
      xl: "sm:px-34 px-24",
      xxl: "sm:px-58 px-48",
    },
    y: {},
    xy: {},
  },
  m: {},
  h: {
    navbar: "h-[48px]",
    categoriesBar: "h-[50px]",
    // categoriesBarExpanded: "",
    content: "h-[calc(100vh-48px)]",
    contentShrunkWithCb: "h-[calc(100vh-48px-50px)]",
    // contentShrunkWithCbExpanded: "",
  },
  w: {},
  top: {
    categoriesBar: "mt-[48px]",
    content: "mt-[48px]",
    contentWithCb: "",
    // contentWithCbExpanded: "",
  },
  rounded: {
    cardBorder: "",
    utilityCardBorder: "rounded-md",
  },
  font: {
    color: {
      primary: "text-slate-100",
      keyword: "text-red-200",
      navbarForeground: "text-white",
      fieldInputPlaceholderTextColor: "",
    },
    customTypography: {
      heroHeaderText: "",
      heroSubText: "",
      sectionHeaderText: "",
      sectionSubText: "",
    },
  },
  bg: {
    primary: "bg-stone-950",
    navbarBackground: "bg-slate-100",
    cardBackground: "",
    utilityCardBackground: "bg-zinc-700",
    // contactModalBackground: "bg-red-200",
    // headerBarBackground: "",
    // fieldInputBackground: "",
  },
  btn: {
    rounded: {
      default: "",
    },
    pill: {
      default: "",
    },
    outline: {
      default: "",
    },
    disabled: {
      default: "",
    },
    customBtn: {},
  },
};

export default theme;
