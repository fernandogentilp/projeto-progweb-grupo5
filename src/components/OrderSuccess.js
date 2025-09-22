import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function createDownloadToken(orderId, productId){
  // Gera token simples e salva expiry (24h) no localStorage
  const token = btoa(orderId + '|' + productId + '|' + Date.now());
  const key = `dl_${orderId}_${productId}`;
  const expiresAt = Date.now() + 24*60*60*1000;
  localStorage.setItem(key, JSON.stringify({token, expiresAt}));
  return token;
}

function checkTokenValid(orderId, productId){
  const key = `dl_${orderId}_${productId}`;
  const raw = localStorage.getItem(key);
  if(!raw) return false;
  try{
    const obj = JSON.parse(raw);
    return Date.now() < obj.expiresAt;
  }catch(e){return false;}
}

export default function OrderSuccess(){
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [links, setLinks] = useState({});

  useEffect(()=>{
    const raw = localStorage.getItem('lastOrder');
    if(raw){
      const o = JSON.parse(raw);
      if(o.id === orderId) setOrder(o);
      else setOrder(o); // mostra último pedido mesmo que id não bata (demo)
    }
  },[orderId]);

  useEffect(()=>{
    if(!order) return;
    const ebookLinks = {};
    order.items.filter(i => i.type === 'ebook').forEach(it => {
      if(checkTokenValid(order.id, it.id)){
        const d = JSON.parse(localStorage.getItem(`dl_${order.id}_${it.id}`));
        ebookLinks[it.id] = d.token;
      } else {
        ebookLinks[it.id] = createDownloadToken(order.id, it.id);
      }
    });
    setLinks(ebookLinks);
  },[order]);

  if(!order) return <p>Carregando pedido...</p>
  return (
    <div>
      <h2>Pedido Confirmado — {order.id}</h2>
      <p>Obrigado, {order.name}. Um e-mail foi enviado para {order.email} (simulado).</p>
      <h3>Itens:</h3>
      <ul>
        {order.items.map(it => (
          <li key={it.id}>
            {it.title} — R$ {it.price.toFixed(2)} {it.type==='ebook' ? (<span> — <a href={`/sample-ebook.pdf?token=${links[it.id]}`} target="_blank" rel="noreferrer">Baixar e-book</a></span>) : null}
          </li>
        ))}
      </ul>
      <p style={{marginTop:12}}>Links de download expiram em 24 horas (gerenciado localmente para demonstração).</p>
    </div>
  );
}
