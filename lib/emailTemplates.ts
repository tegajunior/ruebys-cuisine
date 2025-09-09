export function getOrderTemplate(subject: string, customer: any, cart: any[]) {
  const itemsHtml = cart
    .map(
      (item: any) => `
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">${item.name} x${
        item.quantity
      }</td>
          <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">
            $${(item.price * item.quantity).toFixed(2)} 
            <span style="color:#777; font-size: 12px;">(${
              item.quantity
            } × $${item.price.toFixed(2)})</span>
          </td>
        </tr>
      `
    )
    .join('')

  const total = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  )

  return `
    <div style="font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
        
        <!-- Header -->
        <div style="text-align: center; padding: 20px; background-color: #ff6f61;">
          <img src="https://chidiebereuzoma-nextjs-demo-user-image.s3.us-east-1.amazonaws.com/site-logo.png" alt="Rueby Cuisine" style="max-width: 120px;" />
        </div>
        
        <!-- Body -->
        <div style="padding: 20px;">
          <h2 style="color: #ff6f61; margin-top: 0;">${subject}</h2>
          <p>Hello ${customer.firstName} ${customer.lastName},</p>
          <p>Here are the details of your order:</p>

          <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <thead>
              <tr>
                <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Item</th>
                <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Grand Total</td>
                <td style="padding: 8px; border: 1px solid #ddd; text-align: right; font-weight: bold;">$${total.toFixed(
                  2
                )}</td>
              </tr>
            </tbody>
          </table>

          <p style="margin-top: 20px;">📍 Delivery Address: ${
            customer.address
          }</p>
          <p>📅 Delivery Date: ${customer.deliveryDate} at ${
    customer.deliveryTime
  }</p>
          <p style="margin-top: 20px;">Thank you for choosing <strong>Rueby Cuisine</strong>! 🍽️</p>
        </div>

        <!-- Footer -->
        <div style="padding: 15px; text-align: center; font-size: 12px; color: #777; background: #fafafa; border-top: 1px solid #eee;">
          <p>Rueby Cuisine • Lagos, Nigeria</p>
          <p>© ${new Date().getFullYear()} Rueby Cuisine. All rights reserved.</p>
        </div>

      </div>
    </div>
  `
}

export function getContactTemplate(name: string, message: string) {
  return `
    <div style="font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
        
        <!-- Header -->
        <div style="text-align: center; padding: 20px; background-color: #ff6f61;">
          <img src="https://chidiebereuzoma-nextjs-demo-user-image.s3.us-east-1.amazonaws.com/site-logo.png" alt="Rueby Cuisine" style="max-width: 120px;" />
        </div>
        
        <!-- Body -->
        <div style="padding: 20px;">
          <h2 style="color: #ff6f61; margin-top: 0;">We’ve received your message</h2>
          <p>Hello ${name},</p>
          <p>Thank you for reaching out to Rueby Cuisine! Here’s a copy of your message:</p>
          <blockquote style="border-left: 4px solid #ff6f61; padding-left: 10px; color: #555; margin: 10px 0;">${message}</blockquote>
          <p>Our team will get back to you as soon as possible.</p>
          <p style="margin-top: 20px;">Best regards,<br><strong>Rueby Cuisine</strong></p>
        </div>

        <!-- Footer -->
        <div style="padding: 15px; text-align: center; font-size: 12px; color: #777; background: #fafafa; border-top: 1px solid #eee;">
          <p>Rueby Cuisine • Lagos, Nigeria</p>
          <p>© ${new Date().getFullYear()} Rueby Cuisine. All rights reserved.</p>
        </div>

      </div>
    </div>
  `
}
