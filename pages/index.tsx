import type { NextPage } from 'next'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import gsap from 'gsap';
import "animate.css/animate.min.css";
import Typewriter from '../components/typewriter';
import Typewriter2 from '../components/typewriter2';
import Textfit  from 'react-textfit';
var i = 0;

const Home: NextPage = () => {
  const { t } = useTranslation()
  let router = useRouter();
  const [hight, setHight] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    gsap.from("#cloud", { duration: 2, x: 200, y: 200, opacity: 0, delay: 3, ease: "elastic" });
    portrate();
    var timerIntervalbefore = setInterval(function () {
      var timerInterval = setInterval(function () {
        let element = document.querySelector("span.n");
        if (!element) {
          clearInterval(timerInterval);
          clearInterval(timerIntervalbefore);
          return
        }
        element.className = "";
        element.className = "glow"
        if (i > 0) {
          document.querySelector(".glow")?.classList.remove("glow");
        }
        i++
        if (i === 227) {
          document.querySelector(".glow")?.classList.remove("glow");
        }
      }, 60);
    }, 4000);
    setHight(window.innerHeight);
    setWidth(window.innerWidth);
  
  }, []);

  function portrate() {
    let el = document.getElementById("cardImage1")?.firstChild;
    
    let i = 0;
      var timerInterval = setInterval(function () { 
        if (!el) {
          
          document.getElementById("cardImage1").style.animation="animate ease-in 8s normal 1";
          document.getElementById("cardImage2").style.animation="animate linear 8s reverse 0.5s 1";
          document.getElementById("cardImage1").style.opacity=0;
          document.getElementById("cardImage2").style.opacity=1;
          clearInterval(timerInterval);
          
          return
        }
        el.style.opacity = 1;
        el = el.nextElementSibling;
        i++;

      }, 80);
  }
  
  
  // 1120/1483 *hight*.4     `;
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 ">
      <Head>
        <title>{t('common:Sergey Bolotnikov Portfolio')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Fragment>


      <main className="container" style={{ maxWidth: "1280px", overflow: "hidden" }}>
          <div id='cardGreeting' className="jumbotron jumbotron-fluid bg-transparent">

            <div className="d-flex text-dark align-middle justify-content-center">
              {/* <img
                src={"/images/office.jpg"}
                alt="avatar" id="smScreenBg" 
                style={{ height: `${hight}px` }}
              /> */}
              
                {/* <Animated animateIn='wobble' initiallyVisible={true} animationOut="fadeOut" animationInDuration={2000}   isVisible={true}> */}
                <div style={{ position:"relative", height: "70vh", width:"56.6vh", marginTop: "2.5vh",}}>
                <svg id="cardImage1" viewBox="0 0 1123 1389" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position:"absolute",top:0,left:0, height: "100%", width: "100%",  zIndex: '10' }}>
                  <path style={{ opacity: 0 }} d="M513.5 1332.5L520.5 1385L838 1389L833.5 1371L825 1341.5L815 1285.5L810 1240.5L804.5 1200L799 1139L796 1125L789 1119.5L785.5 1114V1106L786.5 1082.5L780 1087L763 1095.5L752 1106L741.5 1114L733 1125L727 1137.5L716.5 1150.5L699 1154.5L680.5 1172.5L668.5 1186L658.5 1200L662 1192L668.5 1181.5L676.5 1168.5L662 1154.5L645 1150.5V1159.5L640 1170.5H629.5L614.5 1159.5L590.5 1143L574 1130.5L565 1119.5L554.5 1106L547.5 1114L542 1125L537 1137.5L531.5 1143L537 1154.5V1170.5L531.5 1184H525.5V1179.5L517.5 1164.5L505.5 1137.5L496 1114L472.5 1050.5V1067.5L477.5 1092L485.5 1130.5L491.5 1170.5L499 1214.5L505.5 1272.5L513.5 1332.5Z" fill="#A2B0C1" />
                  <path style={{ opacity: 0 }} d="M575.5 1133L598 1149.5L629 1170L639.5 1172L643.5 1167.5L645.5 1160.5L648 1151.5L633 1149.5L618 1133L598 1106.5L579.5 1085H569.5H561L554.5 1090.5V1106.5L561 1114.5L575.5 1133Z" fill="#414A54" />
                  <path style={{ opacity: 0 }} d="M703.5 1353L690.5 1347.5L680.5 1353L674.5 1363.5L680.5 1377.5L690.5 1382.5L698.5 1377.5L703.5 1373.5L707 1363.5L703.5 1353Z" fill="#19191E" />
                  <path style={{ opacity: 0 }} d="M697.5 1265H687L678 1268L674 1277.5V1287L680.5 1294.5L687 1298L697.5 1294.5L704.5 1283V1273.5L697.5 1265Z" fill="#19191E" />
                  <path style={{ opacity: 0 }} d="M580 1124L584 1131.5L587.5 1137L595.5 1140.5L604.5 1137V1131.5L601 1124L592 1117H584L580 1124Z" fill="#19191E" />
                  <path style={{ opacity: 0 }} d="M663.5 1188L656 1204.5L670 1185L679.5 1175.5L692 1163.5L709.5 1149.5L722 1134.5L735 1117.5H726.5L709.5 1123L704.5 1126.5H696L687 1137.5V1155L675.5 1169.5L663.5 1188Z" fill="#486F86" />
                  <path style={{ opacity: 0 }} d="M525 1164.5V1183.5H533L537 1169V1156.5L533 1145.5L537 1138L541 1129L544.5 1122L548.5 1113.5L554.5 1106V1094L560.5 1087L571.5 1084.5L564 1080L550.5 1087L542.5 1091L537 1104L530.5 1113.5L527 1127.5L521 1145.5L525 1164.5Z" fill="#1F1919" />
                  <path style={{ opacity: 0 }} d="M448.5 883L430 849L427 865.5L430 891L446 942.5L454 970.5L463.5 1019.5L470 1048.5L478 1071.5L484 1085.5L497.5 1116L508 1146L517.5 1166.5L525 1181V1166.5L523 1154L527 1141V1126.5L533.5 1111.5L538.5 1101.5L544 1091L555 1085.5L564 1080.5L572 1085.5H578.5V1080.5L555 1053.5L533.5 1022.5L510 990L492.5 960.5L470 926.5L461 903.5L448.5 883Z" fill="#486F86" />
                  <path style={{ opacity: 0 }} d="M693.5 1123L695 1127H706L719.5 1113.5L745.5 1101L757 1087L770.5 1070L776 1055.5L778 1035.5L774.5 1026.5L770.5 1035.5L762 1052.5L750.5 1068.5L735.5 1087L719.5 1101L704 1113.5L693.5 1123Z" fill="#414A54" />
                  <path style={{ opacity: 0 }} d="M696 1161.5L680 1175L692 1171.5L707 1157.5L720.5 1146L728 1135.5L736 1122L749 1113.5L757.5 1102L766.5 1098L775.5 1090L786.5 1083L791 1062V1056.5L794 1045V1031.5L791 1024H783L777 1031.5V1042.5L775.5 1055.5L770 1071L760 1083L753 1092L743.5 1102L732 1106L719 1113.5L708.5 1124L714.5 1122L732 1117V1122L720.5 1135.5L707 1149.5L696 1161.5Z" fill="#1F1919" />
                  <path style={{ opacity: 0 }} d="M783.5 1095.5V1117.5L789 1115L793.5 1100.5L799 1080L804.5 1066V1058V1047L800 1037L793.5 1024V1037V1047L786.5 1072V1083L783.5 1095.5Z" fill="#2D3037" />
                  <path style={{ opacity: 0 }} d="M798 859.5L792.5 831.5L786 834.5L778.5 859.5V894V919.5V971L769 1037H773.5L778.5 1033.5H788.5L796 1037L804 1048L804.5 1065.5L798 1083L793.5 1100.5L789 1115L785.5 1116.5L795 1124.5L797.5 1131.5V1126L798 1124L801 1107.5L807 1087.5L811.5 1071.5L814 1053.5V1044.5L812 1032.5L807 1015.5L801.5 993V960V934L801 902L798 859.5Z" fill="#486F86" />
                  <path style={{ opacity: 0 }} d="M687 1180H679L671 1183L667 1195.5L672.5 1204L679 1209.5H687L696 1204V1195.5L692.5 1186L687 1180Z" fill="#19191E" />
                  <path style={{ opacity: 0 }} d="M801.5 1108.5L798 1120H793L798 1108.5L801.5 1088L807.5 1071L813 1058.5V1042.5L807.5 1027.5L801.5 998.5V958V922.5L798 892V859.5L793 834L788 820.5V801.5L798 812.5L813 841L820.5 859.5L824.5 878V896L817 928.5L820.5 954.5V1002.5L824.5 1042.5L820.5 1062L813 1082L807.5 1097.5L801.5 1108.5Z" fill="#181516" />
                  <path style={{ opacity: 0 }} d="M481.5 935L462.5 906.5L470.5 931L481.5 947.5L495 964L506.5 986.5L522.5 1010L534.5 1026.5L553 1052.5L574.5 1077.5L580.5 1086.5L600.5 1111.5L632 1149L659 1154L640 1132L619.5 1105.5L600.5 1082.5L576.5 1056.5L563 1040.5L549 1022L525 992.5L495 952.5L481.5 935Z" fill="#88412D" />
                  <path style={{ opacity: 0 }} d="M414.5 811L411 784L431.5 793L457 822.5L483.5 853.5L514 879.5L542 888H565.5L597.5 892L629.5 888L656.5 879.5L690 888L712 874L723 862L735 848L748 834.5L767 817.5L789 799V803.5V815.5L792.5 831.5L786 834.5L780 854.5L778.5 870.5L780 896.5L776 917.5L778.5 923.5V936.5V954.5V969.5L776 988V1007L772.5 1025L769.5 1038L764 1049L759 1061.5L750 1071L738.5 1084L730 1094.5L712 1107L699.5 1118L693.5 1124L695.5 1126L688 1137V1154L677.5 1168L661.5 1156.5L647 1142L634.5 1124L614 1100L596 1078.5L575 1055L555.5 1032L530.5 1002L507.5 970.5L490.5 947L468.5 917.5L457 896.5L438.5 870.5L426.5 848L419 831.5L414.5 811Z" fill="#D3A488" />
                  <path style={{ opacity: 0 }} d="M779.5 849.5L783 830.5L775 842.5V849.5L773 858.5L768 872.5H773L770.5 885L768 907L770.5 903.5L775 907L777.5 926L779.5 914.5L777.5 898V881L779.5 861V849.5Z" fill="#70483C" />
                  <path style={{ opacity: 0 }} d="M755.5 948L767 908.5V928.5L762 980.5L755.5 1013.5L744 1036V1051L729 1045.5V1029.5L744 985L755.5 948Z" fill="#B48365" />
                  <path style={{ opacity: 0 }} d="M562.5 906.5L529.5 896V906.5L541 923.5V934L545.5 945.5L552.5 960.5L562.5 952V945.5L569.5 952H589V945.5L582.5 937V931V923.5H589L576 906.5H562.5Z" fill="#CE9979" />
                  <path style={{ opacity: 0 }} d="M637.5 923.5L629 940.5V954L647 963.5L658 954L661 968L670.5 963.5L689.5 945.5L693 923.5L699.5 911.5L709 901L699.5 887.5L684.5 893.5L658 901L637.5 911.5V923.5Z" fill="#CE9979" />
                  <path style={{ opacity: 0 }} d="M341 518.5L367 602L379.5 660L397 737L418 786L478 844L508 878.5L577 899.5H628L686 878.5L724.5 844L774 786L797.5 724L806 672.5L823 576.5L831 521.5L827.5 486V437V385.5L806 347L810.5 280.5L797.5 222.5L774 167L746 133L671 167L628 192.5L566 222.5L459 280.5L352 295.5L322 357.5V437L341 518.5Z" fill="#D3A488" />
                  <path style={{ opacity: 0 }} d="M372 482.5L364.5 507L372 502.5L377.5 489.5L382.5 482.5L389 472L385.5 467.5V454.5V439.5L382.5 420.5L372 395V402.5L377.5 424L368.5 417L372 431V450V460L358 442.5L364.5 467.5L372 482.5Z" fill="#B98365" />
                  <path style={{ opacity: 0 }} d="M743 408L748 428.5L761 440.5V449.5L770.5 454L778 458L785 462.5V454L778 440.5V428.5L770.5 413L766.5 425V433H761L754.5 421.5L743 408Z" fill="#B98365" />
                  <path style={{ opacity: 0 }} d="M477 544L471.5 554.5L483 559H495.5L506.5 554.5L510 549.5H517V544L506.5 539L495.5 535L483 539L477 544Z" fill="#B98B71" />
                  <path style={{ opacity: 0 }} d="M434 543L420 530.5L405.5 534L398 536.5L389 530.5L377.5 536.5V543L383 547.5L385.5 554.5L389 559.5L408.5 552L393.5 559.5L383 572.5L393.5 568.5L403 559.5L420 552H427.5H450L472.5 543L459 547.5L434 543Z" fill="#D49C7B" />
                  <path style={{ opacity: 0 }} d="M379.5 535L404 530L416.5 526" stroke="#B98062" />
                  <path style={{ opacity: 0 }} d="M424.5 512.5L416 516.5H428L444.5 507L467 503H492.5L482 500H472L456.5 503L439 507L424.5 512.5Z" fill="#70482B" />
                  <path style={{ opacity: 0 }} d="M387.5 568L400 557.5L418 552.5H431.5" stroke="#CD9775" />
                  <path style={{ opacity: 0 }} d="M721.5 492.5H710L721.5 504.5L725.5 509.5L730.5 514.5V523.5L737.5 514.5L749 509.5H737.5L730.5 501L721.5 492.5Z" fill="#8A5B43" />
                  <path style={{ opacity: 0 }} d="M705.5 541L681.5 545L694.5 548.5L705.5 552V556.5L714 548.5L720.5 545H734L756.5 552L744.5 545L727.5 541H705.5Z" fill="#C28767" />
                  <path style={{ opacity: 0 }} d="M665 483L657 489L665 486H679.5L696.5 489H707.5L696.5 483H678H665Z" fill="#996F5C" />
                  <path style={{ opacity: 0 }} d="M611 532L607 518V512L635.5 505.5L621 512L617.5 518L621 526.75H629.5L627 532L635.5 537L652.5 542L667.5 546.5H635.5L621 542L611 532Z" fill="#BD907B" />
                  <path style={{ opacity: 0 }} d="M512.5 660.5L508.5 649L519 660.5L529 665L539.5 667L546.5 670L554.5 687L542.5 676.5L533 670H526H519L512.5 660.5Z" fill="#D79B7F" />
                  <path style={{ opacity: 0 }} d="M596.5 560L587.5 543L582.5 554L587.5 566V579.5V594.5V607L596.5 613.5L602 619.5L606 629L617.5 632.5L614 619.5L606 607L602 591V579.5L596.5 560Z" fill="#C48468" />
                  <path style={{ opacity: 0 }} d="M639 625L629 617L625 611L618.5 617L625 628.5L632 633L639 645V656L635.5 660.5L632 667.5L635.5 665L643 656L647.5 645L643 633L639 625Z" fill="#CC9074" />
                  <path style={{ opacity: 0 }} d="M564 665L558 671V678H566.5L577 675.5V671V665V660.5L564 665Z" fill="#E8C1AE" />
                  <path style={{ opacity: 0 }} d="M526 613L532 608L529 623.5L522 628.5L508.5 637L515.5 628.5L522 621.5L526 613Z" fill="#D79B7F" />
                  <path style={{ opacity: 0 }} d="M550 568L546 552L542.5 573.5L539.5 588.5L533.5 605.5L539.5 597.5L546 588.5L550 577V568Z" fill="#CA8D71" />
                  <path style={{ opacity: 0 }} d="M593.5 690L580.5 693.5L593.5 685L604 676L609.5 671L619.5 665L609.5 676L600.5 685L593.5 690Z" fill="#714937" />
                  <path style={{ opacity: 0 }} d="M772.5 656.5V646L768 665L772.5 682.5L775.5 701V689.5V677V665L772.5 656.5Z" fill="#A87558" />
                  <path style={{ opacity: 0 }} d="M635.5 896.5L598 903H634.5L661 898.5L684.5 891.5L706.5 878.5L724 862L738.5 844.5L772.5 812L789 798.5V788L791.5 785L793.5 777.5L791.5 768.5L788 763L773.5 777.5L756 802L728 832.5L714 849.5L688 874.5L696 864.5L707.5 850.5L715.5 835.5L718.5 830L721.5 814.5V794.5L714 814.5V829L705 844.5L695 859L682 873L664 887.5L635.5 896.5Z" fill="#714937" />
                  <path style={{ opacity: 0 }} d="M794 623L798 610L805.5 619L814.5 623V625L811.5 632L809 649.5V669.5V692.5V708L805.5 728L798 747.5L787.5 763L777.5 771.5L787.5 751L798 718.5V703L802 684.5L798 661.5L802 640L798 628.5L794 635V623Z" fill="#99644C" />
                  <path style={{ opacity: 0 }} d="M757 700V685L749.5 708V722L743.5 741L738 756.5L731 774L720 787L723 800V794.5L728 789L733.5 780.5L738 771L743.5 756.5L749.5 741L753 722L757 700Z" fill="#AA7653" />
                  <path style={{ opacity: 0 }} d="M690.5 667.5L702 679.5L717.5 691L724 707.5V720.5" stroke="#9C7558" strokeWidth="3" />
                  <path style={{ opacity: 0 }} d="M488.5 649L477.5 663L469.5 673L455.5 685.5L447.5 699.5V716" stroke="#BF957D" strokeWidth="3" />
                  <path style={{ opacity: 0 }} d="M420 692L402 663L407.5 688.5L420 699.5V718.5L428.5 734L441 759.5L457.5 783.5L472 814.5L479.5 838L499.5 856.5L489.5 838L479.5 814.5L472 792.5L465 778L451 759.5L441 743L428.5 718.5L420 692Z" fill="#AE856A" />
                  <path style={{ opacity: 0 }} d="M390 628L378 610L383.5 664.5L390 661L401 701L406.5 716V701L401 661V645.5L390 628Z" fill="#BC9984" />
                  <path style={{ opacity: 0 }} d="M388 726L380 688.5H388L391 711.5L405.5 755L415.5 773.5L428.5 799L457.5 823.5L486 850L503 862L534 891L589 906.5L546 898.5L526 891L503 872L486 856.5L467.5 843.5L453 830L440 819L428.5 807L415.5 790.5L405.5 773.5L398 755L388 726Z" fill="#BD9C8A" />
                  <path style={{ opacity: 0 }} d="M359 544H346H342L352 572L363 608L367 626.5L372.5 649.5L377.5 685L393 715L387 685L382.5 658L377.5 626.5L372.5 597.5L367 566.5L359 544Z" fill="#BD9C8A" />
                  <path style={{ opacity: 0 }} d="M294 456.5H304L312 464.5L316.5 472.5L318.5 479.5L319.5 486.5L325 506L326 513L329 522L332.5 528L334.5 533.5L335.5 537H341.5L344 542.5L345.5 553L349 558.5L351 565.5L353 574L355.5 584L358 590L360 598L362.5 604L363.5 611L365.5 616.5L363.5 622H356.5L349 616.5L344 614.5L339 611L332.5 605L327 601L321.5 595L320 591L307.5 578L300.5 569.5L296 561L294.5 551.5L292 540.5V531.5L288.5 526L284 518L280.5 511L273 493.5L271 484L269 472.5L267 466.5L268 455.5L273 450.5L277 448L294 456.5Z" fill="#D1A189" />
                  <path style={{ opacity: 0 }} d="M355.5 590.5L347.5 585.5H334L329 590.5V599L334 604L343 609L355.5 614L360.5 618" stroke="#BF9A89" strokeWidth="5" />
                  <path style={{ opacity: 0 }} d="M269 468.5L278.5 474L289 481.5L299 490" stroke="#D49D85" strokeWidth="3" />
                  <path style={{ opacity: 0 }} d="M293 493V503.5V510V518V529.5V542.5L298.5 561L305 571L314.5 584L323.5 597.5" stroke="#D2947D" strokeWidth="3" />
                  <path style={{ opacity: 0 }} d="M652 502.5V511L655 516.5H661H667L672.5 518L680 519.5L691.5 518L704.5 512.5L712 508L720 502.5L712 496.5L699.5 490L680 486L667 487.5L661 490L657 496.5L652 502.5Z" fill="#D2C6B7" />
                  <path style={{ opacity: 0 }} d="M646.5 507.5L651.5 503V509.5L654.5 514.5L647.613 517H643.5H638V514.5L641 511L646.5 507.5Z" fill="#C79180" />
                  <path style={{ opacity: 0 }} d="M687.5 486H680L672.5 488L667.5 492.5L664 498.5V505.5L667.5 513.5L678 519H685.5L694 516L700.5 513.5L702.5 507.5V500.5L700.5 492.5L694 488L687.5 486Z" fill="#8A6F59" />
                  <path style={{ opacity: 0 }} d="M691 498.5L688.5 495L683.5 492L677.5 493.5L674 498.5L675.5 505.5L680 508H685.5L691 505.5V498.5Z" fill="black" />
                  <path style={{ opacity: 0 }} d="M684 502.5V499H681V502.5H684Z" fill="#C4C4C4" />
                  <path style={{ opacity: 0 }} d="M506 532L498 529L500.5 523.5L503 521L510.5 523.5V529V532H506Z" fill="#BD836F" />
                  <path style={{ opacity: 0 }} d="M497.5 515.5L501 522L497.5 528.5H494.5H487L479 532L461.5 534.5L452 532L442 528.5L434 525.5L429.5 522L424 519L429.5 515.5L434 512.5L442 510L452 507.5L464.5 505L475.5 503H483.5L489.5 505L494.5 510L497.5 515.5Z" fill="#BEB09F" />
                  <path style={{ opacity: 0 }} d="M452.5 506.5L445.5 509L444 510.5V517.5L445.5 522.5L448.5 526.5L456.5 531.5H464.5H471.5L477 530L481 525.5L484.5 520.5L486.5 514.5V510.5V506.5L484.5 503H477H469L460.5 504.5L452.5 506.5Z" fill="#745943" />
                  <path style={{ opacity: 0 }} d="M459 508.5L457 512.5L456 515.5L458 519.5L463 521.5H467.5L470.5 519.5L472.5 515.5V512.5L470.5 508.5L467.5 507H463L459 508.5Z" fill="black" stroke="black" />
                  <path style={{ opacity: 0 }} d="M466.5 512.5L463 510L462 512.5V514.5H465L466.5 512.5Z" fill="#C4C4C4" stroke="black" />
                  <path style={{ opacity: 0 }} d="M486 722L477.5 718.5H482.5L493 722L499.5 727L511 730.5L525.5 734.5L534 737.5H545L556.5 739.5H567.5L576.5 742.5H587.5L596.5 739.5L606 737.5H617H625.5L637.5 734.5H648L659 730.5L672.5 722L679.5 718.5H686.5L683 722L672.5 727L659 734.5L642.5 739.5L628 742.5H613H601L587.5 746.5H576.5H564.5L551.5 742.5H534L520.5 739.5L507.5 734.5L499.5 730.5L493 727L486 722Z" fill="#B87964" />
                  <path style={{ opacity: 0 }} d="M484 725L476 720L488.5 725L504.5 732.5L515.5 736.5L530 740.5H537L549.5 744H561.5L571 747.5H582.5H590.5L606.5 740.5H630.5L651.5 736.5L684.5 720L665.5 732.5L651.5 740.5L630.5 747.5L617 755.5L600 761.5L590.5 755.5H582.5L575.5 761.5H564H554.5H541.5L526 755.5L515.5 747.5L504.5 740.5L498 732.5L484 725Z" fill="#D8938A" />
                  <path style={{ opacity: 0 }} d="M328.5 520.5L336 537H345V524L340 503.5V485.5L333.5 449.5V431.5L340 415.5L353 406.5H345L349 398H340L345 390.5L328.5 398L336 390.5L357.5 382.5H345L349 371.5L336 379L345 364.5L328.5 371.5L336 361L340 353.5L322 361L336 348L340 339.5L357.5 326V310L375 316L386.5 310H403L414.5 316H435.5L428 321.5L399 323L425 326L444.5 323L420 332L446 326L468.5 316L487.5 310L477 319L464 326H472.5L487.5 316L497 310L508 296.5L517 283.5L535 270.5L559.5 247L613.5 222L636.5 207.5L649.5 190.5L691.5 166.5L711.5 153.5L726 144L734 153.5L749 166.5L757.5 175.5L768 190.5L774.5 202.5L779.5 216L785 222L789 235.5L793 252L789 264.5L785 275L804.5 290.5L785 287.5L801.5 296.5H789H779.5L793 310L779.5 305L789 319H779.5V332H774.5L779.5 343.5H774.5V361L785 368L798 377.5L807 385L814 398V417.5V468V483L820.5 505.5L833 518.5L844 468V454V445.5L848.5 440L861 429.5L871.5 425L881.5 417.5L895.5 409V394L889.5 377.5L885.5 368L881.5 332L885.5 275V247L881.5 240.5L876.5 230L871.5 222L864.5 216V207.5L861 202.5L856 195.5H844L838 183L833 175.5L844 160.5V144L838 121V107.5L829.5 97.5L820.5 83L807 74L785 60.5L777 56.5L760 51.5H748H737.5L730 48L712 37L674.5 21L651 16L625.5 4L595 0H535.5L514.5 16L499.5 27L458.5 37L426.5 56.5L385 83L351.5 121L322 157L294.5 189L274.5 233.5L263 264.5L255 303L258.5 343L263 379L266.5 406.5L274.5 434V444L278.5 449.5L294.5 456.5H304L312 463.5L318 476.5L322 496L328.5 520.5Z" fill="#562E2A" />
                  <path style={{ opacity: 0 }} d="M384.5 492.5L378 498.5L381 500.5L387.5 502.5H395L402.5 503.5H406.5L411.5 500.5L421.5 498.5L429.5 497L435 495.5L446 493.5L452.5 492.5L459.5 493.5H465.5H472H477L482.5 492.5L489 493.5H495.5L503 492.5L510.5 495.5H517.5H525H533L538 492.5V489.5L533 487.5L525 480.5L515 473.5L497 470H486L472 467L452.5 465H441.5H430H419L411.5 470L402.5 476L396.5 480.5L390 487.5L384.5 492.5Z" fill="#885942" />
                  <path style={{ opacity: 0 }} d="M788.5 480.5L786.5 485L792 491L793.5 485H797.5L803 480.5V477L809.5 473.5L817.5 463.5L826.5 454.5L838.5 444L847 438.5L852 432.5L847 434.5L838.5 438.5L830.5 444L817.5 454.5L807.5 465.5L800 473.5L793.5 477L788.5 480.5Z" fill="black" />
                  <path style={{ opacity: 0 }} d="M345 540.5L342 536V539L345 543.5H350L356 542H360L363 543.5L365 546L366.5 557L371.5 574L376 586.5L378 595L383.5 604.5L388 612.5L393 617L398.5 620.5L406 622.5L415 624L424 625.5H433H445.5H469.5L483 624L493.5 621L506.5 618L515.5 614.5L521 610.5L526.5 603.5L528.5 595L530.5 582.5L532.5 572L533.5 575H536V572L535.5 570V568.5L533.5 567L535.5 566L538.5 565L539 559.5V557L537.5 552.5L540.5 550V547.5L537.5 545L535.5 543.5L532.5 545L532 547.5V552.5L530.5 559.5V566L528.5 573L527.5 580.5L525 590L523.5 599L521 606L515.5 610.5L509 614.5L495 617L483 621L469.5 622.5H445.5H433H424L415 621L406 619.5L399.5 618L394.5 614.5L389.5 610.5L386 604.5L381 595L378 586.5L373.5 574L368.5 557L366.5 546L365 540.5L361.5 539H357.5L350 540.5H345Z" fill="black" />
                  <path style={{ opacity: 0 }} d="M592.5 525.5H590V527.5L591.5 534L592.5 538.5L590 540L591.5 544.5L595.5 545.5L598.5 554.5L602 561.5L605 569L610.5 577L615.5 586L623 595L629 600.5L635 604L645 605H662H681L692.5 604L709.5 600.5L726.5 597.5L742.5 592L754 588L760 583L763.5 575.5L765 570.5L767 563.5V556.5V542V529.5V514.5V505L769.5 502L772.5 500H778.5H782L787 498.5L790 495.5L793 492.5L790 489.5L787 492.5L784.5 495.5H782L772.5 497H769L765 498.5L763.5 503V509V514.5L764 518.5V523L765 529.5V538.5V550L763.5 559.5L764 563.5L761 574L758 581L752.5 586L741 590L725 595L709.5 597.5L692.5 600.5L681.5 602H670.5H655.5H645L636.5 600.5L631 597.5L626 593.5L623 590L618.5 584.5L614 577L610.5 569L606.5 560.5L603.5 555.5L602 553L601 550.5L602 548L603.5 553L606.5 555.5L608.5 553V551L606.5 548L603.5 545.5L599.5 543L597 540L595.5 534L592.5 525.5Z" fill="black" />
                  <path style={{ opacity: 0 }} d="M321 465.5L308 453V458.5L321 471.5L330 493.5L337 512V518.5L339.5 523.5L337 528L343 531L346 528H350.5H356L353 523.5L346 518.5L343 516.5L339.5 512L333.5 493.5L321 465.5Z" fill="#171616" />
                  <path style={{ opacity: 0 }} d="M343 530H340V535.5L343 536.5L345.5 538.5H353.5L359 536.5L364.5 538.5L367 535.5L376 531.5L390.5 528L409 524L429 521L448.5 519.5H470.5H491H505.5L519.5 521L527 525.5L530.5 531.5L532.5 535.5V545L536 543V535.5V529.5L537.5 525.5L544.5 523.5H553.5L567 522.5L581.5 519.5H587.5L589.5 525.5H593L593.5 523.5L595 522.5V518L599 515L604 512L613.5 509.5L633 504L647 500.5L665 498L684 494.5L697.5 492L705 491H715H723H734.5L742.5 492H747H752L756.5 493L760.5 496.5H762.5L768.5 494.5H773.5L781 492H786L790 489.5V486H786H776L775 489.5L757.5 488H733.5H719H708L697.5 489.5L681 492L666.5 494.5L647 498L628 502L613.5 506L593 512L585 515L569.5 518L560 519.5H544.5H527L517 518H513.5L505.5 517H491H478H459.5H445H430.5L413.5 519.5L396.5 522.5L377.5 526L367 530L359.5 531.5L357.5 530L355.5 528H347L343 530Z" fill="#171616" />
                  <path style={{ opacity: 0 }} d="M608 473.5L601.5 481L597.5 485.5L606 487.5L613.5 489L624 485.5L634 482.5L645 481L649 476.5H657.5L668.5 473.5L678.5 471.5L688 469.5H697.5L705.5 471.5H717.5L732 469.5H744L754 467.5L764.5 465.5H773.5H783L773.5 461L756.5 451L744 447L729 441L717.5 435.5L697.5 438.5L684.5 443.5L666 447L645 455L635.5 459L624 463H613.5L608 467.5V473.5Z" fill="#885942" />
                  <path style={{ opacity: 0 }} d="M816.5 543V575.5L811 549.5L804.5 529V543L797 569V585V603.5L804.5 621H816.5H825L832.5 612V597V585V575.5V549.5L825 514.5L816.5 543Z" fill="#88412D" />
                  <path style={{ opacity: 0 }} d="M845 444.5L847.481 456.299L836.203 482V502.661L828 517.276V550.535V587.323L832.5 598.409V611L847.481 598.409L860.297 587.323V577.748L870.038 568.173L884.905 550.535L891.057 517.276V502.661L900.797 496.11L909 456.299V426.063L900.797 418L888.5 413L870.038 426.063L845 444.5Z" fill="#E4B39F" />
                  <path style={{ opacity: 0 }} d="M890 412L885 419L894.5 421.5L901.5 419L897.5 412L894.5 405L890 412Z" fill="#741E15" />
                  <path style={{ opacity: 0 }} d="M857.5 463.5L850.5 472H854L860 467.5L867.5 459.5L875 452L883.5 444L887.5 436L890 433L883.5 436L875 446.5L867.5 454.5L857.5 463.5Z" fill="#803728" />
                  <path style={{ opacity: 0 }} d="M850 471L846.5 462.5L843 471L840.5 480V496.5H846.5H853L857.5 493L853 480L850 471Z" fill="#803728" />
                  <path style={{ opacity: 0 }} d="M884.145 444V465.908L891 484.759V494.44V505.649V519.915L884.145 536.728L876.236 553.032L863.582 569.845L855.673 584.111L844.6 598.377L833 605" stroke="#70231B" strokeWidth="4" />
                  <path style={{ opacity: 0 }} d="M841 447.5L843.5 464.5L850 452V441.5L855.5 436.5L875 426.5L886.5 418.5L889 412L875 423L864 426.5L855.5 433.5L846 441.5L841 447.5Z" fill="#803728" />
                  <path style={{ opacity: 0 }} d="M847.5 506.5L838 502L832 519.5L828.5 530L830 543L828.5 556L830 563.5L825 574L830 579L838 568.5V560H843.5V554L847.5 549.5L850 543V533.5L847.5 521.5L853 518L856 515V510L847.5 506.5Z" fill="#863726" />
                  <path style={{ opacity: 0 }} d="M815 827L791 804L821 859V888V974.5V1023.5V1058.5L796.5 1117L828 1386.5H1122.5V998.5L1096 981L1071.5 966.5L1041.5 946.5L996 926L956.5 913L909.5 898L870.5 888L839 859L815 827Z" fill="#383838" />
                  <path style={{ opacity: 0 }} d="M861 895L824 859.5V895L816.5 929.5L821 997.5V1053.5L816.5 1074.5L807 1098.5L797 1126L807 1228.5L814.5 1291L820.5 1318.5L829 1345L837 1386.5H995.5L1003.5 1353V1288.5L1009.5 1210.5L1015 1134.5V1057V981L1003.5 949H980.5L933.5 941L893 924.5L861 895Z" fill="#4C4C4C" />
                  <path style={{ opacity: 0 }} d="M183 1252.5L170.5 1384H6V1164V1098.5V1067.5L11.5 1055L49.5 1021.5L88 999.5L131.5 970L170.5 944.5L207.5 929.5L244.5 915.5L270.5 906.5L286 922.5L270.5 935L276.5 944.5H313.5L295 999.5L276.5 989.5L258 984.5L263.5 1012L253.5 1027L258 1037.5L253.5 1048V1067.5V1088L244.5 1108L239.5 1142.5L207.5 1152.5L198.5 1173.5L191.5 1211.5L183 1252.5Z" fill="#383838" />
                  <path style={{ opacity: 0 }} d="M3.5 1099.5L19 1130.5L32.5 1155L58 1203.5L68.5 1242.5L88 1283L94.5 1311.5L108.5 1333.5L119 1356.5L132.5 1381.5" stroke="black" strokeWidth="7" />
                  <path style={{ opacity: 0 }} d="M293 899L267.5 907L284 923.5L267.5 935L274 946.5H293H309L318 935L327 913L336.5 894L349.5 877.5L365 859L375 851L383.5 832.5L398.5 827.5V851L406.5 864.5H414V851V840.5L421 836L419 827.5L414 806V796.5L411.5 788L398.5 796.5L383.5 813L365 827.5L346 851L327 869.5L309 886.5L293 899Z" fill="#2E2E2E" />
                  <path style={{ opacity: 0 }} d="M507.5 1279L521.5 1386H328.5L316 1376L307.5 1343.5L296 1311.5L267.5 1218L259 1194L248 1169L259 1163L296 1138L328.5 1123L350 1115V1103L328.5 1088.5L307.5 1077L296 1061.5L278.5 1051.5L274 1045.5L278.5 1037.5L287 1018L296 988L307.5 961.5L311 944L320 928L332.5 900L350 874L374 850L383.5 831.5L398.5 827.5V850L407.5 861.5H413.5V841L418 831.5L430.5 850L426.5 865.5L430.5 886.5L444.5 935.5L456.5 979.5L479 1088.5L491.5 1169.5L501 1224.5L507.5 1279Z" fill="#4C4C4C" />
                  <path style={{ opacity: 0 }} d="M263.5 1011.5L253 1026.5L258 1037L253.5 1048V1071L244.251 1106.5L239.5 1142.5L218.379 1149.47L196.117 1155.89L183.482 1187L167.838 1242.31L160.017 1299.59L154 1386H266.513L231.616 1359.33L224.997 1328.72V1282.3L231.616 1242.31L249.666 1230L275.5 1241.5L249.666 1168.73L303.816 1140.58L364.585 1119.84L370 1105.03L334.501 1089.23L309.231 1068.98L286.969 1056.14L277.343 1044.79L294 999L277.343 989.5L257.5 984L263.5 1011.5Z" fill="#2E2E2E" />
                  <path style={{ opacity: 0 }} d="M229.5 1366.5L260.5 1386H334L317 1375L276.5 1242.5L260.5 1230H243L229.5 1242.5L222.5 1271V1304.5V1345L229.5 1366.5Z" fill="#383838" />
                </svg>
                <img id="cardImage2" src={"/images/sergeyprofile.png"}
                  style={{ position:"absolute", borderColor: "transparent", opacity:0,top:0,left:0, height: "100%",width: "100%",zIndex: '8' }} alt="Sergey's Profile" />
                  </div>
                {/* </Animated> */}
              
              <figure id="cloud" className={"d-flex flex-column justify-content-center text-center position-absolute"} style={{ width: (hight > width) ? '95vw' : (width > 650) && (hight > 400) ? '40vw' : '80vw' }}>
                {/* <Typewriter2 text='WELCOME TO UNIMATRIX' /> */}
                <Textfit mode="multi">
                  <Typewriter text='Hello, My name is ' /><strong><Typewriter text='Sergey Bolotnikov.' /></strong>
                  <br /> <Typewriter text='I am a full-stack web developer and' />
                  <br /> <Typewriter text='javascript specialist. Technologies:' />
                  <br /><strong><Typewriter text=' HTML/CSS | Bootstrap | JavaScript' />
                    <br /><Typewriter text='React | NodeJS | Express | MongoDB' /></strong><br />
                  <a className="linkHome"  href="tel:917-916-2840"><strong className="text-black" ><Typewriter text='Tel.:(917)916-2840.' /></strong></a>
                  <a className="linkHome" title="Contact Email" href="mailto:sbolotnikov@gmail.com"><strong><Typewriter text='EMail:sbolotnikov@gmail.com' /></strong></a>
                  <Typewriter text='My networks:' />
                  <a id="facebook" href="https://www.facebook.com/bolotnikov/" target="_blank" rel="noopener noreferrer" title="Follow on Facebook">
                    <span className="n fab"><i className="fa fa-facebook-official" aria-hidden="true"></i></span>
                  </a>
                  <a id="github" href="https://github.com/sbolotnikov" target="_blank" rel="noopener noreferrer" title="Follow on GitHub">
                    <span className="n fab"><i className="fa fa-github" aria-hidden="true"></i></span>
                  </a>
                  <a id="linkedin" href="https://www.linkedin.com/in/sergey-bolotnikov-10035617/" target="_blank" rel="noopener noreferrer"
                    title="Connect on Linkedin">
                    <span className="n fab"><i className="fa fa-linkedin-square" aria-hidden="true"></i></span>
                  </a>
                </Textfit>
              </figure>

            </div>

          </div>
        </main>
      </Fragment>  
    </div>
  )
}

export default Home
