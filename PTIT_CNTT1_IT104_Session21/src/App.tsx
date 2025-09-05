import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-red-400 text-[70px]">Day la tieu de 1</h1>

      <div className="size-[200px] rounded-[8px] bg-red-500 mt-8"></div>

      <div className="flex space-x-[8px] mt-8">
        <div className="size-[200px] bg-[#3b82f6] rounded-full"></div>
        <div className="size-[200px] bg-[#ef4444] rounded-full"></div>
        <div className="size-[200px] bg-[#22c55e] rounded-full"></div>
      </div>

      <div className="rounded-3xl text-red bg-[#0ea5e9] hover:bg-[#0369a1] h-[40px] w-[160px] text-center mt-4">
        Submit
      </div>
{/* 
ptu được đặt relative -> vẫn chiếm chỗ trong layout bình thường.
có thể dịch chuyển nó bằng các thuộc tính: top, left, right, bottom.
Nếu bạn không dịch chuyển thì nó giống hệt như static (mặc định).
khi có một phần tử con absolute -> ptu relative sẽ trở thành mốc tham chiếu */}

{/* ptu được đặt absolute -> thoát khỏi luồng bình thường (không chiếm chỗ nữa).
định vị theo phần tử cha gần nhất 
Nếu không có cha -> sẽ bám vào viewport (toàn bộ màn hình). */}
      
      <div className="relative w-60 h-40 bg-sky-200 rounded-[5px] p-4 mt-8 ml-3">
        <h2 className="text-black">Relative parent</h2>

        <div className="absolute bottom-3 bg-sky-500 text-white px-3 py-1 rounded-[5px] shadow-md">
          Absolute child
        </div>
      </div>

      <div className="overflow-auto border-1 p-[15px] mt-8 ml-3 h-[200px] w-[500px]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          beatae maiores modi dignissimos recusandae ad iure quisquam illum
          placeat, debitis perspiciatis, at aspernatur quam ratione nulla quidem
          natus repudiandae. Perferendis. Harum voluptas eos aperiam nostrum ea
          aliquid consequuntur nam sit officia. Maxime qui earum corporis amet
          autem! Fugit quisquam adipisci cupiditate quo quam odit quos minus,
          quas sunt, dignissimos eos? Pariatur, praesentium labore, aspernatur
          culpa ratione ex tempora incidunt nobis temporibus vel qui nostrum
          libero eaque ea cumque reiciendis quae ducimus est placeat
          perspiciatis! Voluptate dicta alias adipisci perspiciatis minus! Amet
          consectetur praesentium quas quibusdam sapiente beatae! Non alias
          numquam harum architecto repudiandae fuga voluptates blanditiis maxime
          sunt vel eligendi laudantium placeat odit id officia facere cum
          impedit, corporis veniam! Aliquid repellat officia suscipit, assumenda
          excepturi quos deserunt doloremque, officiis dolorum porro possimus
          consequuntur similique beatae. Totam beatae aspernatur, cum dolores,
          asperiores reiciendis repudiandae temporibus, quos quae deserunt quis
          facere. Ullam distinctio dolore adipisci? Adipisci debitis, doloribus
          id perspiciatis quis quae facilis! Consequatur corporis aliquid
          eveniet, ad voluptatibus autem aut porro laboriosam nisi dolores
          maiores accusamus distinctio assumenda perferendis facilis. Earum
          molestias illo sed quae iste ex mollitia veniam vero nemo provident,
          tempora rem placeat cumque minus impedit dolorum corrupti recusandae!
          Magnam voluptatem voluptates nemo ducimus omnis suscipit voluptatibus
          sint. Saepe voluptatibus eaque sunt quis! Ipsam quia incidunt corrupti
          consectetur natus deserunt praesentium voluptate, dolor expedita
          temporibus harum laudantium! Doloribus officiis corporis officia
          facilis fugit est, harum incidunt culpa accusamus? Nostrum enim
          asperiores soluta dolore, perferendis ab odio dolorem maiores eligendi
          hic, saepe et omnis voluptate iusto consequuntur, ipsum sint rem
          exercitationem incidunt non expedita ducimus? Quaerat dolor beatae
          alias? Eligendi obcaecati modi consequatur deserunt autem, et officia
          vel dolorem enim minus natus ab officiis veritatis, tempora
          laboriosam, accusamus at reiciendis beatae cumque sed necessitatibus
          architecto deleniti. Deleniti, quisquam quae!
        </p>
      </div>

{/* 
basis: kích thước khởi đầu của item trong flex
chia layout dua tren ko gian con thua hay thieu */}

{/* 
*flex-nowrap
mặc định -> nằm trên 1 hàng/cot, không được xuống dòng, kể cả khi container bị chật.
-> ptu sẽ thu nhỏ lại để nhét vừa một hàng, hoặc tràn ra ngoài nếu không thể co thêm. 

*flex-wrap
ptu tự động xuống dòng khi không còn đủ chỗ trong container.
*/}

      <div className="flex flex-wrap gap-3 mt-6 mb-8">
  <div className="basis-[30%] bg-purple-500 text-white text-center py-6 rounded-[10px]">1</div>
  <div className="basis-[30%] bg-purple-500 text-white text-center py-6 rounded-[10px]">2</div>
  <div className="basis-[30%] bg-purple-500 text-white text-center py-6 rounded-[10px]">3</div>
  <div className="basis-[30%] bg-purple-500 text-white text-center py-6 rounded-[10px]">4</div>
  <div className="basis-[30%] bg-purple-500 text-white text-center py-6 rounded-[10px]">5</div>
  <div className="basis-[30%] bg-purple-500 text-white text-center py-6 rounded-[10px]">6</div>
  <div className="basis-[30%] bg-purple-500 text-white text-center py-6 rounded-[10px]">7</div>
  <div className="basis-[30%] bg-purple-500 text-white text-center py-6 rounded-[10px]">8</div>
  <div className="basis-[30%] bg-purple-500 text-white text-center py-6 rounded-[10px]">9</div>
</div>

<h2>BAI 8</h2>
{/* phan tu nam ben trai */}
<div className="flex justify-start gap-3">
   <div className="p-3 bg-blue-500 text-white rounded-[5px]">01</div>
  <div className="p-3 bg-blue-500 text-white rounded-[5px]">02</div>
  <div className="p-3 bg-blue-500 text-white rounded-[5px]">03</div></div>

{/* phan tu nam ben phai */}
<div className="flex justify-end gap-3 p-3">
   <div className="p-3 bg-blue-500 text-white rounded-[5px]">01</div>
  <div className="p-3 bg-blue-500 text-white rounded-[5px]">02</div>
  <div className="p-3 bg-blue-500 text-white rounded-[5px]">03</div>
  </div>

{/* phan tu nam giua */}
<div className="flex justify-center gap-3 p-3">
  <div className="p-3 bg-blue-500 text-white rounded-[5px]">01</div>
  <div className="p-3 bg-blue-500 text-white rounded-[5px]">02</div>
  <div className="p-3 bg-blue-500 text-white rounded-[5px]">03</div>
</div>

{/* phan tu nam gian ra 2 ben
gian cach deu, 2 ptu ngoai cung sat mep, ko co khoang trong ngoai cung
 */}

<div className="flex justify-between p-3">
  <div className="p-3 bg-blue-500 text-white rounded-[5px]">01</div>
  <div className="p-3 bg-blue-500 text-white rounded-[5px]">02</div>
  <div className="p-3 bg-blue-500 text-white rounded-[5px]">03</div>
  </div>

{/* phan tu nam gian deu 2 ben
cac ptu gian deu, co khoang trong ngoai cung
khoang ngoai cung bang 1/2 khoang cach giua cac ptu
 */}
<div className="flex justify-around p-3">
  <div className="p-3 bg-blue-500 text-white rounded-[5px]">01</div>
  <div className="p-3 bg-blue-500 text-white rounded-[5px]">02</div>
  <div className="p-3 bg-blue-500 text-white rounded-[5px]">03</div>
  </div>

{/* phan tu nam giua deu
cac ptu cach deu nhau, ke ca 2 ben le, tat ca khoang cach bang nhau hoan toan
 */}
<div className="flex justify-evenly p-3">
   <div className="p-3 bg-blue-500 text-white rounded-[5px]">01</div>
  <div className="p-3 bg-blue-500 text-white rounded-[5px]">02</div>
  <div className="p-3 bg-blue-500 text-white rounded-[5px]">03</div></div>





    </>
  );
}

export default App;
