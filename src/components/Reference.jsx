import React, {useState} from 'react';

function References(){
    const [submitted, setSubmitted] = useState(false);
    const [references, setReferences] = useState([
        {
            name:'',
            role:'',
            company:'',
            phone:'',
            email:''
        }
    ]);

    function updateReference(index, updateRef){
        const copy = [...references];
        copy[index] = updateRef;
        setReferences(copy);
    }

    function addReference(){
        setReferences([...references, {name:'', role:'', company:'', phone:'', email:''}]);
    }

    function removeReference(index){
        setReferences(references.filter((_,i) => i !== index));
    }

    if(submitted){
        return(
            <div className="references">
                <h3>References</h3>
                {references.map((ref,i) => (
                    <div key={i}>
                        <strong>{ref.name}</strong>
                        <p>{ref.role}{ref.company && `, ${ref.comapny}`}</p>
                        <p>{ref.phone}</p>
                        <p>{ref.email}</p>
                    </div>
                ))}
                <button onClick={() => setSubmitted(false)}>Edit References</button>
            </div>
        );
    }

    return(
        <form className="references" onSubmit={(e) => {e.preventDefault(); setSubmitted(true);}}>
            <h3>References</h3>
            {references.map((ref, i) => (
                <div key={i}>
                    <input type="text" placeholder="Name" value={ref.name} onChange={(e) => updateReference(i, {...ref, name:e.target.value})}/>
                    <input type="text" placeholder="Role / Position" value={ref.name} onChange={(e) => updateReference(i, {...ref, role:e.target.value})}/>
                    <input type="text" placeholder="Company" value={ref.company} onChange={(e) => updateReference(i, {...ref, company:e.target.value})}/>
                    <input type="number" placeholder="Phone" value={ref.phone} onChange={(e) => updateReference(i, {...ref, phone:e.target.value})}/>
                    <input type="email" placeholder="Email" value={ref.email} onChange={(e) => updateReference(i, {...ref, email:e.target.value})}/>
                    <button type="button" onClick={() => removeReference(i)}>Remove Reference</button>
                </div>
            ))}
            <button type="button" onClick={addReference}>Add Reference</button>
            <button type="submit">Save</button>
        </form>
    );
}

export default References;