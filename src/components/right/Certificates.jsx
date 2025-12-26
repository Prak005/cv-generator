import React, {useState} from 'react';

function Certificates(){
    const [submitted, setSubmitted] = useState(false);
    const [cert, setCert] = useState([
        {
            name:'',
            desc:'',
            link:''
        }
    ]);

    function addCertificates(){
        setCert([...cert, {name:'', desc:'', link:''}]);
    }

    function updateCertificates(index, updated){
        const copy = [...cert];
        copy[index] = updated;
        setCert(copy);
    }

    function removeCertificates(index){
        setCert(cert.filter((_,i) => i!==index));
    }

    if(submitted){
        return(
            <div className="certificates">
                <h3>Certificates</h3>
                {cert.map((p,i) => (
                    <div key={i}>
                        <strong>{p.name}</strong>
                        <p>{p.desc}</p>
                        {p.link && (
                            <a href={p.link} target="_blank" rel="noreferrer">{p.link.replace(/^https?:\/\//,'')}</a>
                        )}
                    </div>
                ))}
                <button type="button" onClick={() => setSubmitted(false)}>Edit Certificates</button>
            </div>
        );
    }

    return(
        <form className="certificates" onSubmit={(e) => {e.preventDefault(); setSubmitted(true)}}>
            <h3>Certificates</h3>
            {cert.map((p,i) => (
                <div key={i}>
                    <input type="text" placeholder="certificate_name" value={p.name} onChange={(e) => updateCertificates(i, {...p, name:e.target.value})}/>
                    <input type="text" placeholder="certificate_description" value={p.desc} onChange={(e) => updateCertificates(i, {...p, desc:e.target.value})}/>
                    <input type="url" placeholder="certificate_url" value={p.link} onChange={(e) => updateCertificates(i, {...p, link:e.target.value})}/>
                    <button type="button" onClick={() => removeCertificates(i)}>Remove Certificate</button>
                </div>
            ))}
            <button type="button" onClick={addCertificates}>Add Certificate</button>
            <button type="submit">Save</button>
        </form>
    );
}

export default Certificates;