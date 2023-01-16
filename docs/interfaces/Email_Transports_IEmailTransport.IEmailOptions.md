[OneBE Framework - v2.4.11](../README.md) / [Exports](../modules.md) / [Email/Transports/IEmailTransport](../modules/Email_Transports_IEmailTransport.md) / IEmailOptions

# Interface: IEmailOptions

[Email/Transports/IEmailTransport](../modules/Email_Transports_IEmailTransport.md).IEmailOptions

A list of options of that can be passed when sending an email throught
the Email handling Service.

## Table of contents

### Properties

- [bcc](Email_Transports_IEmailTransport.IEmailOptions.md#bcc)
- [cc](Email_Transports_IEmailTransport.IEmailOptions.md#cc)
- [from](Email_Transports_IEmailTransport.IEmailOptions.md#from)
- [html](Email_Transports_IEmailTransport.IEmailOptions.md#html)
- [replyTo](Email_Transports_IEmailTransport.IEmailOptions.md#replyto)
- [subject](Email_Transports_IEmailTransport.IEmailOptions.md#subject)
- [text](Email_Transports_IEmailTransport.IEmailOptions.md#text)
- [to](Email_Transports_IEmailTransport.IEmailOptions.md#to)

## Properties

### bcc

• `Optional` **bcc**: `string` \| `string`[]

To whom you want to send a Blind Carbon Copy of the email. One email or a list of emails
that will be passed as the BCC field of an email. The emails added in this field won't
appear in the email address list.

___

### cc

• `Optional` **cc**: `string` \| `string`[]

To whom you want to send a Carbon Copy of the email. One email or a list of emails
that will be passed as the CC field of an email.

___

### from

• `Optional` **from**: `string`

From whom is the email. This will appear as the source of the email.

___

### html

• `Optional` **html**: `string`

The content of the email, in HTML format.

___

### replyTo

• `Optional` **replyTo**: `string`

If you want to receive a reply from the person that received the email you sent
through the application, the `replyTo` field will need a valid email address.

___

### subject

• **subject**: `string`

The subject of the email.

___

### text

• `Optional` **text**: `string`

The content of the email, in plain text format.

___

### to

• `Optional` **to**: `string` \| `string`[]

To whom you want to send the email. One email or a list of emails that will
be passed as the TO field of an email.
