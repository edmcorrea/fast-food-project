import { useEffect, useState } from 'react';
import { customerMock } from '../../services/customers.mock';
import { PropTypes } from "prop-types";
import { BiCheck } from 'react-icons/bi';
import { FiX } from 'react-icons/fi';

import { requestGetCustomers, requestPutCustomer, requestRemoveCustomer } from '../../services/requests/request.customer';
import './CustomerDetails.scss'

function CustomerDetails({statusOrder, router}) {
  const [filterCustomers, setFilterCustomers] = useState([]);

  const reqGetCustomers = async () => {
    let customers = [];
    try {
      customers = await requestGetCustomers('/customer');
    } catch (error) {
      customers = customerMock; 
    }
    const filteredByStatus = await customers.filter((customer) => (customer.status === statusOrder));
    setFilterCustomers(filteredByStatus);
  };
  
  const handleSubmit = async (id, action) => {
    let Data = filterCustomers.find((customer) => customer.codCustomer == id);
    
    Data.status = "Completed";
    try {
      if(action === "remove") {
        await requestRemoveCustomer(`/customer/${id}`);
      } 
      if (action === "update") {
        await requestPutCustomer(`/customer/${id}`, Data);
      }
      
    } catch (error) {
      const { response: { data: { message } } } = error;
      console.log(message);
    }
  };
  
  useEffect(() => {
    reqGetCustomers();
  }, [handleSubmit]);
  
  return (
    <div className='customerDetails'>
      <h2 className='customerDetails-title'>{statusOrder === "Preparing" ? "Preparando" : "Pronto"}
      </h2>

      <div className='customerDetails-orders'>
        {filterCustomers.map((customer,idxx) => (
          <div key={idxx} className='customerDetails-orders-order'>
            <div>
              <p className={`customerDetails-orders-order-title${router === "status" ? '-status' :''}`}>
                {router === "kitchen" && (
                  <span>
                    {`${customer.codCustomer} - `}
                  </span>
                )}
                {customer.customerName}
              </p>

              {router === "kitchen" && customer.products && customer.products.length > 0 && (
                <div className='customerDetails-orders-order-container'>{customer.products
                  .map((order, idx) => (
                    <section key={idx} className='customerDetails-orders-order-products'>
                      <p className='customerDetails-orders-order-products-product'> <span>{`${order.quantity}x `}</span> {order.name}</p>

                      { order.observation && order.observation.length 
                        && <p className='customerDetails-orders-order-products-observation'>Observações: <span>{order.observation}</span></p>
                      }

                      { order.additional && order.additional.length != 0 && 
                      <div className='customerDetails-orders-order-products-additional'>
                        <h6>Adicionais:</h6>

                        {order.additional.map((add, idx) => (
                          <p
                          key={add}
                          className='customerDetails-orders-order-products-additional-text'
                          >
                            {`${add}${order.additional.length-1 === idx ? "" : ","}`}
                          </p>))}
                      </div>
                      }
                    </section>
                  ))}
                </div>
              )}
            </div>

            {router === "kitchen" && customer.products && customer.products.length > 0 && (
              <div className='customerDetails-orders-order-btns'>
                <button
                  onClick={() => handleSubmit(customer.codCustomer, "remove")}
                  className='customerDetails-orders-order-btns-cancelar'
                >
                  <FiX />
                </button>
                {statusOrder === "Preparing" && (
                  <button
                  onClick={() => handleSubmit(customer.codCustomer, "update")}
                  className='customerDetails-orders-order-btns-completed'
                  >
                    <BiCheck />
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


export default CustomerDetails

CustomerDetails.propTypes = {
  router: PropTypes.string,
  statusOrder: PropTypes.string,
};