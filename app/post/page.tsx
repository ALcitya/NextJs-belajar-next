import CardList from "../components/posts/CardList";
// tipe data untuk product dalam json
interface Product {
    nama: string;
    seri: string;
    ram: string;
    rom: string;
    layar: string;
    kamera_depan: string;
    kamera_belakang: string;
    port: string;
    baterai: string;
    harga: string;
  } 
// Async component to fetch data
const Page = async () => {
    // Fetch data from the public folder
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`);
    const data: Product[] = await res.json();
  
    return (
      <div>
        <h1>Product List</h1>
        <CardList>
            <table>
                    <tr>
                    <td>Nama</td>
                    <td>Seri</td>
                    <td>Ram</td>
                    <td>Rom</td>
                    <td>Layar</td>
                    <td>Kamera Depan</td>
                    <td>Kamera Belakang</td>
                    <td>Port</td>
                    <td>Baterai</td>
                    <td>Harga</td>
                    </tr>
                    {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.nama}</td>
                        <td>{item.seri}</td>
                        <td>{item.ram}</td>
                        <td>{item.rom}</td>
                        <td>{item.layar}</td>
                        <td>{item.kamera_depan}</td>
                        <td>{item.kamera_belakang}</td>
                        <td>{item.port}</td>
                        <td>{item.baterai}</td>
                        <td> Rp. {item.harga}</td>
                    </tr>
                ))}
            </table>
        </CardList>
      </div>
    );
  };
  
  export default Page;