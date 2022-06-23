import React from 'react'
import { NavLink } from 'react-router-dom';

// Component
import OsisLayout from '../../Component/Osis/OsisLayout'
import OsisNav from '../../Component/Osis/OsisNav'

// Image
import Osis_Image from '../../Image/Osis/OSIS_Pelantikan.jpeg'
import Osis1 from '../../Image/Osis/Osis1.png'
import Osis2 from '../../Image/Osis/Osis2.png'
import Osis3 from '../../Image/Osis/Osis3.png'


const Osis = () => {
  return (
    <div>
      <div id='osis' className='mx-auto container'>
      <OsisLayout 
      title="Tentang OSIS"
      desc="OSIS SMAK 1 merupakan satu-satunya organisasi resmi di SMAK 1 PENABUR Jakarta. Sejak awal dibentuk, kami selalu dituntut untuk membuat salah satu sekolah terbaik di Indonesia menjadi lebih baik lagi. Dengan satu tim, satu visi, dan satu misi, OSIS SMAK 1 mengarah ke arah yang benar dengan segudang prestasi termasuk menyelenggarakan ajang SMAK ONE CUP setiap tahunnya. Jalan yang akan dilewati bebas dari hambatan untuk OSIS SMAK 1 terus melebarkan sayapnya."
      img={Osis_Image}
      visi1 ="Menjadikan SMAK 1 PENABUR Jakarta sebagai wadah bagi siswa-siswi untuk mengembangkan potensi dan prestasi, baik secara akademik maupun non-akademik yang berlandaskan pada iman, ilmu, pelayanan dan menjadikan OSIS sebagai sarana untuk menampung inspirasi, aspirasi, serta kreasi siswa."
      visi2 ="Meningkatkan partisipasi siswa-siswi SMAK 1 PENABUR Jakarta dalam berbagai program yang edukatif, kreatif dan inovatif, serta dapat menjalar masyarakat luar, sehingga siswa-siswi SMAK 1 dapat menjadi berkat, baik bagi internal maupun eksternal."
      misi1 ="Memberikan kesempatan seluas-luasnya bagi seluruh peserta didik untuk melakukan pengembangan bakat dan minat melalui program-program yang diadakan OSIS."
      misi2 ="Membuka ruang terbuka bagi peserta didik SMAK 1 untuk bergerak dan berkontribusi secara konkret dalam pelestarian lingkungan hidup."
      misi3 ="Membangun kesadaran peserta didik SMAK 1 untuk berpartisipasi dalam kegiatan-kegiatan yang berorientasi kepada masyarakat, sehingga dapat memberikan dampak yang lebih luas."
      misi4 ="Mengoptimalisasikan kualitas SDM SMAK 1 melalui restorasi organisasi yang disruptif serta pengembangan program yang sudah ada dengan evaluasi secara berkala."
      />
      </div>

      <div id='bidang' className='bg-dark-blue w-full h-auto text-white py-14 mt-16'>
        <div className='container mx-auto'>
          <div className='text-center px-60'>
            <h1 className='text-5xl font-semibold'>
              Bidang - Bidang
            </h1>
            <div>
              <div className="hover-zoom">
              <NavLink to="bph" >
                <OsisNav
                  img={Osis1}
                  Title="Badan Pengurus Harian"
                />
              </NavLink>
              </div>
              <div className="hover-zoom">
              <NavLink to="bidang1">
                <OsisNav
                  img={Osis2}
                  Title="Bidang 1"
                  desc ="Bidang Pembinaan Keimanan dan Ketakwaan Terhadap Tuhan Yang Maha Esa"
                  />
              </NavLink>
              </div>
              <div className="hover-zoom">
              <NavLink to="bidang2">
                <OsisNav
                  img={Osis3}
                  Title="Bidang 2"
                  desc ="Bidang Pembinaan Budi Pekerti Luhur dan Akhlak Mulia"
                  />
              </NavLink>
              </div>
              <div className="hover-zoom">
              <NavLink to="bidang3">
                <OsisNav
                  img={Osis3}
                  Title="Bidang 3"
                  desc ="Bidang Pembinaan Kepribadian Unggul, Wawasan Kebangsaan, dan Bela Negara"
                  />
              </NavLink>
              </div>
              <div className="hover-zoom">
              <NavLink to="bidang4">
                <OsisNav
                  img={Osis3}
                  Title="Bidang 4"
                  desc ="Bidang Pembinaan Prestasi Akademik dan Ilmu Pengetahuan dan Teknologi (IPTEK)"
                  />
              </NavLink>
              </div>
              <div className="hover-zoom">
              <NavLink to="bidang5">
                <OsisNav
                  img={Osis3}
                  Title="Bidang 5"
                  desc ="Bidang Pembinaan Demokrasi, Hak Asasi Manusia, Pendidikan Politik, Lingkungan Hidup, Kepekaan, dan Toleransi Sosial Dalam Konteks Masyarakat Plural"
                  />
              </NavLink>
              </div>
              <div className="hover-zoom">
              <NavLink to="bidang6">
                <OsisNav
                  img={Osis3}
                  Title="Bidang 6"
                  desc ="Bidang Kreativitas, Keterampilan, dan Kewirausahaan"
                  />
              </NavLink>
              </div>
              <div className="hover-zoom">
              <NavLink to="bidang7">
                <OsisNav
                  img={Osis3}
                  Title="Bidang 7"
                  desc ="Bidang Pembinaan Kualitas Olahraga, Jasmani, Kesehatan, dan Gizi Berbasis Sumber Gizi Terdiversifikasi"
                  />
              </NavLink>
              </div>
              <div className="hover-zoom">
              <NavLink to="bidang8">
                <OsisNav
                  img={Osis3}
                  Title="Bidang 8"
                  desc ="Bidang Pembinaan Sastra dan Budaya"
                  />
              </NavLink>
              </div>
              <div className="hover-zoom">
              <NavLink to="bidang9">
                <OsisNav
                  img={Osis3}
                  Title="Bidang 9"
                  desc ="Bidang Pembinaan Teknologi Informasi dan Komunikasi (TIK)"
                  />
              </NavLink>
              </div>
              <div className="hover-zoom">
              <NavLink to="bidang10">
                <OsisNav
                  img={Osis3}
                  Title="Bidang 10"
                  desc ="Bidang Pembinaan Komunikasi dalam Bahasa Inggris"
                  />
              </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Osis