import React from 'react'
import ContentHeaderImage from '../../Component/Content/ContentHeaderImage'

import gedung from "../../Image/Fasilitas/GEDUNG SEKOLAH.webp"
import aula from "../../Image/Fasilitas/AULA.webp"
import audittari from "../../Image/Fasilitas/AUDITORIUM SENI TARI.webp"
import auditvokal from "../../Image/Fasilitas/AUDITORIUM SENI VOKAL.webp"
import kantin from "../../Image/Fasilitas/KANTIN.webp"
import kelas from "../../Image/Fasilitas/RUANG KELAS.webp"
import labb from "../../Image/Fasilitas/LAB BIOLOGI.webp"
import labe from "../../Image/Fasilitas/LAB INGGRIS.webp"
import labf from "../../Image/Fasilitas/LAB FISIKA.webp"
import labkim from "../../Image/Fasilitas/LAB KIMIA.webp"
import labkomp from "../../Image/Fasilitas/LAB KOMPUTER.webp"
import lap from "../../Image/Fasilitas/LAPANGAN SMAK 1.webp"
import lift from "../../Image/Fasilitas/LIFT.webp"
import lobi from "../../Image/Fasilitas/LOBBY.webp"
import musik from "../../Image/Fasilitas/RUANG MUSIK.webp"
import bk from "../../Image/Fasilitas/RUANG BK.webp"
import guru from "../../Image/Fasilitas/RUANG GURU.webp"
import tu from "../../Image/Fasilitas/RUANG TU.webp"
import kepsek from "../../Image/Fasilitas/RUANG KEPSEK.webp"
import park from "../../Image/Fasilitas/PARKIRAN.webp"
import perpus from "../../Image/Fasilitas/PERPUSTAKAAN.webp"
import radio from "../../Image/Fasilitas/Ruang Radio.webp"
import top from "../../Image/Fasilitas/TOILET PRIA.webp"
import tow from "../../Image/Fasilitas/TOILET WANITA.webp"
import UKS from "../../Image/Fasilitas/UKS.webp"

const Fasilitas = () => {
    return(
        <div className='container mx-auto'>
            <ContentHeaderImage
                    title = 'Fasilitas'
            />
            <br />
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-9 mt-4 place-items-center lg:mx-28 xl:mx-8">
                <div>
                    <img src={gedung} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="Gedung Sekolah"/>
                    <p className="justify-center text-center p-2">Gedung Sekolah</p>
                </div>
                <div>
                    <img src={aula} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="Aula"/>
                    <p className="justify-center text-center p-2">Aula</p>
                </div>
                <div>
                    <img src={kantin} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="Kantin" />
                    <p className="justify-center text-center p-2">Kantin</p>
                </div>
                <div>
                    <img src={kelas} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="Kelas" />
                    <p className="justify-center text-center p-2">Kelas</p>
                </div>
                <div>
                    <img src={labb} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="lab bio" />
                    <p className="justify-center text-center p-2">Lab Biologi</p>
                </div>
                <div>
                    <img src={labf} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="lab fisika" />
                    <p className="justify-center text-center p-2">Lab Fisika</p>
                </div>
                <div>
                    <img src={labkim} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="lab kimia" />
                    <p className="justify-center text-center p-2">Lab Kimia</p>
                </div>
                <div>
                    <img src={labkomp} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="lab komp" />
                    <p className="justify-center text-center p-2">Lab Komputer</p>
                </div>
                <div>
                    <img src={labe} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="lab ing" />
                    <p className="justify-center text-center p-2">Lab Inggris</p>
                </div>
                <div>
                    <img src={lobi} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="lobby"/>
                    <p className="justify-center text-center p-2">Lobi</p>
                </div>
                <div>
                    <img src={lift} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="lift"/>
                    <p className="justify-center text-center p-2">Lift</p>
                </div>
                <div>
                    <img src={lap} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="lapangan"/>
                    <p className="justify-center text-center p-2">Lapangan</p>
                </div>
                <div>
                    <img src={park} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="taman" />
                    <p className="justify-center text-center p-2">Parkiran</p>
                </div>
                <div>
                    <img src={audittari} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="auditorium tari" />
                    <p className="justify-center text-center p-2">Auditorium Seni Tari</p>
                </div>
                <div>
                    <img src={auditvokal} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="auditorium vokal" />
                    <p className="justify-center text-center p-2">Auditorium Seni Vokal</p>
                </div>
                <div>
                    <img src={musik} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="musik" />
                    <p className="justify-center text-center p-2">Ruang Musik</p>
                </div>
                <div>
                    <img src={guru} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="ruang guru" />
                    <p className="justify-center text-center p-2">Ruang Guru</p>
                </div>
                <div>
                    <img src={tu} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="ruang tu" />
                    <p className="justify-center text-center p-2">Ruang Tata Usaha</p>
                </div>
                <div>
                    <img src={bk} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="ruang bk" />
                    <p className="justify-center text-center p-2">Ruang Bimbingan Konseling</p>
                </div>
                <div>
                    <img src={kepsek} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="ruang kepsek" />
                    <p className="justify-center text-center p-2">Ruang Kepala Sekolah</p>
                </div>
                <div>
                    <img src={perpus} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="perpus" />
                    <p className="justify-center text-center p-2">Perpustakaan</p>
                </div>
                <div>
                    <img src={radio} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="ruang radio" />
                    <p className="justify-center text-center p-2">Ruang Radio</p>
                </div>
                <div>
                    <img src={UKS} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="uks" />
                    <p className="justify-center text-center p-2">Unit Kesehatan Sekolah (UKS)</p>
                </div>
                <div>
                    <img src={top} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="toilet pria" />
                    <p className="justify-center text-center p-2">Toilet Pria</p>
                </div>
                <div>
                    <img src={tow} className='object-cover md:w-screen lg:w-auto lg:h-64 xl:h-80 2xl:h-96' alt="toilet wanita" />
                    <p className="justify-center text-center p-2">Toilet Wanita</p>
                </div>
            </div>
        </div>
    )
}

export default Fasilitas