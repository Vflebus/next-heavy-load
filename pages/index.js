import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const array = []
  for (let i = 0; i <= 10000; i++) {
    array.push({
      id: i,
      name: 'data ' + i
    })
  }
  return (
    <>
      <div>
        <h1 className='font'>Font test</h1>
        <Image src="https://edmullen.net/test/rc.jpg" alt="" width={720} height={160} />
        <Image src="https://effigis.com/wp-content/uploads/2015/02/Airbus_Pleiades_50cm_8bit_RGB_Yogyakarta.jpg" alt="" width={720} height={160} />
        <Image src="https://effigis.com/wp-content/uploads/2015/02/DigitalGlobe_WorldView2_50cm_8bit_Pansharpened_RGB_DRA_Rome_Italy_2009DEC10_8bits_sub_r_1.jpg" alt="" width={720} height={160} />
        <Image src="https://effigis.com/wp-content/uploads/2015/02/DigitalGlobe_WorldView1_50cm_8bit_BW_DRA_Bangkok_Thailand_2009JAN06_8bits_sub_r_1.jpg" alt="" width={720} height={160} />
        <Image src="https://effigis.com/wp-content/themes/effigis_2014/img/GeoEye_GeoEye1_50cm_8bit_RGB_DRA_Mining_2009FEB14_8bits_sub_r_15.jpg" alt="" width={720} height={160} />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum diam vel odio fringilla, id vestibulum purus efficitur. Nam luctus, arcu at tincidunt lacinia, lorem ipsum placerat ex, ut pulvinar enim justo a lacus. In blandit mi dui, sit amet accumsan nunc egestas ut. Nullam nec luctus augue. Etiam imperdiet tristique suscipit. Nulla viverra, elit non fermentum dignissim, metus leo vestibulum velit, vel vestibulum urna justo vitae tellus. In nisl dui, viverra in malesuada non, vehicula nec augue. Phasellus lorem orci, pulvinar vitae mauris at, porttitor euismod dui.

        Curabitur ac nisl commodo, tristique tortor sed, vehicula enim. In pellentesque, nisi vel porttitor tempor, lacus neque tincidunt elit, ac cursus sapien sapien sit amet ante. Pellentesque et faucibus nulla, nec dictum metus. Aenean tempor nunc nec neque rhoncus, eu accumsan lacus pharetra. Praesent vitae quam et ex faucibus consectetur eu ut arcu. Ut eleifend massa quis velit dignissim, at pellentesque nisl pulvinar. Etiam non dolor lectus.

        Ut lacinia pellentesque augue, non pulvinar dui egestas non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris egestas tortor iaculis elementum maximus. Proin viverra ipsum ut interdum tincidunt. Donec lacinia turpis ut ante ultrices mollis. Donec consectetur accumsan felis, quis pharetra neque elementum ut. Duis ac ipsum egestas, convallis nisl in, mattis tortor. Fusce quis neque quis lectus suscipit mattis non et lorem. Vivamus at felis suscipit, ultrices leo non, pulvinar leo. Cras elementum ipsum a turpis gravida sagittis. Donec eu porttitor magna. Aenean non eleifend tellus. Sed in nibh quam.

        Donec porttitor luctus nibh, in euismod leo suscipit sit amet. Cras feugiat ipsum vitae augue vestibulum vulputate. Morbi hendrerit est urna, sit amet tincidunt eros eleifend et. Donec sodales laoreet sem eu aliquam. In laoreet orci placerat magna fringilla imperdiet. Cras vestibulum est id fringilla congue. Nulla venenatis et tellus vel rhoncus. Nullam tincidunt urna et mi mollis, nec porta dui congue. Morbi fermentum imperdiet felis, aliquet efficitur risus pulvinar sed. Phasellus dui lectus, condimentum blandit vestibulum id, mollis a purus. Etiam ut facilisis libero.

        Mauris quis porta nibh. Etiam eu maximus mi. In iaculis nisi quis turpis tincidunt pharetra. Proin rhoncus lectus at rhoncus fermentum. Nulla ut sem a magna tempor egestas ut quis nibh. Vestibulum lacinia ex non pharetra tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus quam quam, faucibus sed mi vitae, mattis aliquet quam.

        Suspendisse ut semper lorem. Praesent iaculis gravida urna ut luctus. Ut ac erat id lectus mattis dictum. Quisque porta a sapien id efficitur. Nam nec ante vulputate, rutrum odio eu, tempus tortor. In non cursus odio, quis auctor quam. Integer iaculis nulla sed turpis interdum, at tincidunt ante ultrices. In sed ligula quis augue placerat lacinia. Quisque a tempus odio. Phasellus facilisis a urna non aliquet. Vestibulum et fringilla eros, id interdum lacus. Nunc mauris est, placerat in pulvinar non, accumsan sed arcu. Vestibulum sed leo nunc. Nulla a vulputate purus.

        Praesent id porta erat. Nulla facilisi. Nulla blandit accumsan diam, nec fringilla sapien rutrum sollicitudin. Nunc nisl est, elementum in ultrices vitae, placerat ac dolor. Donec bibendum velit lorem, at posuere erat blandit vitae. Curabitur mollis, est sed hendrerit rutrum, magna urna mollis nisl, ac auctor tortor dui et metus. Aenean felis enim, imperdiet ut diam eleifend, sodales vehicula magna. Mauris blandit ligula massa, eget iaculis odio sodales et. Maecenas magna orci, tristique ac tellus vel, congue maximus ipsum. Sed aliquet arcu id sagittis hendrerit. Fusce a arcu quis sapien suscipit pellentesque vitae vitae leo. Duis venenatis metus neque, fermentum finibus diam tempor ut.

        Etiam et mi ante. Sed non dolor cursus, convallis purus fringilla, sollicitudin leo. Donec ac facilisis mauris. Nullam iaculis est quis elementum hendrerit. Proin id velit nulla. Nullam molestie libero nec fermentum varius. Aliquam placerat facilisis vehicula. Phasellus a dolor volutpat, posuere risus at, hendrerit velit. Etiam porttitor et massa sed varius. Integer tristique dui at ultrices ultrices. Nunc eget sapien vel arcu consectetur sodales et sit amet nunc.

        Curabitur dapibus aliquet nisi et mattis. Phasellus ultrices est in semper porta. Maecenas eget sapien magna. Vivamus facilisis sapien erat, sit amet ullamcorper neque efficitur at. Donec blandit purus mi, quis scelerisque leo rhoncus sagittis. Quisque commodo massa sed nisl bibendum, ut placerat nunc consequat. Etiam sed viverra sem. Phasellus dolor ex, rutrum at pretium vel, eleifend vel dolor. Ut turpis risus, tincidunt nec ipsum nec, ultricies malesuada dui. Integer ut luctus nulla.

        Integer suscipit vel ipsum nec euismod. Duis fermentum nibh id lorem aliquam pulvinar. Integer tincidunt metus quam, a scelerisque urna mollis quis. Etiam aliquam ac arcu non pretium. Phasellus varius tempor felis a lacinia. Praesent et eros eros. Sed in auctor neque, quis iaculis purus. Quisque massa elit, mollis eu fermentum a, porta quis purus. Cras lacinia eget ante ut accumsan. Curabitur feugiat neque ut tellus scelerisque tincidunt. Duis eget scelerisque sem. Aliquam vel congue nibh, quis rhoncus quam. Cras feugiat lorem sed nisi elementum, et ullamcorper ante aliquam. Mauris vitae mollis orci, ut scelerisque orci. Nam a ex tincidunt, luctus velit id, fringilla sapien. Nunc faucibus tortor justo, et ultricies lacus hendrerit id.

        Donec a urna orci. Nullam vel condimentum nulla, sit amet ullamcorper mi. Vivamus commodo, nibh eget ullamcorper aliquet, diam ipsum suscipit turpis, vel blandit justo purus nec neque. Vivamus faucibus arcu sodales dui dapibus, a mattis ipsum blandit. Ut id ante nec erat eleifend convallis quis non metus. Curabitur molestie felis nec felis vehicula, eget volutpat justo suscipit. Nunc velit nulla, vulputate ut lorem eget, malesuada convallis justo.

        Proin ac semper lectus. Maecenas quis eros pellentesque, commodo lorem vitae, finibus nibh. Integer in egestas risus. Pellentesque tincidunt pharetra justo et accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et aliquam arcu, at iaculis lacus. Mauris erat lacus, porttitor ut auctor vitae, consectetur eget mauris. Donec nec odio malesuada, auctor nisl ut, lobortis arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque et lacinia massa. Nullam vel felis tortor. Maecenas iaculis metus massa, id malesuada turpis hendrerit id. Donec sem purus, blandit nec purus quis, rutrum semper sem. Donec in odio pulvinar ipsum lobortis ornare eget quis sapien.

        Fusce sodales, ligula eget porta faucibus, dolor purus gravida nulla, in venenatis neque urna sit amet arcu. In tincidunt iaculis elit in consectetur. Aliquam tortor turpis, sodales id sollicitudin in, aliquet eget nunc. Nunc porta, odio sit amet pretium elementum, odio purus varius neque, sit amet blandit lacus est a turpis. Maecenas vestibulum leo nec hendrerit condimentum. Morbi sit amet est et sem molestie tristique. Maecenas mi ligula, faucibus eu felis et, ultricies fermentum justo. Fusce at facilisis metus, eget posuere enim.

        Etiam ullamcorper imperdiet nibh, ut sollicitudin sapien molestie vel. Mauris ut tortor iaculis, hendrerit nunc sed, interdum sapien. Fusce posuere risus eu ex hendrerit, ut volutpat dui tempor. Duis fringilla ex sit amet quam volutpat convallis. Sed non quam vulputate, iaculis mi ut, porttitor ante. Nam eros odio, rhoncus eget odio sit amet, pulvinar rutrum arcu. Cras ac elit volutpat, cursus lacus eget, rhoncus leo. Morbi non felis erat. Nullam et diam et lacus porttitor semper. Phasellus sit amet maximus magna, nec dignissim neque.

        Phasellus sed lectus lacinia, faucibus nisl viverra, sodales orci. Cras ut elit maximus, fermentum dolor at, pellentesque lacus. Aenean interdum tortor vel ex tincidunt tincidunt. Integer sit amet erat in diam porttitor consectetur id vulputate nisl. Sed nec est tristique, semper nunc a, hendrerit odio. Etiam cursus vulputate posuere. Curabitur nisi turpis, convallis ut egestas sed, sagittis et massa. Donec neque nisi, consectetur efficitur porta quis, tristique sed purus. Donec nisi lacus, consequat quis arcu nec, venenatis cursus erat. Morbi massa velit, posuere id lectus id, dignissim malesuada leo. Etiam sit amet tortor in dolor finibus iaculis nec quis felis. Proin pharetra tristique dolor, eget molestie dui maximus at. Donec ac maximus erat. Nam dignissim vel enim sed placerat. Maecenas sed dui ac enim varius sodales.

        Nunc volutpat, mi eu fermentum facilisis, justo neque facilisis orci, et varius elit ligula id ipsum. Aliquam ultrices elementum ligula at consectetur. Duis lacinia arcu eu nunc accumsan, id venenatis odio imperdiet. Aliquam quis tincidunt arcu, eget eleifend nisi. Aliquam laoreet vestibulum tortor sed fermentum. Vivamus vel tellus laoreet, malesuada libero in, tincidunt neque. Fusce augue quam, accumsan vel tellus nec, vulputate maximus felis. Praesent ac orci urna. Pellentesque nunc tellus, ultricies eu viverra vel, ultrices a diam.

        Sed congue metus nisl, eget varius arcu placerat eu. Nunc sollicitudin magna ut varius euismod. Curabitur molestie eros non sem malesuada, ac scelerisque metus ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eleifend eu nisl vitae varius. Nunc at neque non velit convallis rutrum. Cras egestas sodales interdum. Curabitur nec tempus mi. Maecenas vel felis sit amet mauris porta dictum eget sit amet risus. Nulla facilisi. Suspendisse eu placerat erat, at accumsan dui. Maecenas scelerisque, orci vel cursus porttitor, elit lorem scelerisque ante, et consectetur augue ante sed ipsum.

        Sed gravida, quam sit amet sagittis faucibus, nunc elit lobortis velit, et aliquam mauris ex ut diam. Aliquam dignissim mi sit amet turpis rutrum lobortis. Quisque eu quam viverra, lacinia turpis ac, venenatis purus. Ut dapibus metus erat, in molestie ante sodales a. Aenean viverra nisi est, et tristique nunc aliquam eu. Curabitur quis libero massa. Nulla et nibh eget nibh luctus facilisis. Aliquam consequat, odio ut tincidunt egestas, nisi urna convallis dui, sed accumsan ipsum libero sed velit. Nam a mauris in dui molestie gravida vitae non nulla. Nullam auctor augue et enim rutrum mattis.

        Nunc et posuere ante. Integer facilisis, sapien a feugiat vehicula, felis lorem accumsan turpis, eget varius erat leo eget nisl. Mauris sed leo ultrices, luctus velit vitae, ornare nunc. Sed at rutrum sem, at mollis ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer iaculis metus elit, eu vulputate arcu bibendum ut. Pellentesque sapien ligula, faucibus id purus non, aliquet posuere nisi. Phasellus efficitur dui ut lacus placerat, a semper risus tincidunt. Integer sed leo nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut feugiat placerat cursus. Duis erat odio, eleifend eget justo at, feugiat vehicula odio. Nam auctor ante id rhoncus aliquet. Fusce aliquam aliquet nisl feugiat molestie.

        Sed tincidunt dapibus suscipit. Nam vitae velit et eros aliquet suscipit quis finibus magna. Nullam quis malesuada odio. Integer interdum eros non nunc iaculis egestas. Praesent accumsan gravida erat sit amet dictum. Quisque imperdiet quam quam, vitae tincidunt libero tempus sed. Integer aliquam felis ac vestibulum mollis. In nec nisl ut nunc sagittis sodales. Ut euismod mauris ipsum, non dapibus eros luctus non.
      </p>
      <ul>
        {array.map(row => {
          return (
            <li key={row.id}>{row.name}</li>
          )
        })}
      </ul>
    </>
  )
}
