import type { ComponentProps, FC } from "react"

const Csv: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="a"
      maskUnits="userSpaceOnUse"
      x="3"
      y="3"
      width="18"
      height="18"
      fill="#000"
    >
      <path fill="#fff" d="M3 3h18v18H3z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8889 5H8.11111C6.39289 5 5 6.39289 5 8.11111v7.77779C5 17.6071 6.39289 19 8.11111 19h7.77779C17.6071 19 19 17.6071 19 15.8889V8.11111C19 6.39289 17.6071 5 15.8889 5Zm0 12.4444H8.1111c-.05369 0-.10674-.0027-.15904-.008.0523.0053.10536.008.15905.008h7.77779Zm1.5555-1.5555c0 .8054-.6121 1.4679-1.3965 1.5475.7844-.0797 1.3965-.7421 1.3965-1.5475V8.11111v7.77779Z"
      />
    </mask>
    <path
      d="M15.8889 19.4444c1.1046 0 2-.8954 2-2 0-1.1045-.8954-2-2-2v4Zm-7.7778-2 .00001-2H8.1111v2Zm-.15904-.008.20206-1.9898c-1.09891-.1115-2.08022.6888-2.19182 1.7877-.1116 1.099.68877 2.0803 1.78768 2.1919l.20208-1.9898Zm8.09584 0-.2021-1.9897c-1.0989.1116-1.8992 1.0929-1.7876 2.1918.1116 1.0989 1.0929 1.8993 2.1918 1.7877l-.2021-1.9898Zm3.3965-9.32529c0-1.10457-.8954-2-2-2-1.1045 0-2 .89543-2 2h4ZM8.11111 7h7.77779V3H8.11111v4ZM7 8.11111C7 7.49746 7.49746 7 8.11111 7V3C5.28832 3 3 5.28832 3 8.11111h4Zm0 7.77779V8.11111H3v7.77779h4ZM8.11111 17C7.49746 17 7 16.5025 7 15.8889H3C3 18.7117 5.28832 21 8.11111 21v-4Zm7.77779 0H8.11111v4h7.77779v-4ZM17 15.8889C17 16.5025 16.5025 17 15.8889 17v4C18.7117 21 21 18.7117 21 15.8889h-4Zm0-7.77779v7.77779h4V8.11111h-4ZM15.8889 7C16.5025 7 17 7.49746 17 8.11111h4C21 5.28832 18.7117 3 15.8889 3v4Zm0 8.4444H8.11111l-.00001 4h7.7778v-4Zm-7.7778 0c.01378 0 .02816.0007.04302.0022l-.40411 3.9796c.11944.0121.23994.0182.36109.0182v-4Zm-.36112 3.9818c.11935.0121.23985.0182.36113.0182v-4c.01389 0 .02828.0008.04304.0022l-.40417 3.9796Zm.36113.0182h7.77779v-4H8.11111v4Zm8.13889-.0182c1.7951-.1823 3.1944-1.6951 3.1944-3.5373h-4c0-.2314.1752-.4193.4015-.4423l.4041 3.9796Zm-.8056-3.5373c0-.2314.1752-.4193.4014-.4422l.4042 3.9795c1.795-.1823 3.1944-1.6951 3.1944-3.5373h-4Zm0-7.77779v7.77779h4V8.11111h-4Zm4 0c0-.07155-.0038-.14596-.0124-.22267-.0086-.07678-.0218-.15478-.0403-.23343-.0184-.07869-.0416-.15651-.0697-.233-.0281-.07648-.0604-.15005-.0963-.22045-.036-.07036-.0749-.13629-.1158-.1978-.0408-.06145-.0832-.11775-.1258-.16912-.085-.10251-.1704-.18478-.2468-.2495-.0383-.03245-.0749-.061-.1089-.08594-.034-.02494-.0659-.04672-.0949-.06556-.029-.01883-.0558-.03518-.0797-.04914-.0239-.01396-.0456-.02598-.0644-.03606-.0188-.01008-.0355-.01864-.0493-.02558-.0139-.00694-.0257-.01268-.0348-.01701-.009-.00429-.0163-.00769-.0207-.00971-.0022-.00104-.004-.00187-.0051-.00238-.0006-.00025-.001-.00046-.0013-.00059-.0002-.00006-.0003-.00011-.0003-.00014-.0001-.00001-.0001-.00003-.0001-.00004v-.00001c-.0006-.00027.0028.00131.0068.00316.0044.00202.0117.00541.0207.00971.0091.00433.0209.01007.0348.01701.0138.00694.0305.0155.0493.02558.0188.01008.0405.0221.0644.03606.0239.01396.0507.03031.0797.04914.029.01883.0609.04062.0949.06556.0339.02494.0706.05349.1089.08594.0764.06472.1618.14698.2468.24949.0426.05138.085.10768.1258.16913.0409.06151.0798.12744.1157.19779.036.07041.0683.14397.0964.22046.028.07648.0513.15431.0697.23299.0185.07865.0317.15665.0403.23344.0086.07671.0124.15112.0124.22267h-4c0 .07154.0039.14595.0125.22267.0086.07678.0218.15478.0402.23343.0185.07868.0417.15651.0698.233.0281.07648.0604.15005.0963.22045.036.07036.0749.13629.1158.1978.0408.06144.0832.11775.1258.16912.0849.10251.1704.18478.2468.2495.0383.03244.0749.061.1089.08594.0339.02493.0658.04672.0949.06556.029.01883.0558.03517.0797.04914.0239.01396.0456.02598.0644.03606.0188.01007.0354.01864.0493.02558.0139.00693.0257.01268.0348.01701.009.00429.0163.00769.0207.00971.0022.00104.004.00187.0051.00237.0006.00026.001.00047.0013.00059.0001.00007.0003.00012.0003.00015.0001.00001.0001.00003.0001.00004v.00001c.0006.00026-.0028-.00131-.0068-.00316-.0044-.00202-.0117-.00542-.0207-.00971-.0091-.00433-.0209-.01008-.0348-.01701-.0139-.00694-.0305-.01551-.0493-.02558-.0188-.01008-.0405-.0221-.0644-.03606-.0239-.01396-.0507-.03031-.0797-.04914-.029-.01884-.061-.04062-.0949-.06556-.034-.02494-.0706-.0535-.1089-.08594-.0764-.06472-.1619-.14699-.2468-.2495-.0426-.05137-.085-.10767-.1258-.16912-.0409-.06151-.0798-.12744-.1158-.1978-.0359-.0704-.0682-.14397-.0963-.22045-.0281-.07649-.0513-.15431-.0698-.233-.0184-.07865-.0316-.15665-.0402-.23343-.0086-.07671-.0125-.15112-.0125-.22267h4Zm0 7.77779V8.11111h-4v7.77779h4Z"
      fill="#14B8A6"
      mask="url(#a)"
    />
    <rect x="7" y="7" width="4" height="2" rx="1" fill="#14B8A6" />
    <rect x="7" y="11" width="4" height="2" rx="1" fill="#14B8A6" />
    <rect x="7" y="15" width="4" height="2" rx="1" fill="#14B8A6" />
    <rect x="13" y="7" width="4" height="2" rx="1" fill="#14B8A6" />
    <rect x="13" y="11" width="4" height="2" rx="1" fill="#14B8A6" />
    <rect x="13" y="15" width="4" height="2" rx="1" fill="#14B8A6" />
  </svg>
);

export default Csv;
