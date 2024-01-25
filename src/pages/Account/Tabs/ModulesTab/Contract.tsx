import {ReactNode, useEffect, useMemo, useState} from "react";
import Error from "../../Error";
import EmptyTabContent from "../../../../components/IndividualPageContent/EmptyTabContent";
import SidebarItem from "../../Components/SidebarItem";
import {
  Grid,
  Box,
  Typography,
  Divider,
  Stack,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
  Autocomplete,
  Alert,
  CircularProgress,
} from "@mui/material";
import React from "react";
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import {useParams} from "react-router-dom";
import {useGlobalState} from "../../../../global-config/GlobalConfig";
import {grey} from "../../../../themes/colors/colorPalette";
import {useNavigate} from "../../../../routing";
import {Code} from "../../Components/CodeSnippet";
import {ContentCopy} from "@mui/icons-material";
import StyledTooltip from "../../../../components/StyledTooltip";

type ContractFormType = {
  typeArgs: string[];
  args: string[];
  ledgerVersion?: string;
};

interface ContractSidebarProps {
  selectedModuleName: string | undefined;
  selectedFnName: string | undefined;
  moduleAndFnsGroup: Record<string, any[]>;
  getLinkToFn(moduleName: string, fnName: string): string;
}

function Contract({address, isRead}: {address: string; isRead: boolean}) {
  const theme = useTheme();
  const isLoading = false;
  const error = false;
  const data: any[] = [
    {
      bytecode:
        "0xa11ceb0b0600000005010002020218071a30084a200a6a1e00000001000000020000000300000004000000050000000600000561737365740442555344045553444304555344440455534454045742544304574554480b64756d6d795f6669656c64f22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa00020107010102010701020201070103020107010402010701050201070100",
      abi: {
        address:
          "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
        name: "asset",
        friends: [],
        exposed_functions: [],
        structs: [
          {
            name: "BUSD",
            is_native: false,
            abilities: [],
            generic_type_params: [],
            fields: [
              {
                name: "dummy_field",
                type: "bool",
              },
            ],
          },
          {
            name: "USDC",
            is_native: false,
            abilities: [],
            generic_type_params: [],
            fields: [
              {
                name: "dummy_field",
                type: "bool",
              },
            ],
          },
          {
            name: "USDD",
            is_native: false,
            abilities: [],
            generic_type_params: [],
            fields: [
              {
                name: "dummy_field",
                type: "bool",
              },
            ],
          },
          {
            name: "USDT",
            is_native: false,
            abilities: [],
            generic_type_params: [],
            fields: [
              {
                name: "dummy_field",
                type: "bool",
              },
            ],
          },
          {
            name: "WBTC",
            is_native: false,
            abilities: [],
            generic_type_params: [],
            fields: [
              {
                name: "dummy_field",
                type: "bool",
              },
            ],
          },
          {
            name: "WETH",
            is_native: false,
            abilities: [],
            generic_type_params: [],
            fields: [
              {
                name: "dummy_field",
                type: "bool",
              },
            ],
          },
        ],
      },
    },
    {
      bytecode:
        "0xa11ceb0b060000000e010008020806030e21052f2507549d0108f1014006b1022c10dd02350a92030d0b9f03020ca103f5010d96050a0ea0050a0faa05020001010201030104000508010001000600010100000702010100000803010100030e010300020f080300011003030002060c0300030103030103030303060c01090001070b000109000203070b000109000203030b636f696e5f627269646765076c696d69746572056572726f72066d61746836340974696d657374616d70074c696d697465720d72656769737465725f636f696e0b7365745f6c696d697465720a7472795f696e7365727407656e61626c65640674305f7365630a77696e646f775f7365630673756d5f7364066361705f73640b6e6f775f7365636f6e647303706f770c6f75745f6f665f72616e6765f22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa0000000000000000000000000000000000000000000000000000000000000001030800000000000000000520f22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa126170746f733a3a6d657461646174615f76312101000000000000000014454252494447455f4341505f4f564552464c4f5700000000020509010a030b030c030d03000500030000040f0b000c0411030c020b010c030b04080b020640380000000000000600000000000000000b0339003f00020103000100061007013c000c030b000a033600150b010a033601150b020b03360215020203000100074d07013c000c020a0237001420040b0b02010211030a02370314170a023702141a0c010a010600000000000000002404380a023703140a023702140a0118160a023603150a0106400000000000000026042e0600000000000000000a0236041505380a023704140602000000000000000b0111041a0a023604150a023704140b00160a023604150a023704140b02370114250449054c0700110527020000000400020001000300050105020503050405000000",
      abi: {
        address:
          "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
        name: "limiter",
        friends: [
          "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::coin_bridge",
        ],
        exposed_functions: [
          {
            name: "register_coin",
            visibility: "friend",
            is_entry: false,
            is_view: false,
            generic_type_params: [
              {
                constraints: [],
              },
            ],
            params: ["&signer", "u64"],
            return: [],
          },
          {
            name: "set_limiter",
            visibility: "friend",
            is_entry: false,
            is_view: false,
            generic_type_params: [
              {
                constraints: [],
              },
            ],
            params: ["bool", "u64", "u64"],
            return: [],
          },
          {
            name: "try_insert",
            visibility: "friend",
            is_entry: false,
            is_view: false,
            generic_type_params: [
              {
                constraints: [],
              },
            ],
            params: ["u64"],
            return: [],
          },
        ],
        structs: [
          {
            name: "Limiter",
            is_native: false,
            abilities: ["key"],
            generic_type_params: [
              {
                constraints: [],
              },
            ],
            fields: [
              {
                name: "enabled",
                type: "bool",
              },
              {
                name: "t0_sec",
                type: "u64",
              },
              {
                name: "window_sec",
                type: "u64",
              },
              {
                name: "sum_sd",
                type: "u64",
              },
              {
                name: "cap_sd",
                type: "u64",
              },
            ],
          },
        ],
      },
    },
    {
      bytecode:
        "0xa11ceb0b060000000e01002802286a039201f2030484057005f405a50507990be00d08f9186006d919c101109a1bde040af81fa0010b9821020c9a21ac0f0dc630260eec300e0000010101020103010401050106010701080109010a010b010c020d020e020f02100211021200130014000000150600001608010001001708000018080000190800001a0800001b0300001c0600001d0600001e0600032404010001032805010001032905010001032a050100010b3207000935070002390800123c00000a4a0402030100010556040106010d5a05010001001f000001000020000001000021010000002202000100002303040000250500010000260600000027070800002b02090100002c000a0100002d000b0100002e020000002f0c0b010000300d0e0000310f00010000330f10000034110d0000361200010000370e0e010000380d0e00003a13140100003b15000100003d16170100003e16170100003f06000000401800010000410600010000421900010000431a1b010004650e0e0004660e0e000b67001e01000a68200b0203000a6920210203000e6a2200000c6b240b0100046c0e0e00086d022600036e260b0100036f0200010004700e0e000a71282902030003722a1b010003730500010005742c00010611752e000011762f300101107703230004780e0e001079030e00037a310e0100037b1b000100117c330000107d350000107e360000107f3700000d8001023d01000e81013e0001000f81010200000a8201003f020304018301024201061184010e00000f85014600000d31470e01000a860128480203000687010826000a880149480203020c89011c3001000d344b0d00048a010e0e00038b014d4c0100078c010d0e0013361a000100038d01001b0100038e011a1b0100138f010e000100039001520001000f91012708000e920153540100039301561b0100139401570001000a950149000203020a960149000203000a1c1f1c201f211f2323001c011c261c271c202729272a1c2b1c2c2b2e23321c331c213a383c393c3b1f3b403c413c433c2b3f3c203a403a42272c432140431e461c3b3a3b27481c494e171c334e121c4a1c1c501c4e161c0550054e4b1c4c1c4e3c2c414f1c501c511f523a5240491c000203060a0201060c01060a02030a020a020302050b0b01090002060c01040a020a020301010a02030b0c0109000b0d0109000b0e010900020a030a03010102030a02020303010303030a020a02010a080f0403010a020a0205060c081008100203070b0b010900030a020b0b010811010a020a02010b0b01081109060c030a02030303010a020a02080b0b010900030a020b0b0108110b0b010812010a020a02020b0b0108110b0b01081204060c01030304060c030a020102060c03010b0b01090001090002080f06080401080f02080f0102060b13020900090109000106090105050303060a0203010201060a09000403070b020109000b0b01090005010502050302070b13020900090109000109010203060b0c01090001080102070b140109000900050a020a02030a020a0202060a020303060a09000303010a090001060b0b0109000107080402060c0503020a020202070a020202070a020a0202070a020301060b0201090005060b020109000306030608090a0302030809010b15010800010800010b1501090002060c0b15010900010b130209000901020807080f01080a010b14010900010808010608090b03030703070b020109000b0b010900060806050a020708090a02010305030a0204030a020a02060b150109000107090103070b130209000901090009010208070a0206050303010a020a02030b0d0109000b0e0109000b0c01090005060c081008100201010812070b0b0109000b0b0108110b0b01081103050b0b0108120b0b010812010811090303070b020109000a020608060b0b0108110a020708090b0b010812020b0b010900060b0d01090008030a020a020b0b0108110b0b0108120a020a02060b1501090003030b0b0108110b0b01081203030b0b0109000302070b0b010900030301030302070b0201090008090b636f696e5f627269646765076163636f756e740a6170746f735f636f696e04636f696e056572726f72056576656e740866726f6d5f626373066d6174683634067369676e657206737472696e67057461626c6509747970655f696e666f06766563746f7208656e64706f696e74056c7a6170700672656d6f7465057365726465057574696c73037a726f076c696d697465720842726964676555410a436c61696d4576656e7409436f696e53746f72650d436f696e5479706553746f726506436f6e6669670a4576656e7453746f72650c4c7a4361706162696c69747904506174680c526563656976654576656e740a52656d6f7465436f696e0953656e644576656e74166173736572745f726567697374657265645f636f696e0f6173736572745f756e70617573656414636865636b5f616461707465725f706172616d730a636c61696d5f636f696e166465636f64655f726563656976655f7061796c6f616404436f696e166465706f7369745f636f696e5f69665f6e65656465641c656e61626c655f637573746f6d5f616461707465725f706172616d7313656e636f64655f73656e645f7061796c6f61640e4d696e744361706162696c6974790e4275726e4361706162696c69747910467265657a654361706162696c697479156765745f636f696e5f6361706162696c69746965730b6765745f74766c735f7364136861735f636f696e5f726567697374657265640b696e69745f6d6f64756c651469735f76616c69645f72656d6f74655f636f696e056c643273640a6c7a5f726563656976650854797065496e666f106c7a5f726563656976655f74797065730971756f74655f66656506537472696e670d72656769737465725f636f696e0e72656d6f76655f647573745f6c64057364326c64094170746f73436f696e0973656e645f636f696e0e73656e645f636f696e5f66726f6d035a524f1273656e645f636f696e5f696e7465726e616c1273656e645f636f696e5f776974685f7a726f107365745f676c6f62616c5f70617573650f7365745f6c696d697465725f636170097365745f70617573650f7365745f72656d6f74655f636f696e1777697468647261775f636f696e5f69665f6e65656465640b64756d6d795f6669656c6409636f696e5f7479706508726563656976657209616d6f756e745f6c640a6c643273645f726174650c72656d6f74655f636f696e73055461626c650d72656d6f74655f636861696e7310636c61696d61626c655f616d745f6c64086d696e745f636170086275726e5f6361700a667265657a655f6361700b747970655f6c6f6f6b75700574797065730d7061757365645f676c6f62616c0c7061757365645f636f696e7315637573746f6d5f616461707465725f706172616d730b73656e645f6576656e74730b4576656e7448616e646c650e726563656976655f6576656e74730c636c61696d5f6576656e7473036361700c55614361706162696c6974790f72656d6f74655f636861696e5f69641072656d6f74655f636f696e5f616464720c7372635f636861696e5f696407737461736865640e72656d6f74655f616464726573730674766c5f73640b756e777261707061626c650c6473745f636861696e5f69640c6473745f726563656976657206756e77726170117065726d697373696f6e5f64656e6965640b756e617661696c61626c6507747970655f6f6608636f6e7461696e7306626f72726f77106173736572745f6761735f6c696d69740869735f656d70747910696e76616c69645f617267756d656e740a616464726573735f6f661569735f6163636f756e745f72656769737465726564087265676973746572096e6f745f666f756e640672656d6f7665046d696e74076465706f7369740a656d69745f6576656e740d6173736572745f6c656e6774680c766563746f725f736c6963650e646573657269616c697a655f75380761626f727465640f646573657269616c697a655f7536340576616c75650c64657374726f795f7a65726f0d6173736572745f7369676e65720c73657269616c697a655f75381073657269616c697a655f766563746f720d73657269616c697a655f7536340b72656769737465725f756104696e6974036e6577106e65775f6576656e745f68616e646c650a6173736572745f7531360d6173736572745f72656d6f74650a626f72726f775f6d75740a746f5f6164647265737317626f72726f775f6d75745f776974685f64656661756c740973696e676c65746f6e0e616c72656164795f6578697374730a696e697469616c697a6503706f77047a65726f0877697468647261770a7472795f696e73657274046275726e036765740d73656e645f776974685f7a726f07657874726163740b7365745f6c696d697465720675707365727403616464f22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa000000000000000000000000000000000000000000000000000000000000000154ad3d30af77b60d939ae356e6606de9a4da67583f02b962d2d3f2e481484e900308040000000000000003080100000000000000030806000000000000000308070000000000000003080d0000000000000003080800000000000000030805000000000000000308030000000000000003080a000000000000000308090000000000000003080b000000000000000308020000000000000003080c000000000000000308000000000000000002010002010103084a000000000000000201060520f22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa126170746f733a3a6d657461646174615f7631c9040e000000000000000019454252494447455f554e524547495354455245445f434f494e0001000000000000001b454252494447455f434f494e5f414c52454144595f4558495354530002000000000000001d454252494447455f52454d4f54455f434f494e5f4e4f545f464f554e4400030000000000000019454252494447455f494e56414c49445f434f494e5f5459504500040000000000000020454252494447455f434c41494d41424c455f434f494e5f4e4f545f464f554e440005000000000000001d454252494447455f494e56414c49445f434f494e5f444543494d414c530006000000000000001c454252494447455f434f494e5f4e4f545f554e575241505041424c450007000000000000001e454252494447455f494e53554646494349454e545f4c495155494449545900080000000000000017454252494447455f494e56414c49445f4144445245535300090000000000000016454252494447455f494e56414c49445f5349474e4552000a000000000000001b454252494447455f494e56414c49445f5041434b45545f54595045000b000000000000000e454252494447455f504155534544000c000000000000001e454252494447455f53454e44494e475f414d4f554e545f544f4f5f464557000d000000000000001e454252494447455f494e56414c49445f414441505445525f504152414d530000040971756f74655f6665650101000b6765745f74766c735f7364010100106c7a5f726563656976655f7479706573010100136861735f636f696e5f72656769737465726564010100000201440101020345080f460547030202074803490b13020308094b0a034c0b130205034d0b0c0109004e0b0d0109004f0b0e010900030202500b13020807080f510a080f0402035201530b1302080f015401050203550b1401080a570b14010808580b14010801060201590b150108000702025b035c0a0208020545080f5d03460547035e010902035f0a02600361010a020545080f6203630a0247036401021c000000000007380004030506070d111d270201000001041d2407122b040c010a01100014200409050e0b0101070a111e2738010c000a0110010a00380204210b0110010b0038031420041d0520070a111e2705230b0101020200000104001507122b04100214040d07120b00070f340b01060000000000000000112205140b0138040411051407041124270203010403020405253c380538060a0011250c040a04380720040c0b003808050e0b000107123c000c020a0237000a0438090417051c0b020107001128270a0236000a04380a0c010a01060000000000000000240426052b0b020107001128270a010b023701380b0c030a040b03380c07122a050f0538010b040b011201380d02040000002d290a00064900000000000000112d0a00060000000000000000060100000000000000380e0c010e01112f070e21040e05130b000107081130270a00060100000000000000062100000000000000380e0c050a00062100000000000000064100000000000000380e0c040b00064100000000000000064900000000000000380e0c020e0211310c030b050b040b030205000000000c0e01380f0600000000000000002404090b000b01380c050b0b013810020601040104320b0b000712113407122a040c020b010b020f0215020700000034220e00062000000000000000112d0e01062000000000000000112d402300000000000000000c050d05070f11350d050b0011360d050b0111360d050b0211370b03041931010c04051b31000c040b040c060d050b0611350b0502080100010238110b0007121134380507123d000c010a013701140a013702140b013703140209010001023929380507123d000c00400e00000000000000000c040600000000000000000c010a010a003704410e230424050f0a0037040a01420e0c020a0037050b021438110c030d040b03100a14440e0b01060100000000000000160c0105080b003704140b04020a010000000307123b00020b0000003b210a0038120c010a000a0138130a00113a0a000b0112062d060a000938140912042d040a003815401e000000000000000012032d030a000a0038160a0038170b00381812052d05020c01000102440c07123d0037050b0038110c020b010b02100b1421020d00000000040b000b011a020e01040402040506456f380538060a00113d07120a000a01113e07122b060c080a000b010a020b08100c3819010e0211040c040c0a0c0c07123c000c060a0637050a00381a042005250b0601070b1128270a0636050a00381b0c0b0b0c0a0b100b1421043105380b0b010b060107071124270a0b100a140a04160b0b0f0a150b040a0637061411130c030b0a11410c090a093807200c0d0a0d045c0b0636000a09060000000000000000381c0c050a05140a03160b051505640a030b063701380b0c070a090b07380c07122a050f0e38010b000b090b030b0d1208381d020f010001034a110e02110401010c040b000b0412070c0307122b03100f0b03381e14381f0210010000000807120b0007100b010b020b0311440211010401034c370a00071211343800200407050c0b0001070111452707110a0325041105160b000107061124270a000b010b020a030838200c070c060c0507122a030f103801441e0a00060a000000000000000b030711173411473821400e000000000000000038220b070b050b0639003f000b000b043823021201000102380d07123d000c010b000a013706141a0b0137061418021300000000040b000b0118021401000402040506170f0b000b010b020b0338240b040b050b0638250c080c070b0838260b070215010404020405064f240b0338270c0c0a000b0c38280c090a000b0438290c0a0a000b05382a0c0e0b090b010b020b0a0b0e0b060b070b08382b0c0f0c0b0b0011250c0d0a0d0b0b382c0b0d0b0f382d021600000402040506518101380538060a01113d0e02062000000000000000112d07123c000c0a0a0a37050a01381a041005150b0a01070b1128270e00380f0c080a080a0a370614110d0c090a0906000000000000000024042305280b0a01070c1124270a09382e0a0a36050a01381b0c0f0a0f100a140a09260436053d0b0f010b0a0107031124270a0f100a140a09170a0f0f0a150b000b0a3702382f0a010e0611020a0504580a0f101114045305580b0f0107021124270b0f100b140a020b090a0511070c0e07122b060c0c07120a01114d0c0b0a010b0b0b0e0b030b040b060b070b0c100c38300c100c0d0107122a050f1238010b010b020b080b05120a38310b0d0b10021701000402040506551e0e00380f0c080e00380f38270c0a0a080a0a2404140d000b080b0a1738320c0907120b09380c0b000b010b020b030b040b050b060b07382b021801040104320b0b000712113407122a040c020b010b020f0015021901040000090b000712113438050b010b020b033833021a01040104000b0b0007121134380507122a040f0138010b013834021b0104020203582f0b00071211340a01113d0e02062000000000000000112d380507123c000c040a0437050a01381a20041305180b040107011124270a020600000000000000000b0312090c050a0436050a010b0538350b0436040a01440e07122a030f0f0b010b02120738013836021c0000001b0f0a010600000000000000002404090b000b0138280c02050d0b000138370c020b02020400040104020203020405020205020602020201090109000600020005010300030109020500031c041c061c071c081c091c0d1c00",
      abi: {
        address:
          "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
        name: "coin_bridge",
        friends: [],
        exposed_functions: [
          {
            name: "claim_coin",
            visibility: "public",
            is_entry: true,
            is_view: false,
            generic_type_params: [
              {
                constraints: [],
              },
            ],
            params: ["&signer"],
            return: [],
          },
          {
            name: "enable_custom_adapter_params",
            visibility: "public",
            is_entry: true,
            is_view: false,
            generic_type_params: [],
            params: ["&signer", "bool"],
            return: [],
          },
          {
            name: "get_coin_capabilities",
            visibility: "public",
            is_entry: false,
            is_view: false,
            generic_type_params: [
              {
                constraints: [],
              },
            ],
            params: ["&signer"],
            return: [
              "0x1::coin::MintCapability<T0>",
              "0x1::coin::BurnCapability<T0>",
              "0x1::coin::FreezeCapability<T0>",
            ],
          },
          {
            name: "get_tvls_sd",
            visibility: "public",
            is_entry: false,
            is_view: true,
            generic_type_params: [
              {
                constraints: [],
              },
            ],
            params: [],
            return: ["vector<u64>", "vector<u64>"],
          },
          {
            name: "has_coin_registered",
            visibility: "public",
            is_entry: false,
            is_view: true,
            generic_type_params: [
              {
                constraints: [],
              },
            ],
            params: [],
            return: ["bool"],
          },
          {
            name: "is_valid_remote_coin",
            visibility: "public",
            is_entry: false,
            is_view: false,
            generic_type_params: [
              {
                constraints: [],
              },
            ],
            params: ["u64", "vector<u8>"],
            return: ["bool"],
          },
          {
            name: "lz_receive",
            visibility: "public",
            is_entry: true,
            is_view: false,
            generic_type_params: [
              {
                constraints: [],
              },
            ],
            params: ["u64", "vector<u8>", "vector<u8>"],
            return: [],
          },
          {
            name: "lz_receive_types",
            visibility: "public",
            is_entry: false,
            is_view: true,
            generic_type_params: [],
            params: ["u64", "vector<u8>", "vector<u8>"],
            return: ["vector<0x1::type_info::TypeInfo>"],
          },
          {
            name: "quote_fee",
            visibility: "public",
            is_entry: false,
            is_view: true,
            generic_type_params: [],
            params: ["u64", "bool", "vector<u8>", "vector<u8>"],
            return: ["u64", "u64"],
          },
          {
            name: "register_coin",
            visibility: "public",
            is_entry: true,
            is_view: false,
            generic_type_params: [
              {
                constraints: [],
              },
            ],
            params: [
              "&signer",
              "0x1::string::String",
              "0x1::string::String",
              "u8",
              "u64",
            ],
            return: [],
          },
          {
            name: "remove_dust_ld",
            visibility: "public",
            is_entry: false,
            is_view: false,
            generic_type_params: [
              {
                constraints: [],
              },
            ],
            params: ["u64"],
            return: ["u64"],
          },
          {
            name: "send_coin",
            visibility: "public",
            is_entry: false,
            is_view: false,
            generic_type_params: [
              {
                constraints: [],
              },
            ],
            params: [
              "0x1::coin::Coin<T0>",
              "u64",
              "vector<u8>",
              "0x1::coin::Coin<0x1::aptos_coin::AptosCoin>",
              "bool",
              "vector<u8>",
              "vector<u8>",
            ],
            return: ["0x1::coin::Coin<0x1::aptos_coin::AptosCoin>"],
          },
          {
            name: "send_coin_from",
            visibility: "public",
            is_entry: true,
            is_view: false,
            generic_type_params: [
              {
                constraints: [],
              },
            ],
            params: [
              "&signer",
              "u64",
              "vector<u8>",
              "u64",
              "u64",
              "u64",
              "bool",
              "vector<u8>",
              "vector<u8>",
            ],
            return: [],
          },
          {
            name: "send_coin_with_zro",
            visibility: "public",
            is_entry: false,
            is_view: false,
            generic_type_params: [
              {
                constraints: [],
              },
            ],
            params: [
              "0x1::coin::Coin<T0>",
              "u64",
              "vector<u8>",
              "0x1::coin::Coin<0x1::aptos_coin::AptosCoin>",
              "0x1::coin::Coin<0x54ad3d30af77b60d939ae356e6606de9a4da67583f02b962d2d3f2e481484e90::zro::ZRO>",
              "bool",
              "vector<u8>",
              "vector<u8>",
            ],
            return: [
              "0x1::coin::Coin<0x1::aptos_coin::AptosCoin>",
              "0x1::coin::Coin<0x54ad3d30af77b60d939ae356e6606de9a4da67583f02b962d2d3f2e481484e90::zro::ZRO>",
            ],
          },
          {
            name: "set_global_pause",
            visibility: "public",
            is_entry: true,
            is_view: false,
            generic_type_params: [],
            params: ["&signer", "bool"],
            return: [],
          },
          {
            name: "set_limiter_cap",
            visibility: "public",
            is_entry: true,
            is_view: false,
            generic_type_params: [
              {
                constraints: [],
              },
            ],
            params: ["&signer", "bool", "u64", "u64"],
            return: [],
          },
          {
            name: "set_pause",
            visibility: "public",
            is_entry: true,
            is_view: false,
            generic_type_params: [
              {
                constraints: [],
              },
            ],
            params: ["&signer", "bool"],
            return: [],
          },
          {
            name: "set_remote_coin",
            visibility: "public",
            is_entry: true,
            is_view: false,
            generic_type_params: [
              {
                constraints: [],
              },
            ],
            params: ["&signer", "u64", "vector<u8>", "bool"],
            return: [],
          },
        ],
        structs: [
          {
            name: "BridgeUA",
            is_native: false,
            abilities: [],
            generic_type_params: [],
            fields: [
              {
                name: "dummy_field",
                type: "bool",
              },
            ],
          },
          {
            name: "ClaimEvent",
            is_native: false,
            abilities: ["drop", "store"],
            generic_type_params: [],
            fields: [
              {
                name: "coin_type",
                type: "0x1::type_info::TypeInfo",
              },
              {
                name: "receiver",
                type: "address",
              },
              {
                name: "amount_ld",
                type: "u64",
              },
            ],
          },
          {
            name: "CoinStore",
            is_native: false,
            abilities: ["key"],
            generic_type_params: [
              {
                constraints: [],
              },
            ],
            fields: [
              {
                name: "ld2sd_rate",
                type: "u64",
              },
              {
                name: "remote_coins",
                type: "0x1::table::Table<u64, 0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::coin_bridge::RemoteCoin>",
              },
              {
                name: "remote_chains",
                type: "vector<u64>",
              },
              {
                name: "claimable_amt_ld",
                type: "0x1::table::Table<address, u64>",
              },
              {
                name: "mint_cap",
                type: "0x1::coin::MintCapability<T0>",
              },
              {
                name: "burn_cap",
                type: "0x1::coin::BurnCapability<T0>",
              },
              {
                name: "freeze_cap",
                type: "0x1::coin::FreezeCapability<T0>",
              },
            ],
          },
          {
            name: "CoinTypeStore",
            is_native: false,
            abilities: ["key"],
            generic_type_params: [],
            fields: [
              {
                name: "type_lookup",
                type: "0x1::table::Table<0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::coin_bridge::Path, 0x1::type_info::TypeInfo>",
              },
              {
                name: "types",
                type: "vector<0x1::type_info::TypeInfo>",
              },
            ],
          },
          {
            name: "Config",
            is_native: false,
            abilities: ["key"],
            generic_type_params: [],
            fields: [
              {
                name: "paused_global",
                type: "bool",
              },
              {
                name: "paused_coins",
                type: "0x1::table::Table<0x1::type_info::TypeInfo, bool>",
              },
              {
                name: "custom_adapter_params",
                type: "bool",
              },
            ],
          },
          {
            name: "EventStore",
            is_native: false,
            abilities: ["key"],
            generic_type_params: [],
            fields: [
              {
                name: "send_events",
                type: "0x1::event::EventHandle<0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::coin_bridge::SendEvent>",
              },
              {
                name: "receive_events",
                type: "0x1::event::EventHandle<0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::coin_bridge::ReceiveEvent>",
              },
              {
                name: "claim_events",
                type: "0x1::event::EventHandle<0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::coin_bridge::ClaimEvent>",
              },
            ],
          },
          {
            name: "LzCapability",
            is_native: false,
            abilities: ["key"],
            generic_type_params: [],
            fields: [
              {
                name: "cap",
                type: "0x54ad3d30af77b60d939ae356e6606de9a4da67583f02b962d2d3f2e481484e90::endpoint::UaCapability<0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::coin_bridge::BridgeUA>",
              },
            ],
          },
          {
            name: "Path",
            is_native: false,
            abilities: ["copy", "drop"],
            generic_type_params: [],
            fields: [
              {
                name: "remote_chain_id",
                type: "u64",
              },
              {
                name: "remote_coin_addr",
                type: "vector<u8>",
              },
            ],
          },
          {
            name: "ReceiveEvent",
            is_native: false,
            abilities: ["drop", "store"],
            generic_type_params: [],
            fields: [
              {
                name: "coin_type",
                type: "0x1::type_info::TypeInfo",
              },
              {
                name: "src_chain_id",
                type: "u64",
              },
              {
                name: "receiver",
                type: "address",
              },
              {
                name: "amount_ld",
                type: "u64",
              },
              {
                name: "stashed",
                type: "bool",
              },
            ],
          },
          {
            name: "RemoteCoin",
            is_native: false,
            abilities: ["drop", "store"],
            generic_type_params: [],
            fields: [
              {
                name: "remote_address",
                type: "vector<u8>",
              },
              {
                name: "tvl_sd",
                type: "u64",
              },
              {
                name: "unwrappable",
                type: "bool",
              },
            ],
          },
          {
            name: "SendEvent",
            is_native: false,
            abilities: ["drop", "store"],
            generic_type_params: [],
            fields: [
              {
                name: "coin_type",
                type: "0x1::type_info::TypeInfo",
              },
              {
                name: "dst_chain_id",
                type: "u64",
              },
              {
                name: "dst_receiver",
                type: "vector<u8>",
              },
              {
                name: "amount_ld",
                type: "u64",
              },
              {
                name: "unwrap",
                type: "bool",
              },
            ],
          },
        ],
      },
    },
  ];
  const {selectedModuleName, selectedFnName} = useParams();
  const sortedPackages: any[] = [
    {
      name: "bridge",
      modules: [
        {
          extension: {
            vec: [],
          },
          name: "asset",
          source:
            "0x1f8b08000000000002ffed5d7d53db48d2ff7f3f8592aba2e49c9285400867027584b0bbd493b707c8eeed6da554c292b12ab2e4b3e41092e2bb3fddf3a2e979938d2179b27bdebaba6069a667a6a7a7fbd73d3da37195ce8a2c389fe6e945d6ef27759d35c1971f02f8af6ea6b34113bc3b7d71187cb9361e9d198f9ec333bb147b449ffd7674f68b51ecb7e7678c3e141ceb9d19547919f31fa24bb33a836a69bf9f4da7d574577f06f4f2f2c278f8311b3476c9fca2cca6fdfe97244da7595dc7d5f07af787b64c3269aa3a66259be4bc809e7c39cd8a61149ce1afeb5d57c1ec6356366dc123fcf54b52a6bee2cdd5248bf3725829daf0e4181eb8cb0fa7d5383e1fd450b38a45af9d05c74933dadeb206339c26e3ecb29a7ee05c6d5b7d3e9b9687c92439cf8bbcb98a825779d9d0df3f4db3ec73469f1c4275ab8f843c7fc01b39c0bfb14257f9c1a09a950de971915c65d3cfd9b4022ae3710574ea6c9a66bb1d05664d5e006fbef0d98eeb221f645180c23c6de2d9c676fb379ff9f667919517cde8da411a66b44c27d07535a9ef12c5077795e273329938df4cb371d590217cc687ecfffe7df2463d96925fe4e3bcc9a6822983aaac9be0e8f9c9f18b9f8fe277af4f8e7e3e3e3d3b3a397a111fbe397edd0f66db5bc15eb0fe697d7dd75101cbc4072f4f8e0e5efc1e1ffd0baa9e922a1bae2a2747afde9c899aafdf9cc53fbd79f7fa05a9f4d855e9f8f5af072f8f799fe2b3dfdf1e910a9bce8ebd3c387e75f0fc6547435b731b7a717408445ed2213df172019b78f7fab79383b76fb15d5267dbddd0e9bb9f7e3a3e3c3e7a7d16bf3cfedf77c72f8ecf7e27b59e7675efe0c58b93a353dab19daee2a7c73fbf3e3a21a5ffd155faedc1e1ff1c9d996c4e5c55de1ebc3b3da24c3d77953a3d7afde2f8f5cff1c12b980220fce64dfcd3d16fa4d6a07bac076f4122a1ad93835774c8a990e11f7f0c26c920fb00d605755f14e46550e465165ce6cd2838faf51521fef6e4e8f0e8f8571cd80e52a10dbfc57e8a171bdafa38fde500570491072cb3ad9781cad0c7df5fbe394086ffbbe5ddd32dd5cf76d9e2929c82c69a803a499abc2a838b0cb4473e60430886d5346846798d253453c816f1bb03d3f6bd05d51c8c921afa3201459a4eab89306bf81fd710f1609480d1cb53d6b1c87a8b1611d57f3fe0aaeed96c679f97d2db42a58b16e514ca64acd10fd915698dd99fa2aa3ecc267d6ed69e61f79419da8fb4b275dba051406ff6e567a5221dad0e12688daad1679257fbce3194c3fcc2416692c0c4a4f145519d27453f38afaa22325f22a76a3934d9e78895dd8f7096b1009fc787fba292eae7ac6ec0de262958ab6c1a4f123057356d48efe8099b1c6439eb6c8d3cf7cdafb0ddf6fc09e1031af5289966699066837c9c14b59a878f455c9b8201552e475933ca5016333eaa415206e759302b2fa7209a400aac58159420c21f45091065de9f80c95b044bf143c6c1197003ff81128c6a361b4700d15e3fc717f80fbc787e7ad8b62f1a6130c9cb20640d93c4679351027d19b7f2b9ef98de227d5ca7f13469327bacacbbc72976460e0028b996493bf948824cd1be4d2fc8d3a01a5282b573599259dbde227406450233056dc5c91830452a5b16731d057a71297cb01a543b6398a398ad0f1d823d6b39a5089c0368e36575f8e62a3b64008e9736c19c595e9f3486617dfaa306741433cc0b4c2168f7d929bc60bff7a9f21a64207acef227fc9d5985b1d459e110dfd0e27aafdbf659a7710d467c415235845a14977ebf5577aae5b46e7c4a185f89b14cdd0b381923966522a0d5e4aba44b83282e2cdbf17a3af05b0fd9692992737b5c37493dcad28e35ddcec3b21dbe61af44f3c319acd7326f62ee2c86c27fe8076b1cdbf7a82601b401920ff65d81f9697691d7a8d56789b23e924a6f57d5452cdfef6353f26d84c44811ae1bf4323d8123d89aae40e89b4a55d7cce317d6b5ebce0ac204aa1139ccdf106c4416b94a0835287cd832bb0c7b7a398f9d3328ceeb22451a7a4f3594e1ef860630c0f11a4f9a2b5aa6bb03444fe9ad6b3a4a8a09b6cf1fc6235363b573a877cf545f7e529a32f350d3359b9f16d1730e4ad7420caf256ab5c16b928ed1b49530b34340de4639fe1616d38001db06cba70214550c4a705f94959fccce0102c3226aa6576c01b68b082b283312aa056cac4ad5f3123cff7ec06335fdfe29fb97a89dabf17955f8df4b5084e85e3d15ee325a398990d8bb1ef4e33fb31c748b574cb5b88012aa7ff2d193c5ce0bde0bef81b6e3385c32214b09077a51c0625310d828a659925ec5d9272855871dde78cfd18ce1cd04cff6dab1b72de4e5c7a4c8d338995eccc6303961a783dca3ab083563287144445042d422911ea84d1ec641fd96434b9f3332d0965538a19198b8887412cc446636c9140237127b6059601897428fc5e359f34c9ba4fdd09e04a92226b37a149f27830fe11ad423641f315d120524bec6feac86748ee62a340e561548d5150b05a83cde063daa2ec38df5280843c981e0a1e9928238d6289b3d4bc150d4ead7934e2cead0976e4ceaa72b675c7fda4a87f654498a5b3d8ba548ecaca1225a3eeb8bd6d4670e053560c67006b273f6db41207b60e9260860c784b6ddb4524a500b9922514e40f4470481893205f1acb3017bd05b5e69104d6172c3c93a32025254f455f69276b067f0ae82b88a6ab3d57dcc311c25e0048e6745934f8a4cf379801d8f2e1ea1f7f790c5fcc10e0507bf1efc8bfdf2f39a48efcd2cc16d231e1deea7a1f84fb9477e47360003caa1d179bb100f2d876be638a260f3f1d2128278160975ab50437bb914696bcd845680b5d5a05609d714fd47542f45e674f5e69b218fa9d38643da80f19048ca1797ea6ba32716577540292225ebfa63222c044929a6085e003d6e5616654544bb33df5a39c8328d6eb3f88eada7393ec36c0aa41ef140e597ce5132a607d70b185aa2999cea430c80b92c0e0dcd5d19beb6b5556d384673d7b0b18858753717f1958b7dbcd223cdfd0212fcf7fc81b2729dd6e8cec67a0be5b2045f8458cd26d8981471ca2ab16aba45450e7f8ec8702b183b3dd77906fefb901f67d759888275d5357c1cf80588105b79031942c8b3ba439c7afd20f48612fd81c38e20a1cba87e23a9f499bc45cd5d48746e8b76a92256ae1079a8b06ecfed6c7377799a94f510e2ef12abd6b4149941168ff0c124e66931bebaa2b8b70a4a0eb34c506ef7e3f7bb42936c8e8c90908beeb8be28f2736f919ed5a81394a9f08d0c77997132dd69e5db1830646029d824d843177fa3bfdab238c66dc5185eb2998f3406461acf22e44f243c5d0c9c3c831d79a68f3867228317913e6e6d7d23893483d845751523a990f46e974440c8083cabdd1ec837161ad1c96ed9c1e1a912c8b76f2357a1d923d581de5d08591b7e6e43208070671907c734460c65d94cd10a8892807329a8797840a6cda64448e5c3205454f60db23d030e83eee1cdb0481d36c5bcb5349b5475def0fd3e15c3933e981ec480beb38a7288d927d064834661d488f0e1a1d9a15d3dda20449f352ff56fc4e89392d7bb4b2d6516c22c936281a5aca43692c2b9f83a56d6c2dfb139284f7619d3b55c0b164be08ab37ce1afb2eb44d7b0f6a25db77336a9ee6ac5dec59a14f2376f91b92454628856d451a7a6d3e492d4e33313d1660c0a8a9b40475210123a8ccb2c4b2110ac74524b51d533088a59e8a0c62c91a4238a5b51dcef7515818e92fa087d5f8ce0f1a158d30ad4983bb917a87c4c316cc23241cce051480844ba69bd615dcb56930d479b8d2b73fc6dccf122ce82199e2bb927d95d0862787446fc013c7d6db0e01d95715e1aac6dd230934b22aa415eaba075fa15a3788b07f1b421b711bcb26ae221e8cd34ec4c00ed19436fb107c3349842d3a620614ac07996954251a74bc32b51b6c6b26cdf456978cd57537b320efe2822fb10139c1bb774a7425aa307ab0f3a0dd88af3df422e11b87f142430ad0de23a18ff74585497940b32d40f44624ec1b66175ea16359ab9c5189d95d5ec62044461a5a5b07c3a02ac425284c481a8cd8974762e917b2129fc88075d83fd3d35678bec54ba326c7b569285d6c49eebe143d5acce3574ed5bc1349c357c270ce29a231a60f07f30cac08e5d00c7d9fcf1d455a14203ae1f157d2c6bc6a774a3bba6bfed99ddce61814c92aba24a52cd4de0aadc74095c534203de8b45eb8d04e99e1fbd8b9eb1c0d5a04a21908c36523cd57aa1c7ee4db04184450c4ce703920d8acf688670b909e127c909b243c5e798e7fae811226a575c3a94f941d023d1bd56b8fa7d88b81157c6bd1018028b0de0618230914ac418d4baf32af7489b464d44ac3756a214f34338cff58704c369cf259ed36547c774fae63035fffaab35cef2477433d898bd0cd709cb6bd158c6335dfcf64f0104d79489b336489be7ccd01c1ebd87a8dc48638f484e903e169537a82f2ba92b4416db9c18b655d53f9d26eeb3df2a4367bd12605c7b7e1d392761596716e656748d7a49568e214b3b7425354bb1a40fbf6b3448c7e6c37859abf600da313d6a2503b65dc49f4a7f50ea1ad30c65b2a41653f98d64de948af1b6de4e534457b3e5c6a1826f878e91a60be9527321d5f5a1bde52d853c3ebf6a303d47219c604f9097bd6e4dc89af8a30b04a936be0b74ad89d032e8faee809b21cd1d2841f8de3aa8326df68d32cef05092899631bb1011f2c7e2c6c8eeef4e64673a1275fab8484382267cce81062e30cb194115f7dcb890324c0d93165cb15968d36818fa60456c38c9274cd487d96a0f6986bae89bc1639e650d35ee8954bb3a16c15a777aa1a466448e051d1313b2b5d0268231365972c411499a0d9359610b959946a6967214ac1b41e0074653faefbfabd9229832c88a3a73f51aa538c6adba4c7989f893ba7f6b8e5dbdcec0b4ea3ba5af63dc6f8f5ee640163dfd58b7f9dab9813b052e9ac5b0de2e055a84901aa88582962e3cc2f3a60d73af82666df6ff6208e36b600a2a39921ad314ec18212c531e7574ea0c4700d4b3d46fa82818e19ea918380d59b15bbf5c7bb190a630f90f5ced0c20e02e541d8c71894068ac0cd6ff9f0cb45f8171ce745869dff164d350bb352c0f7cdd40a1f2fed8a3d3c8d3f8d5cd7afcc362ea95b63657c3bab5abc07c868afdeef42a3d88a1eb2472b4e94e75aad2563aabfc4ab4af09d7629a53a5a7081dfa31cf2eddc9297ffb03dfbd37930f940bc1065abbdcbef8467e9f7d7a78fec90c8f2b414247623b7a311f22d0625710b8dbf3e439f60d5fcdce7a5c382d737e4a66ab0c5b5932315ab8e64bd3c451d08525d34debbcbc00ba55a9b81d3ed01bd15c7f8f14cc39e7c2b792c87cf1732eddba7b8166ff33436e43882ab437cc50b6a0ff183f9329fb1d3b58fe9d2bdcb362f48cbc7ee545ab5e382380917d9300eddcbc5dd205d880e97ee0ffd4e0cae85c0fe911647a1e79b1f4bc8560cedd24ddb1b5014380fada5115d65bb3b95c5df480ff5d8e720012611e3c6bebcafd385ffa74cfe5fd186b9b7445ae2e7f36766ef812739cf28eb8c003ff6901ba70cd534d1f8b3a7238c4466de45c0eeed58633541ffac787f47b9efcb3f9f915fc500cbf3fa353f0ee469894abffa3dbb30f1eb89f7b0608f8998732dcc7579c67533acfa44885f80d78b1bc20fae5f066012137de90b9116eb0815cf725ba7465c55b12a7275810ee9a3974eb6eb7c791fdd3662babf4a1ee18054917251af4071d9b91041277028a6bdc6dc8cd954dd233466bef9efb872d61ba3accaeefb6778c53cb6935ab1967cf980f54540310037112f251c0227bfab526c8e9f222488a826f64d72dab8c5d7eb1f48c4b4184e2f9e2d40feec5cff278f420e1cd68c3281e7868a34f53d220791f6f3b92971d851b3dd0cf62e7b2a93e6465b8f9983fe25056fce4ed843bf837ecf024d349302c920ba8de0ec0b5d7ca8089f3989c3fb128307940f3837ab4a80d216862cc9c636d8be4d0e89bc90652d8d18002bb078e5d07c78f23c7b31d6e2adb4d0c763d54570d4edfa8a58d64a9da8eb889ddd9ed2da3264df4a0ece09381769d6ef7071bed1a0dd6a98d9fcf9676675d56a179054a86f58d9edbc930517d4ed7ac6d644dc7e55448e9dfee23b842c0da813eddb4450bc7c05c1f960fc958050a4d6316bd3750118350cb86eb6cbe4672afbdae4c9dfcc7cc9f2c0d3bee6ceb3a07296381ee4e6dc0fad9b4c000dd63f056dddc8c82ed271d09562eeea0d0bac96d3f61fca6c76c6eb2f367eae6b919334253991edf9a677fd908f3fa8f6d751cd9e236d67f6ccb723978a68710ce0bf0a059a690cf890c42a6afe4b500b6dbb83ecf3e4b91946a13602dbf0ec0e8e7e23b78fa4d7e3d9fa5c7199bef525a0bf65eb8e8f519936c3aceeb1a50246c4e9539594ed605983d3b61b723507fd732d21ea5769d0f6d87332b938f495e204e0ff58b199dc159a9afba438cbaa03ac2e08e53982df59e2f83ecde03cb9de8a4b3e0183d8051da9e19780f01a888c68850e2a3b82a8babf7fa1dbee7837af70777197143559b907c08b6d4bec2cc7be39a2bb5da7be59a59f8dad327e27ab2ccbed61e323e4aa3c8228f6e28d705e3246c75a2b63bc557a090c4559e1218b4c1ec1ba2266da837c65cb7c15bdd3088cfdcfb5693b07914b05b14875d972983e0a179d91803462495f09feb9f36d69db65abcdcd8f5d46f4db9bcf499fd8660306d611e0c30ea8af726001834337690dde55be8d72a18bd735e93e57cb7b16e5cc580970399fb17b243d9a7094c79a6a415c5f48f8df7bb6d3a28113f2bfa8d375e96e282034929b2bacec598e6ead3c8c67c7a665607a1265f2d48890c719d414ee37fc8ba60e33d6f820b30770fd14340f7d0ce761713ba475a59d74da453c80550a7422ec6a2c9395bfe5c9d5c544d8047dd605f6d1c9ce753332557a99d4ff7d76ffbdfc62deb3fe6ff643be956f20489dddf5d346dadd51c37da69eacab5ba353f36eeebe85035269390eea091c79e46841842136252203022fef2889a61c1b5cf0df4fb5ff086a188dd3f2bdc5a672d729f3a7b3bca0a408975470debb6f9261f43a9643cd99d032f002f8cc0988c92cdf8f1936d0d69848c2a2a70837c446ea69f56151eadfd67fba4dd034a66cda87d4d9e45822bed3be93354d36450a8c71b8f3759289a516e9f3ed97eba0340ec533698a1abd616de7cf2943cd6dad69ef60c65e0bc6e828f9cc466f5f19217e658c92b324af2940c923ca5a3a4b77ad061ba9edbedfaae028c9c71fa8e2f1be8df2b60b64cca14bfb90b7fc6e8e5c0330c0330458a3c856d59ce400af835a200dea759826176fe3b24e9403aabb5b0c4a22408e797aa4fe668a9fa74369722a0cdbbe637517dc0a661368915c7e40c184cb4c55493435dfc0ca973095b042666133420fb87f68ede574b27816ebfd0dbf2501deed392517b21e6ac19ee84e7f7b1c4fd9ef7f17614e8e6d248c0c1f4edaa1ce8d63a5437a3b86e8644e3e7be84c6eaaef7520cd942d8914cc44bca1e84e42c96bba4ea61483a6b8fb7b9ccffda035ed0fd24c2a816065b73d5d4798b32955e516e4e6be2caabd9c4321803d0b3809dea6a361d647f4e4b026010e3a04e562d623716283b609fcc31824294718e7451bd8079aa44e3aea3b6615df4dae61438ea9b450c0a644e1c95a95d313d5a356bce145962504c27924caca3aa6e4a3c75bb466c1732a810e97454772b0fe68fa374396ab0e7865ec3a5c9527195dcf0e339fc4b0f33dc90e7780f0ba10e0a44e0ea91ef2a607afd2ffd9693ba0458690d0bcd7c4528e458008e8ca55acb66a5d771e8f1889dadadeda75b5beb4f379faeffe3c9938ded8d27c6d946fb525c5fe22b6dc5bf2045426cc780e5456246cdc8b57a75fbeec7525e9ace357d6baae63abf35414b01dc9aa2ad18ee8ee41d73d3d420b726a8548b45caba0fdb84ca5a34fdcb0dee8ff6dd593fd799d67b8f45ba17c69fc9dd1673c1a3c007cf0f5ff4debb8fbd3064c52f252af54d83ff0e6cd57aedfa191ef79dce73cf0f1b51a4590112ca6aecfa8ad88126ab50fb15421e96266b896060737acc5971f9a29a03782bc734b0c0c32248c35dd6b7bba04a18206532cd60179a1f9a9419d63a3ac56c317d9b1fc8332fda9df4d85df2fb880518a3eacabde4a7aa603bbe269fefc0efcaf12f48040a7aa50b8414f4ef4cb1cd6cd76d19ac77a2a61001a1029d3c5faaa47f23ca2c69fa2b66ef7c94ac828ecff38004e8b114dfc5d6567bce6b7fa763f62dc0da48b669bfc3b0c88ea48310868deccf0fd52cfe8093484ef36b83d960bb44d69036235723166216b90e4a11b26b4f62f55ba5aeccbbf1fe5e48a9f0b52373077ab857e0f1f8dc5b0c9496587a3e629a17389f5a5e9ee3a1b958638f461b7c81b954aa5943c924639bcc63b119e25890d6d9f1f6a3217bc18eb1aa30b79d6db4b01dc0702778186cf78207b8e3f2b5c287ea232e1beb6ec4e94959ebd20b6db9395ac19d14a07f67c231c2b9b7d5cb65c6be6eb5cc6117d6e87ed8a572da339b9e43172816e4c8ce1f46a7dffbf6f4dc0c5c3eefdfbadfc19cdbc5cfb42dc20ef3fb3c840ded11b53f1ca94e7c9a7befedfe2d7b666ed14f1bf47d527bed189e907a36216a10f278b6bc08c23881e79eeaf3fb6c4bf4be414b846bf1534b8bd2616bd920c313a33ac8505535ae061f64a6057eea96fb1ea02ec4c904ed1aba87fb22e79ffdd4ef4dc58d06feb55e0d5092bc53aa657cb78c75644df9cc7764a1567fca351e1bc6089518f09e1839ff301bff3b5c1837d8e0cf036822ce9df6d0ac09388acf3211d03cb6669dd1f57e29cabac0c1db6bd7ad622afae516b4c5645f8c6379a19f47609eb4ebf53dae429a152ca7874f37015c5d8e80263702c4e93741f07c2f169b3d07ec97561085651b52f2b24c5c5d65d51a715862ce7c283c0f1aecd1cb709ca54047277cc55957e218d76392aba2b8a6bd8180fbd35d3a2fa8e0ed1057d1a3daefd0162f6d23e59d447bda0c181244ae25216333b702da2911d74ef2df36371ca22dabee59336cab6c961cc7b533d1c6f463c99676b63e43d299204a768316af304a8a612c53866c39fd31786c2462b1fba663dc8050c7b02dd1e41f295df8e30cc6ddec84f30ee8689b0d3206f1c188f51b77e1ee2441ebcd9f6cfde07c7b92c456b1602d16fcb73f5abe0d93bc984db3909d2c8ad921adbd00738b21f2c5c105fb48e25e709a15c3ce50b2040decd62f79180467901df25a85946f1b525ec58b57f1e255bc78152fbe79b0ef9bc7f0f40631f9babb412ce168503ef636c8e4b5a8958353b34cef1ffe8ac14493b683ab166d9964ee8d63f4da765a56aa6f21a396bccc9ad12a76f31dc56ebe7e5c01207703ca1e3fba31c30bbf027e84e292dd36c9d6177ea0025f34155b9a99b8b656decda2a591352084d5ac4803049ac1085c75fe7103eff5beae180297f5a563082b57e036aec0137ef866195760561a27b8576ec0ca0d58b9012b3760e506dcb51b00c2511657ea766834dadf936bf05782e48be1618694be212816bd46c42e993a1fff2f8fabdb7656787ace3edd5c0c6c5d3bc3248979b22b30fc7d81e16d58765b3703c3b08f37ce4b76d1365b47ea72f51518f681e145e1ef9f01d8ae00e7f7073817476206d2909774ad80d8f706c4e65a59df272c164bb85899cddb6e276f6b66d33a9fcc2eff9d7b54496c2ed7b3e13087c823604c91bcb032a6771c595a99d695695d99d6956965fb82a8f535b6aba4536663d765fa99718ebdfd0e983b83f146a9736674d70c0ff7f40991b7dc89543ae32895f56065e69730f38b99ebd52ed0ca56af6cf5ca56af6cf537b0d5ccf96d2a9eb07ff0f64ccf11330c2ebd5ee6b65677597b7bfd7fa589742228b40000",
          source_map: "0x",
        },
        {
          extension: {
            vec: [],
          },
          name: "coin_bridge",
          source:
            "0x1f8b08000000000002ffed5d7d53db48d2ff7f3f8592aba2e49c9285400867027584b0bbd493b707c8eeed6da554c292b12ab2e4b3e41092e2bb3fddf3a2e979938d2179b27bdebaba6069a667a6a7a7fbd73d3da37195ce8a2c389fe6e945d6ef27759d35c1971f02f8af6ea6b34113bc3b7d71187cb9361e9d198f9ec333bb147b449ffd7674f68b51ecb7e7678c3e141ceb9d19547919f31fa24bb33a836a69bf9f4da7d574577f06f4f2f2c278f8311b3476c9fca2cca6fdfe97244da7595dc7d5f07af787b64c3269aa3a66259be4bc809e7c39cd8a61149ce1afeb5d57c1ec6356366dc123fcf54b52a6bee2cdd5248bf3725829daf0e4181eb8cb0fa7d5383e1fd450b38a45af9d05c74933dadeb206339c26e3ecb29a7ee05c6d5b7d3e9b9687c92439cf8bbcb98a825779d9d0df3f4db3ec73469f1c4275ab8f843c7fc01b39c0bfb14257f9c1a09a950de971915c65d3cfd9b4022ae3710574ea6c9a66bb1d05664d5e006fbef0d98eeb221f645180c23c6de2d9c676fb379ff9f667919517cde8da411a66b44c27d07535a9ef12c5077795e273329938df4cb371d590217cc687ecfffe7df2463d96925fe4e3bcc9a6822983aaac9be0e8f9c9f18b9f8fe277af4f8e7e3e3e3d3b3a397a111fbe397edd0f66db5bc15eb0fe697d7dd75101cbc4072f4f8e0e5efc1e1ffd0baa9e922a1bae2a2747afde9c899aafdf9cc53fbd79f7fa05a9f4d855e9f8f5af072f8f799fe2b3dfdf1e910a9bce8ebd3c387e75f0fc6547435b731b7a717408445ed2213df172019b78f7fab79383b76fb15d5267dbddd0e9bb9f7e3a3e3c3e7a7d16bf3cfedf77c72f8ecf7e27b59e7675efe0c58b93a353dab19daee2a7c73fbf3e3a21a5ffd155faedc1e1ff1c9d996c4e5c55de1ebc3b3da24c3d77953a3d7afde2f8f5cff1c12b980220fce64dfcd3d16fa4d6a07bac076f4122a1ad93835774c8a990e11f7f0c26c920fb00d605755f14e46550e465165ce6cd2838faf51521fef6e4e8f0e8f8571cd80e52a10dbfc57e8a171bdafa38fde500570491072cb3ad9781cad0c7df5fbe394086ffbbe5ddd32dd5cf76d9e2929c82c69a803a499abc2a838b0cb4473e60430886d5346846798d253453c816f1bb03d3f6bd05d51c8c921afa3201459a4eab89306bf81fd710f1609480d1cb53d6b1c87a8b1611d57f3fe0aaeed96c679f97d2db42a58b16e514ca64acd10fd915698dd99fa2aa3ecc267d6ed69e61f79419da8fb4b275dba051406ff6e567a5221dad0e12688daad1679257fbce3194c3fcc2416692c0c4a4f145519d27453f38afaa22325f22a76a3934d9e78895dd8f7096b1009fc787fba292eae7ac6ec0de262958ab6c1a4f123057356d48efe8099b1c6439eb6c8d3cf7cdafb0ddf6fc09e1031af5289966699066837c9c14b59a878f455c9b8201552e475933ca5016333eaa415206e759302b2fa7209a400aac58159420c21f45091065de9f80c95b044bf143c6c1197003ff81128c6a361b4700d15e3fc717f80fbc787e7ad8b62f1a6130c9cb20640d93c4679351027d19b7f2b9ef98de227d5ca7f13469327bacacbbc72976460e0028b996493bf948824cd1be4d2fc8d3a01a5282b573599259dbde227406450233056dc5c91830452a5b16731d057a71297cb01a543b6398a398ad0f1d823d6b39a5089c0368e36575f8e62a3b64008e9736c19c595e9f3486617dfaa306741433cc0b4c2168f7d929bc60bff7a9f21a64207acef227fc9d5985b1d459e110dfd0e27aafdbf659a7710d467c415235845a14977ebf5577aae5b46e7c4a185f89b14cdd0b381923966522a0d5e4aba44b83282e2cdbf17a3af05b0fd9692992737b5c37493dcad28e35ddcec3b21dbe61af44f3c319acd7326f62ee2c86c27fe8076b1cdbf7a82601b401920ff65d81f9697691d7a8d56789b23e924a6f57d5452cdfef6353f26d84c44811ae1bf4323d8123d89aae40e89b4a55d7cce317d6b5ebce0ac204aa1139ccdf106c4416b94a0835287cd832bb0c7b7a398f9d3328ceeb22451a7a4f3594e1ef860630c0f11a4f9a2b5aa6bb03444fe9ad6b3a4a8a09b6cf1fc6235363b573a877cf545f7e529a32f350d3359b9f16d1730e4ad7420caf256ab5c16b928ed1b49530b34340de4639fe1616d38001db06cba70214550c4a705f94959fccce0102c3226aa6576c01b68b082b283312aa056cac4ad5f3123cff7ec06335fdfe29fb97a89dabf17955f8df4b5084e85e3d15ee325a398990d8bb1ef4e33fb31c748b574cb5b88012aa7ff2d193c5ce0bde0bef81b6e3385c32214b09077a51c0625310d828a659925ec5d9272855871dde78cfd18ce1cd04cff6dab1b72de4e5c7a4c8d338995eccc6303961a783dca3ab083563287144445042d422911ea84d1ec641fd96434b9f3332d0965538a19198b8887412cc446636c9140237127b6059601897428fc5e359f34c9ba4fdd09e04a92226b37a149f27830fe11ad423641f315d120524bec6feac86748ee62a340e561548d5150b05a83cde063daa2ec38df5280843c981e0a1e9928238d6289b3d4bc150d4ead7934e2cead0976e4ceaa72b675c7fda4a87f654498a5b3d8ba548ecaca1225a3eeb8bd6d4670e053560c67006b273f6db41207b60e9260860c784b6ddb4524a500b9922514e40f4470481893205f1acb3017bd05b5e69104d6172c3c93a32025254f455f69276b067f0ae82b88a6ab3d57dcc311c25e0048e6745934f8a4cf379801d8f2e1ea1f7f790c5fcc10e0507bf1efc8bfdf2f39a48efcd2cc16d231e1deea7a1f84fb9477e47360003caa1d179bb100f2d876be638a260f3f1d2128278160975ab50437bb914696bcd845680b5d5a05609d714fd47542f45e674f5e69b218fa9d38643da80f19048ca1797ea6ba32716577540292225ebfa63222c044929a6085e003d6e5616654544bb33df5a39c8328d6eb3f88eada7393ec36c0aa41ef140e597ce5132a607d70b185aa2999cea430c80b92c0e0dcd5d19beb6b5556d384673d7b0b18858753717f1958b7dbcd223cdfd0212fcf7fc81b2729dd6e8cec67a0be5b2045f8458cd26d8981471ca2ab16aba45450e7f8ec8702b183b3dd77906fefb901f67d759888275d5357c1cf80588105b79031942c8b3ba439c7afd20f48612fd81c38e20a1cba87e23a9f499bc45cd5d48746e8b76a92256ae1079a8b06ecfed6c7377799a94f510e2ef12abd6b4149941168ff0c124e66931bebaa2b8b70a4a0eb34c506ef7e3f7bb42936c8e8c90908beeb8be28f2736f919ed5a81394a9f08d0c77997132dd69e5db1830646029d824d843177fa3bfdab238c66dc5185eb2998f3406461acf22e44f243c5d0c9c3c831d79a68f3867228317913e6e6d7d23893483d845751523a990f46e974440c8083cabdd1ec837161ad1c96ed9c1e1a912c8b76f2357a1d923d581de5d08591b7e6e43208070671907c734460c65d94cd10a8892807329a8797840a6cda64448e5c3205454f60db23d030e83eee1cdb0481d36c5bcb5349b5475def0fd3e15c3933e981ec480beb38a7288d927d064834661d488f0e1a1d9a15d3dda20449f352ff56fc4e89392d7bb4b2d6516c22c936281a5aca43692c2b9f83a56d6c2dfb139284f7619d3b55c0b164be08ab37ce1afb2eb44d7b0f6a25db77336a9ee6ac5dec59a14f2376f91b92454628856d451a7a6d3e492d4e33313d1660c0a8a9b40475210123a8ccb2c4b2110ac74524b51d533088a59e8a0c62c91a4238a5b51dcef7515818e92fa087d5f8ce0f1a158d30ad4983bb917a87c4c316cc23241cce051480844ba69bd615dcb56930d479b8d2b73fc6dccf122ce82199e2bb927d95d0862787446fc013c7d6db0e01d95715e1aac6dd230934b22aa415eaba075fa15a3788b07f1b421b711bcb26ae221e8cd34ec4c00ed19436fb107c3349842d3a620614ac07996954251a74bc32b51b6c6b26cdf456978cd57537b320efe2822fb10139c1bb774a7425aa307ab0f3a0dd88af3df422e11b87f142430ad0de23a18ff74585497940b32d40f44624ec1b66175ea16359ab9c5189d95d5ec62044461a5a5b07c3a02ac425284c481a8cd8974762e917b2129fc88075d83fd3d35678bec54ba326c7b569285d6c49eebe143d5acce3574ed5bc1349c357c270ce29a231a60f07f30cac08e5d00c7d9fcf1d455a14203ae1f157d2c6bc6a774a3bba6bfed99ddce61814c92aba24a52cd4de0aadc74095c534203de8b45eb8d04e99e1fbd8b9eb1c0d5a04a21908c36523cd57aa1c7ee4db04184450c4ce703920d8acf688670b909e127c909b243c5e798e7fae811226a575c3a94f941d023d1bd56b8fa7d88b81157c6bd1018028b0de0618230914ac418d4baf32af7489b464d44ac3756a214f34338cff58704c369cf259ed36547c774fae63035fffaab35cef2477433d898bd0cd709cb6bd158c6335dfcf64f0104d79489b336489be7ccd01c1ebd87a8dc48638f484e903e169537a82f2ba92b4416db9c18b655d53f9d26eeb3df2a4367bd12605c7b7e1d392761596716e656748d7a49568e214b3b7425354bb1a40fbf6b3448c7e6c37859abf600da313d6a2503b65dc49f4a7f50ea1ad30c65b2a41653f98d64de948af1b6de4e534457b3e5c6a1826f878e91a60be9527321d5f5a1bde52d853c3ebf6a303d47219c604f9097bd6e4dc89af8a30b04a936be0b74ad89d032e8faee809b21cd1d2841f8de3aa8326df68d32cef05092899631bb1011f2c7e2c6c8eeef4e64673a1275fab8484382267cce81062e30cb194115f7dcb890324c0d93165cb15968d36818fa60456c38c9274cd487d96a0f6986bae89bc1639e650d35ee8954bb3a16c15a777aa1a466448e051d1313b2b5d0268231365972c411499a0d9359610b959946a6967214ac1b41e0074653faefbfabd9229832c88a3a73f51aa538c6adba4c7989f893ba7f6b8e5dbdcec0b4ea3ba5af63dc6f8f5ee640163dfd58b7f9dab9813b052e9ac5b0de2e055a84901aa88582962e3cc2f3a60d73af82666df6ff6208e36b600a2a39921ad314ec18212c531e7574ea0c4700d4b3d46fa82818e19ea918380d59b15bbf5c7bb190a630f90f5ced0c20e02e541d8c71894068ac0cd6ff9f0cb45f8171ce745869dff164d350bb352c0f7cdd40a1f2fed8a3d3c8d3f8d5cd7afcc362ea95b63657c3bab5abc07c868afdeef42a3d88a1eb2472b4e94e75aad2563aabfc4ab4af09d7629a53a5a7081dfa31cf2eddc9297ffb03dfbd37930f940bc1065abbdcbef8467e9f7d7a78fec90c8f2b414247623b7a311f22d0625710b8dbf3e439f60d5fcdce7a5c382d737e4a66ab0c5b5932315ab8e64bd3c451d08525d34debbcbc00ba55a9b81d3ed01bd15c7f8f14cc39e7c2b792c87cf1732eddba7b8166ff33436e43882ab437cc50b6a0ff183f9329fb1d3b58fe9d2bdcb362f48cbc7ee545ab5e382380917d9300eddcbc5dd205d880e97ee0ffd4e0cae85c0fe911647a1e79b1f4bc8560cedd24ddb1b5014380fada5115d65bb3b95c5df480ff5d8e720012611e3c6bebcafd385ffa74cfe5fd186b9b7445ae2e7f36766ef812739cf28eb8c003ff6901ba70cd534d1f8b3a7238c4466de45c0eeed58633541ffac787f47b9efcb3f9f915fc500cbf3fa353f0ee469894abffa3dbb30f1eb89f7b0608f8998732dcc7579c67533acfa44885f80d78b1bc20fae5f066012137de90b9116eb0815cf725ba7465c55b12a7275810ee9a3974eb6eb7c791fdd3662babf4a1ee18054917251af4071d9b91041277028a6bdc6dc8cd954dd233466bef9efb872d61ba3accaeefb6778c53cb6935ab1967cf980f54540310037112f251c0227bfab526c8e9f222488a826f64d72dab8c5d7eb1f48c4b4184e2f9e2d40feec5cff278f420e1cd68c3281e7868a34f53d220791f6f3b92971d851b3dd0cf62e7b2a93e6465b8f9983fe25056fce4ed843bf837ecf024d349302c920ba8de0ec0b5d7ca8089f3989c3fb128307940f3837ab4a80d216862cc9c636d8be4d0e89bc90652d8d18002bb078e5d07c78f23c7b31d6e2adb4d0c763d54570d4edfa8a58d64a9da8eb889ddd9ed2da3264df4a0ece09381769d6ef7071bed1a0dd6a98d9fcf9676675d56a179054a86f58d9edbc930517d4ed7ac6d644dc7e55448e9dfee23b842c0da813eddb4450bc7c05c1f960fc958050a4d6316bd3750118350cb86eb6cbe4672afbdae4c9dfcc7cc9f2c0d3bee6ceb3a07296381ee4e6dc0fad9b4c000dd63f056dddc8c82ed271d09562eeea0d0bac96d3f61fca6c76c6eb2f367eae6b919334253991edf9a677fd908f3fa8f6d751cd9e236d67f6ccb723978a68710ce0bf0a059a690cf890c42a6afe4b500b6dbb83ecf3e4b91946a13602dbf0ec0e8e7e23b78fa4d7e3d9fa5c7199bef525a0bf65eb8e8f519936c3aceeb1a50246c4e9539594ed605983d3b61b723507fd732d21ea5769d0f6d87332b938f495e204e0ff58b199dc159a9afba438cbaa03ac2e08e53982df59e2f83ecde03cb9de8a4b3e0183d8051da9e19780f01a888c68850e2a3b82a8babf7fa1dbee7837af70777197143559b907c08b6d4bec2cc7be39a2bb5da7be59a59f8dad327e27ab2ccbed61e323e4aa3c8228f6e28d705e3246c75a2b63bc557a090c4559e1218b4c1ec1ba2266da837c65cb7c15bdd3088cfdcfb5693b07914b05b14875d972983e0a179d91803462495f09feb9f36d69db65abcdcd8f5d46f4db9bcf499fd8660306d611e0c30ea8af726001834337690dde55be8d72a18bd735e93e57cb7b16e5cc580970399fb17b243d9a7094c79a6a415c5f48f8df7bb6d3a28113f2bfa8d375e96e282034929b2bacec598e6ead3c8c67c7a665607a1265f2d48890c719d414ee37fc8ba60e33d6f820b30770fd14340f7d0ce761713ba475a59d74da453c80550a7422ec6a2c9395bfe5c9d5c544d8047dd605f6d1c9ce753332557a99d4ff7d76ffbdfc62deb3fe6ff643be956f20489dddf5d346dadd51c37da69eacab5ba353f36eeebe85035269390eea091c79e46841842136252203022fef2889a61c1b5cf0df4fb5ff086a188dd3f2bdc5a672d729f3a7b3bca0a408975470debb6f9261f43a9643cd99d032f002f8cc0988c92cdf8f1936d0d69848c2a2a70837c446ea69f56151eadfd67fba4dd034a66cda87d4d9e45822bed3be93354d36450a8c71b8f3759289a516e9f3ed97eba0340ec533698a1abd616de7cf2943cd6dad69ef60c65e0bc6e828f9cc466f5f19217e658c92b324af2940c923ca5a3a4b77ad061ba9edbedfaae028c9c71fa8e2f1be8df2b60b64cca14bfb90b7fc6e8e5c0330c0330458a3c856d59ce400af835a200dea759826176fe3b24e9403aabb5b0c4a22408e797aa4fe668a9fa74369722a0cdbbe637517dc0a661368915c7e40c184cb4c55493435dfc0ca973095b042666133420fb87f68ede574b27816ebfd0dbf2501deed392517b21e6ac19ee84e7f7b1c4fd9ef7f17614e8e6d248c0c1f4edaa1ce8d63a5437a3b86e8644e3e7be84c6eaaef7520cd942d8914cc44bca1e84e42c96bba4ea61483a6b8fb7b9ccffda035ed0fd24c2a816065b73d5d4798b32955e516e4e6be2caabd9c4321803d0b3809dea6a361d647f4e4b026010e3a04e562d623716283b609fcc31824294718e7451bd8079aa44e3aea3b6615df4dae61438ea9b450c0a644e1c95a95d313d5a356bce145962504c27924caca3aa6e4a3c75bb466c1732a810e97454772b0fe68fa374396ab0e7865ec3a5c9527195dcf0e339fc4b0f33dc90e7780f0ba10e0a44e0ea91ef2a607afd2ffd9693ba0458690d0bcd7c4528e458008e8ca55acb66a5d771e8f1889dadadeda75b5beb4f379faeffe3c9938ded8d27c6d946fb525c5fe22b6dc5bf2045426cc780e5456246cdc8b57a75fbeec7525e9ace357d6baae63abf35414b01dc9aa2ad18ee8ee41d73d3d420b726a8548b45caba0fdb84ca5a34fdcb0dee8ff6dd593fd799d67b8f45ba17c69fc9dd1673c1a3c007cf0f5ff4debb8fbd3064c52f252af54d83ff0e6cd57aedfa191ef79dce73cf0f1b51a4590112ca6aecfa8ad88126ab50fb15421e96266b896060737acc5971f9a29a03782bc734b0c0c32248c35dd6b7bba04a18206532cd60179a1f9a9419d63a3ac56c317d9b1fc8332fda9df4d85df2fb880518a3eacabde4a7aa603bbe269fefc0efcaf12f48040a7aa50b8414f4ef4cb1cd6cd76d19ac77a2a61001a1029d3c5faaa47f23ca2c69fa2b66ef7c94ac828ecff38004e8b114dfc5d6567bce6b7fa763f62dc0da48b669bfc3b0c88ea48310868deccf0fd52cfe8093484ef36b83d960bb44d69036235723166216b90e4a11b26b4f62f55ba5aeccbbf1fe5e48a9f0b52373077ab857e0f1f8dc5b0c9496587a3e629a17389f5a5e9ee3a1b958638f461b7c81b954aa5943c924639bcc63b119e25890d6d9f1f6a3217bc18eb1aa30b79d6db4b01dc0702778186cf78207b8e3f2b5c287ea232e1beb6ec4e94959ebd20b6db9395ac19d14a07f67c231c2b9b7d5cb65c6be6eb5cc6117d6e87ed8a572da339b9e43172816e4c8ce1f46a7dffbf6f4dc0c5c3eefdfbadfc19cdbc5cfb42dc20ef3fb3c840ded11b53f1ca94e7c9a7befedfe2d7b666ed14f1bf47d527bed189e907a36216a10f278b6bc08c23881e79eeaf3fb6c4bf4be414b846bf1534b8bd2616bd920c313a33ac8505535ae061f64a6057eea96fb1ea02ec4c904ed1aba87fb22e79ffdd4ef4dc58d06feb55e0d5092bc53aa657cb78c75644df9cc7764a1567fca351e1bc6089518f09e1839ff301bff3b5c1837d8e0cf036822ce9df6d0ac09388acf3211d03cb6669dd1f57e29cabac0c1db6bd7ad622afae516b4c5645f8c6379a19f47609eb4ebf53dae429a152ca7874f37015c5d8e80263702c4e93741f07c2f169b3d07ec97561085651b52f2b24c5c5d65d51a715862ce7c283c0f1aecd1cb709ca54047277cc55957e218d76392aba2b8a6bd8180fbd35d3a2fa8e0ed1057d1a3daefd0162f6d23e59d447bda0c181244ae25216333b702da2911d74ef2df36371ca22dabee59336cab6c961cc7b533d1c6f463c99676b63e43d299204a768316af304a8a612c53866c39fd31786c2462b1fba663dc8050c7b02dd1e41f295df8e30cc6ddec84f30ee8689b0d3206f1c188f51b77e1ee2441ebcd9f6cfde07c7b92c456b1602d16fcb73f5abe0d93bc984db3909d2c8ad921adbd00738b21f2c5c105fb48e25e709a15c3ce50b2040decd62f79180467901df25a85946f1b525ec58b57f1e255bc78152fbe79b0ef9bc7f0f40631f9babb412ce168503ef636c8e4b5a8958353b34cef1ffe8ac14493b683ab166d9964ee8d63f4da765a56aa6f21a396bccc9ad12a76f31dc56ebe7e5c01207703ca1e3fba31c30bbf027e84e292dd36c9d6177ea0025f34155b9a99b8b656decda2a591352084d5ac4803049ac1085c75fe7103eff5beae180297f5a563082b57e036aec0137ef866195760561a27b8576ec0ca0d58b9012b3760e506dcb51b00c2511657ea766834dadf936bf05782e48be1618694be212816bd46c42e993a1fff2f8fabdb7656787ace3edd5c0c6c5d3bc3248979b22b30fc7d81e16d58765b3703c3b08f37ce4b76d1365b47ea72f51518f681e145e1ef9f01d8ae00e7f7073817476206d2909774ad80d8f706c4e65a59df272c164bb85899cddb6e276f6b66d33a9fcc2eff9d7b54496c2ed7b3e13087c823604c91bcb032a6771c595a99d695695d99d6956965fb82a8f535b6aba4536663d765fa99718ebdfd0e983b83f146a9736674d70c0ff7f40991b7dc89543ae32895f56065e69730f38b99ebd52ed0ca56af6cf5ca56af6cf537b0d5ccf96d2a9eb07ff0f64ccf11330c2ebd5ee6b65677597b7bfd7fa589742228b40000",
          source_map: "0x",
        },
        {
          extension: {
            vec: [],
          },
          name: "limiter",
          source:
            "0x1f8b08000000000002ffed576d6fdb3610fe9e5f714581415abc4671dc0c9092a05b970e030a74e886ed433108b444d944245223a93941e0ffbea348bd5071e22c5b370c88bfd8248f0fef1ede3d4757226f4a0a4bc9f2158de392554c5309b707809f465120b5162a2d24a9e846c8ab38d6aca24a93aa4e7a1ba5f338a6520a994cf6b52b15d1ebd3451cdfd662b34d0e5a934232caf3fedc4c309eda8133c804571a2ebffdf8c377df5fa66fbff931fdf0cbe5c777ef3ffc1a4373ba807388aea3c8192b2d9b4cc37bebfd59bd265c8b0ade22eacf3735bd80355170456f5c5ce643395996348f61294439eba78f8ec004088c83a2e843aefa251da538d59e3ed86f18cfc566c78201129a94201a5d9462d32fa8a64a557ed73a23753fc4dfbecdd6c65937cb926581252f84a2e120e98a290c3a35149ef5110724cb44c3750c5f28b6e254cec6a0e188083c5af0f206974b749667149a5a7030700e5c12cd04ef3754e20f9a6ad19d30eb691fe81ed03daaf196e8cc5bea38ed932a8eb9a5d3501f84be75475de44fdbc0fcb9f1bd9c9c46117c098b998935a705694a0d0b588b460eb7bb0df710ada84ecb69a4819f46dec54d73230492fdde304955c7d888a7926ad01b8269bd1458489b74558a2529d3aad16777f8bd08ded85a0993213b37e495730641dc2f7fd93a87abf687bf38388b06c32019b382f471ba71ab33ac9135954c637195058802f49a422d9990e6a2ba0d0414ab6a94980db9c18a405da8a5b866a809d4ac952c677ce520efa35ecb9b947145a51e277865b26fc8e83de476caf664825901c10b87d2311d6285e846722743dd5998c278ce7d399d78b66d0da17560367dd5b9f9ca16460847fdccf44e3a9f2cc00544e1a4ec7c283c623271b8031acba4c54b3ca4d131e7e0abc7f4305ba2469d7d882dd012bbc223364e268e00bb46309f59bfc209ea50bee32bd80379087dee0c704499fc7a114c6ccf86dd4e66a06d74718cba9e8a229584af68b0ab4f85a1573c2f3f694c87d468ed6fe3a6f58e5c51937870eb190693c68b61bc994ccd5cfb344b2e5d2d725b33e630e7fa146bd4145c03ee261e2ca39dcf013be17a41e2d9b6cddfe2260f838cde14c3858c81f18520294a46370e2c2c1e9fe7e8acc29b081c05e10803f507651b6ca9b7053968de509d46d9cd30c55702be5888d4344f0b2153c321aad394be4905b7ef8573388ea251ce8fe09b3a379e3bbd690feac04dc9a9c04c8dbdf65b7a971f172ec0597b523496fe411e07e3d7d6664c05e6989168856158a747aa3b09a6fd3a8439ea81e99e89d93e96f9c9ce2744bba7f1f59adc47b44b93bba2350dacabf67330a1cfe09ee839bdd6ff79f406d03d40a0c40df2e1bb3cf6effb335076f2da51663c9be300c337a7decbe0c923395c380ef16b9efc13f9b293a07f811d6c440b9b547734fdef48f5cb4ff4baa659ab3884958da40141bf35d67e4edb3f39f3a84de75264ed331ce77ea265718fd2a7f83697e6efc6b3e47f2ec9ff2bb97b3c11e1c72afb7e3938febf24e2fc39139f1f1f4f6abf8be7f6eb31d855d4c3ce7e3d38bb3dd8fe09266db0fadf130000",
          source_map: "0x",
        },
      ],
    },
  ];

  const selectedModule = sortedPackages
    .flatMap((pkg) => pkg.modules)
    .find((module) => module.name === selectedModuleName);

  if (isLoading) {
    return null;
  }

  if (error) {
    return <Error address={address} error={error} />;
  }

  const modules = data ?? [];
  if (modules.length === 0) {
    return <EmptyTabContent />;
  }

  const moduleAndFnsGroup = modules.reduce(
    (acc, module) => {
      if (module.abi === undefined) {
        return acc;
      }

      const fns = module.abi.exposed_functions.filter((fn: any) =>
        isRead ? fn.is_view : fn.is_entry,
      );
      if (fns.length === 0) {
        return acc;
      }

      const moduleName = module.abi.name;
      return {
        ...acc,
        [moduleName]: fns,
      } as Record<string, any[]>;
    },
    {} as Record<string, any[]>,
  );

  const module = modules.find((m) => m.abi?.name === selectedModuleName)?.abi;
  const fn = selectedModuleName
    ? moduleAndFnsGroup[selectedModuleName]?.find(
        (fn: any) => fn.name === selectedFnName,
      )
    : undefined;

  function getLinkToFn(moduleName: string, fnName: string) {
    // This string implicitly depends on the fact that
    // the `isRead` value is determined by the
    // pathname `view` and `run`.
    return `/account/${address}/modules/${
      isRead ? "view" : "run"
    }/${moduleName}/${fnName}`;
  }

  // Use this key to force re-mount the Form component when the fn changes,
  // so that the state of the form is reset.
  const contractFormKey = module?.name + ":" + fn?.name;
  return (
    <Grid container spacing={2}>
      <Grid item md={3} xs={12}>
        <ContractSidebar
          selectedModuleName={selectedModuleName}
          selectedFnName={selectedFnName}
          moduleAndFnsGroup={moduleAndFnsGroup}
          getLinkToFn={getLinkToFn}
        />
      </Grid>
      <Grid item md={9} xs={12}>
        <Box
          padding={4}
          bgcolor={theme.palette.mode === "dark" ? grey[800] : grey[100]}
          borderRadius={1}
        >
          {!module || !fn ? (
            <Typography>Please select a function</Typography>
          ) : isRead ? (
            <ReadContractForm module={module} fn={fn} key={contractFormKey} />
          ) : (
            <RunContractForm module={module} fn={fn} key={contractFormKey} />
          )}

          {module && fn && selectedModule && (
            <>
              <Divider sx={{margin: "24px 0"}} />
              <Code bytecode={selectedModule?.source} />
            </>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}

function ContractSidebar({
  selectedModuleName,
  selectedFnName,
  moduleAndFnsGroup,
  getLinkToFn,
}: ContractSidebarProps) {
  const theme = useTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();
  const flattedFns = useMemo(
    () =>
      Object.entries(moduleAndFnsGroup).flatMap(([moduleName, fns]) =>
        fns
          .map((fn) => ({
            moduleName,
            fnName: fn.name,
          }))
          .sort((a, b) => a.fnName[0].localeCompare(b.fnName[0])),
      ),
    [moduleAndFnsGroup],
  );

  return (
    <Box
      sx={{padding: "24px", maxHeight: "100vh", overflowY: "auto"}}
      bgcolor={theme.palette.mode === "dark" ? grey[800] : grey[100]}
      borderRadius={1}
    >
      {isWideScreen ? (
        <>
          <Typography fontSize={16} fontWeight={500} marginBottom={"24px"}>
            Select function
          </Typography>
          <Box>
            {Object.entries(moduleAndFnsGroup)
              .sort((a, b) => a[0].localeCompare(b[0]))
              .map(([moduleName, fns]) => (
                <Box key={moduleName} marginBottom={3}>
                  <Typography
                    fontSize={14}
                    fontWeight={600}
                    marginBottom={"8px"}
                  >
                    {moduleName}
                  </Typography>
                  <Box>
                    {fns.map((fn) => {
                      const selected =
                        moduleName === selectedModuleName &&
                        fn.name === selectedFnName;
                      return (
                        <SidebarItem
                          key={fn.name}
                          linkTo={getLinkToFn(moduleName, fn.name)}
                          selected={selected}
                          name={fn.name}
                          loggingInfo={{
                            eventName: "function_name_clicked",
                            value: fn.name,
                          }}
                        />
                      );
                    })}
                    <Divider sx={{marginTop: "24px"}} />
                  </Box>
                </Box>
              ))}
          </Box>
        </>
      ) : (
        <Autocomplete
          fullWidth
          options={flattedFns}
          groupBy={(option) => option.moduleName}
          getOptionLabel={(option) => option.fnName}
          renderInput={(params) => (
            <TextField {...params} label="Select a function" />
          )}
          onChange={(_, fn) => {
            fn && navigate(getLinkToFn(fn.moduleName, fn.fnName));
          }}
          value={
            selectedModuleName && selectedFnName
              ? flattedFns.find(
                  (fn) =>
                    fn.moduleName === selectedModuleName &&
                    fn.fnName === selectedFnName,
                )
              : null
          }
        />
      )}
    </Box>
  );
}

function RunContractForm({module, fn}: {module: any; fn: any}) {
  const [state] = useGlobalState();
  const connected = false;
  const [formValid, setFormValid] = useState(false);

  const fnParams = removeSignerParam(fn);

  const onSubmit: SubmitHandler<ContractFormType> = async (data) => {};

  const isFunctionSuccess = false;
  return (
    <ContractForm
      fn={fn}
      onSubmit={onSubmit}
      setFormValid={setFormValid}
      isView={false}
      result={
        connected ? (
          <Box>
            <StyledTooltip
              title="Input arguments cannot be empty."
              placement="right"
              disableHoverListener={formValid}
            >
              <span>
                <Button
                  type="submit"
                  disabled={false}
                  variant="contained"
                  sx={{width: "8rem", height: "3rem"}}
                >
                  Run
                </Button>
              </span>
            </StyledTooltip>

            {/* Has some execution result to display */}
            {
              <ExecutionResult success={isFunctionSuccess}>
                <Stack
                  direction="row"
                  gap={2}
                  pt={3}
                  justifyContent="space-between"
                >
                  <Stack>
                    {/* It's failed, display an error */}
                    {!isFunctionSuccess && (
                      <>
                        <Typography fontSize={12} fontWeight={600} mb={1}>
                          Error:
                        </Typography>
                        <Typography fontSize={12} fontWeight={400}>
                          Unknown
                        </Typography>
                      </>
                    )}

                    {/* Has a transaction, display the hash */}
                    {
                      <>
                        <Typography fontSize={12} fontWeight={600} mb={1}>
                          Transaction:
                        </Typography>
                        <Typography fontSize={12} fontWeight={400}>
                          {"transactionResponse.transactionHash"}
                        </Typography>
                      </>
                    }
                  </Stack>

                  {/* Has a transaction, display the button to view the transaction */}
                  {
                    <Button
                      variant="outlined"
                      onClick={() =>
                        window.open(
                          `/tx/${"transactionResponse.transactionHash"}`,
                          "_blank",
                        )
                      }
                      sx={{
                        height: "2rem",
                        minWidth: "unset",
                        borderRadius: "0.5rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      View Transaction
                    </Button>
                  }
                </Stack>
              </ExecutionResult>
            }
          </Box>
        ) : (
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography ml={2} fontSize={10}>
              To run you need to connect wallet first
            </Typography>
          </Box>
        )
      }
    />
  );
}

const TOOLTIP_TIME = 2000; // 2s
function ReadContractForm({module, fn}: {module: any; fn: any}) {
  const [state] = useGlobalState();
  const [result, setResult] = useState<any[]>();
  const theme = useTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [errMsg, setErrMsg] = useState<string>();
  const [inProcess, setInProcess] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false);

  const resultString =
    result
      ?.map((r) => (typeof r === "string" ? r : JSON.stringify(r, null, 2)))
      .join("\n") ?? "";
  async function copyValue() {
    await navigator.clipboard.writeText(resultString);
    setTooltipOpen(true);
    setTimeout(() => {
      setTooltipOpen(false);
    }, TOOLTIP_TIME);
  }

  const onSubmit: SubmitHandler<ContractFormType> = async (data) => {};

  return (
    <ContractForm
      fn={fn}
      onSubmit={onSubmit}
      setFormValid={setFormValid}
      isView={true}
      result={
        <Box>
          <StyledTooltip
            title="Input arguments cannot be empty."
            disableHoverListener={formValid}
            placement="right"
          >
            <span>
              <Button
                type="submit"
                disabled={inProcess || !formValid}
                variant="contained"
                sx={{width: "8rem", height: "3rem"}}
              >
                {inProcess ? (
                  <CircularProgress size={30}></CircularProgress>
                ) : (
                  "View"
                )}
              </Button>
            </span>
          </StyledTooltip>
          {!inProcess && (errMsg || result) && (
            <>
              <Divider sx={{margin: "24px 0"}} />
              <Stack
                direction={isWideScreen ? "row" : "column"}
                gap={2}
                mt={2}
                justifyContent="space-between"
              >
                <Stack>
                  <Typography fontSize={12} fontWeight={400} pl={1} pt="6px">
                    {errMsg ? "Error: " + errMsg : resultString}
                  </Typography>
                </Stack>

                {!errMsg && (
                  <StyledTooltip
                    title="Value copied"
                    placement="right"
                    open={tooltipOpen}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                  >
                    <Button
                      sx={{
                        height: "2rem",
                        minWidth: "unset",
                        width: "fit-content",
                      }}
                      onClick={copyValue}
                    >
                      <ContentCopy style={{height: "1rem", width: "1.25rem"}} />
                      <Typography
                        marginLeft={1}
                        fontSize={12}
                        sx={{
                          whiteSpace: "nowrap",
                        }}
                      >
                        Copy value
                      </Typography>
                    </Button>
                  </StyledTooltip>
                )}
              </Stack>
            </>
          )}
        </Box>
      }
    />
  );
}

function ExecutionResult({
  success,
  children,
}: {
  success: boolean;
  children: React.ReactNode;
}) {
  const theme = useTheme();
  return (
    <Box
      padding={3}
      borderRadius={1}
      bgcolor={theme.palette.mode === "dark" ? grey[700] : grey[200]}
      mt={4}
    >
      <Alert
        severity={success ? "success" : "error"}
        sx={{width: "fit-content", padding: "0rem 1rem"}}
      >
        <Typography fontSize={12}>
          {success ? "Function successfully executed" : "Function failed"}
        </Typography>
      </Alert>
      <Box>{children}</Box>
    </Box>
  );
}

function ContractForm({
  fn,
  onSubmit,
  setFormValid,
  result,
  isView,
}: {
  fn: any;
  onSubmit: SubmitHandler<ContractFormType>;
  setFormValid: (valid: boolean) => void;
  result: ReactNode;
  isView: boolean;
}) {
  const account = {address: undefined};
  const {
    handleSubmit,
    control,
    formState: {isValid},
  } = useForm<ContractFormType>({
    mode: "all",
    defaultValues: {
      typeArgs: [],
      args: [],
    },
  });

  const fnParams = removeSignerParam(fn);
  const hasSigner = fnParams.length !== fn.params.length;

  useEffect(() => {
    setFormValid(isValid);
  }, [isValid, setFormValid]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Stack spacing={4}>
          <Typography fontSize={14} fontWeight={600}>
            {fn.name}
            {fn.generic_type_params.length > 0 &&
              "<" +
                [...Array(fn.generic_type_params.length)].map(
                  (_, i) => `T${i}`,
                ) +
                ">"}
            ({fn.params.join(", ")})
          </Typography>
          <Stack spacing={4}>
            {[...Array(fn.generic_type_params.length)].map((_, i) => (
              <Controller
                key={i}
                name={`typeArgs.${i}`}
                control={control}
                rules={{required: true}}
                render={({field: {onChange, value}}) => (
                  <TextField
                    onChange={onChange}
                    value={value ?? ""}
                    label={`T${i}`}
                    fullWidth
                  />
                )}
              />
            ))}
            {hasSigner &&
              (account ? (
                <TextField
                  key="args-signer"
                  value={account.address}
                  label="signer"
                  disabled
                  fullWidth
                />
              ) : (
                <TextField label="signer" disabled fullWidth />
              ))}
            {fnParams.map((param: any, i: number) => {
              // TODO: Need a nice way to differentiate between option and empty string
              const isOption = param.startsWith("0x1::option::Option");
              return (
                <Controller
                  key={`args-${i}`}
                  name={`args.${i}`}
                  control={control}
                  rules={{required: !isOption}}
                  render={({field: {onChange, value}}) => (
                    <TextField
                      onChange={onChange}
                      value={isOption ? value : value ?? ""}
                      label={`arg${i}: ${param}`}
                      fullWidth
                    />
                  )}
                />
              );
            })}
          </Stack>
          {isView && (
            <Stack spacing={4}>
              <Controller
                key={"ledgerVersion"}
                name={"ledgerVersion"}
                control={control}
                rules={{required: false}}
                render={({field: {onChange, value}}) => (
                  <TextField
                    onChange={onChange}
                    value={value}
                    label={"ledgerVersion: defaults to current version"}
                    fullWidth
                  />
                )}
              />
            </Stack>
          )}
          {result}
        </Stack>
      </Box>
    </form>
  );
}

function removeSignerParam(fn: any) {
  return fn.params.filter((p: any) => p !== "signer" && p !== "&signer");
}

export default Contract;
