# `googleNetappActiveDirectory` Submodule <a name="`googleNetappActiveDirectory` Submodule" id="@cdktf/provider-google-beta.googleNetappActiveDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappActiveDirectory <a name="GoogleNetappActiveDirectory" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory google_netapp_active_directory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_netapp_active_directory.GoogleNetappActiveDirectory;

GoogleNetappActiveDirectory.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .dns(java.lang.String)
    .domain(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .netBiosPrefix(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
//  .administrators(java.util.List<java.lang.String>)
//  .aesEncryption(java.lang.Boolean)
//  .aesEncryption(IResolvable)
//  .backupOperators(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .encryptDcConnections(java.lang.Boolean)
//  .encryptDcConnections(IResolvable)
//  .id(java.lang.String)
//  .kdcHostname(java.lang.String)
//  .kdcIp(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .ldapSigning(java.lang.Boolean)
//  .ldapSigning(IResolvable)
//  .nfsUsersWithLdap(java.lang.Boolean)
//  .nfsUsersWithLdap(IResolvable)
//  .organizationalUnit(java.lang.String)
//  .project(java.lang.String)
//  .securityOperators(java.util.List<java.lang.String>)
//  .site(java.lang.String)
//  .timeouts(GoogleNetappActiveDirectoryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.dns">dns</a></code> | <code>java.lang.String</code> | Comma separated list of DNS server IP addresses for the Active Directory domain. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Fully qualified domain name for the Active Directory domain. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Name of the region for the policy to apply to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the Active Directory pool. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.netBiosPrefix">netBiosPrefix</a></code> | <code>java.lang.String</code> | NetBIOS name prefix of the server to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Password for specified username. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Username for the Active Directory account with permissions to create the compute account within the specified organizational unit. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.administrators">administrators</a></code> | <code>java.util.List<java.lang.String></code> | Domain user accounts to be added to the local Administrators group of the SMB service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.aesEncryption">aesEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.backupOperators">backupOperators</a></code> | <code>java.util.List<java.lang.String></code> | Domain user/group accounts to be added to the Backup Operators group of the SMB service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.encryptDcConnections">encryptDcConnections</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#id GoogleNetappActiveDirectory#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.kdcHostname">kdcHostname</a></code> | <code>java.lang.String</code> | Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only required for volumes using kerberized NFSv4.1. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.kdcIp">kdcIp</a></code> | <code>java.lang.String</code> | IP address of the Active Directory server used as Kerberos Key Distribution Center. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.ldapSigning">ldapSigning</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether or not the LDAP traffic needs to be signed. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.nfsUsersWithLdap">nfsUsersWithLdap</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#project GoogleNetappActiveDirectory#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.securityOperators">securityOperators</a></code> | <code>java.util.List<java.lang.String></code> | Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.site">site</a></code> | <code>java.lang.String</code> | Specifies an Active Directory site to manage domain controller selection. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.dns"></a>

- *Type:* java.lang.String

Comma separated list of DNS server IP addresses for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#dns GoogleNetappActiveDirectory#dns}

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Fully qualified domain name for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#domain GoogleNetappActiveDirectory#domain}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Name of the region for the policy to apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#location GoogleNetappActiveDirectory#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the Active Directory pool. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#name GoogleNetappActiveDirectory#name}

---

##### `netBiosPrefix`<sup>Required</sup> <a name="netBiosPrefix" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.netBiosPrefix"></a>

- *Type:* java.lang.String

NetBIOS name prefix of the server to be created.

A five-character random ID is generated automatically, for example, -6f9a, and appended to the prefix. The full UNC share path will have the following format:
'\NetBIOS_PREFIX-ABCD.DOMAIN_NAME\SHARE_NAME'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#net_bios_prefix GoogleNetappActiveDirectory#net_bios_prefix}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Password for specified username.

Note - Manual changes done to the password will not be detected. Terraform will not re-apply the password, unless you use a new password in Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#password GoogleNetappActiveDirectory#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Username for the Active Directory account with permissions to create the compute account within the specified organizational unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#username GoogleNetappActiveDirectory#username}

---

##### `administrators`<sup>Optional</sup> <a name="administrators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.administrators"></a>

- *Type:* java.util.List<java.lang.String>

Domain user accounts to be added to the local Administrators group of the SMB service.

Comma-separated list of domain users or groups. The Domain Admin group is automatically added when the service joins your domain as a hidden group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#administrators GoogleNetappActiveDirectory#administrators}

---

##### `aesEncryption`<sup>Optional</sup> <a name="aesEncryption" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.aesEncryption"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#aes_encryption GoogleNetappActiveDirectory#aes_encryption}

---

##### `backupOperators`<sup>Optional</sup> <a name="backupOperators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.backupOperators"></a>

- *Type:* java.util.List<java.lang.String>

Domain user/group accounts to be added to the Backup Operators group of the SMB service.

The Backup Operators group allows members to backup and restore files regardless of whether they have read or write access to the files. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#backup_operators GoogleNetappActiveDirectory#backup_operators}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#description GoogleNetappActiveDirectory#description}

---

##### `encryptDcConnections`<sup>Optional</sup> <a name="encryptDcConnections" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.encryptDcConnections"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#encrypt_dc_connections GoogleNetappActiveDirectory#encrypt_dc_connections}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#id GoogleNetappActiveDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kdcHostname`<sup>Optional</sup> <a name="kdcHostname" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.kdcHostname"></a>

- *Type:* java.lang.String

Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only required for volumes using kerberized NFSv4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#kdc_hostname GoogleNetappActiveDirectory#kdc_hostname}

---

##### `kdcIp`<sup>Optional</sup> <a name="kdcIp" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.kdcIp"></a>

- *Type:* java.lang.String

IP address of the Active Directory server used as Kerberos Key Distribution Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#kdc_ip GoogleNetappActiveDirectory#kdc_ip}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#labels GoogleNetappActiveDirectory#labels}

---

##### `ldapSigning`<sup>Optional</sup> <a name="ldapSigning" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.ldapSigning"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether or not the LDAP traffic needs to be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#ldap_signing GoogleNetappActiveDirectory#ldap_signing}

---

##### `nfsUsersWithLdap`<sup>Optional</sup> <a name="nfsUsersWithLdap" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.nfsUsersWithLdap"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes.

This option can be used to temporarily switch such volumes to AUTH_SYS authentication (user ID + 1-16 groups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#nfs_users_with_ldap GoogleNetappActiveDirectory#nfs_users_with_ldap}

---

##### `organizationalUnit`<sup>Optional</sup> <a name="organizationalUnit" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.organizationalUnit"></a>

- *Type:* java.lang.String

Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes.

Defaults to 'CN=Computers' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#organizational_unit GoogleNetappActiveDirectory#organizational_unit}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#project GoogleNetappActiveDirectory#project}.

---

##### `securityOperators`<sup>Optional</sup> <a name="securityOperators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.securityOperators"></a>

- *Type:* java.util.List<java.lang.String>

Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#security_operators GoogleNetappActiveDirectory#security_operators}

---

##### `site`<sup>Optional</sup> <a name="site" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.site"></a>

- *Type:* java.lang.String

Specifies an Active Directory site to manage domain controller selection.

Use when Active Directory domain controllers in multiple regions are configured. Defaults to 'Default-First-Site-Name' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#site GoogleNetappActiveDirectory#site}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#timeouts GoogleNetappActiveDirectory#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetAdministrators">resetAdministrators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetAesEncryption">resetAesEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetBackupOperators">resetBackupOperators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetEncryptDcConnections">resetEncryptDcConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetKdcHostname">resetKdcHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetKdcIp">resetKdcIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetLdapSigning">resetLdapSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetNfsUsersWithLdap">resetNfsUsersWithLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetOrganizationalUnit">resetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetSecurityOperators">resetSecurityOperators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetSite">resetSite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetappActiveDirectoryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a>

---

##### `resetAdministrators` <a name="resetAdministrators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetAdministrators"></a>

```java
public void resetAdministrators()
```

##### `resetAesEncryption` <a name="resetAesEncryption" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetAesEncryption"></a>

```java
public void resetAesEncryption()
```

##### `resetBackupOperators` <a name="resetBackupOperators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetBackupOperators"></a>

```java
public void resetBackupOperators()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptDcConnections` <a name="resetEncryptDcConnections" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetEncryptDcConnections"></a>

```java
public void resetEncryptDcConnections()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetId"></a>

```java
public void resetId()
```

##### `resetKdcHostname` <a name="resetKdcHostname" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetKdcHostname"></a>

```java
public void resetKdcHostname()
```

##### `resetKdcIp` <a name="resetKdcIp" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetKdcIp"></a>

```java
public void resetKdcIp()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLdapSigning` <a name="resetLdapSigning" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetLdapSigning"></a>

```java
public void resetLdapSigning()
```

##### `resetNfsUsersWithLdap` <a name="resetNfsUsersWithLdap" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetNfsUsersWithLdap"></a>

```java
public void resetNfsUsersWithLdap()
```

##### `resetOrganizationalUnit` <a name="resetOrganizationalUnit" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetOrganizationalUnit"></a>

```java
public void resetOrganizationalUnit()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetProject"></a>

```java
public void resetProject()
```

##### `resetSecurityOperators` <a name="resetSecurityOperators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetSecurityOperators"></a>

```java
public void resetSecurityOperators()
```

##### `resetSite` <a name="resetSite" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetSite"></a>

```java
public void resetSite()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetappActiveDirectory resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_netapp_active_directory.GoogleNetappActiveDirectory;

GoogleNetappActiveDirectory.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_netapp_active_directory.GoogleNetappActiveDirectory;

GoogleNetappActiveDirectory.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_netapp_active_directory.GoogleNetappActiveDirectory;

GoogleNetappActiveDirectory.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_netapp_active_directory.GoogleNetappActiveDirectory;

GoogleNetappActiveDirectory.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetappActiveDirectory.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleNetappActiveDirectory resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetappActiveDirectory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetappActiveDirectory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetappActiveDirectory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.stateDetails">stateDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference">GoogleNetappActiveDirectoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.administratorsInput">administratorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.aesEncryptionInput">aesEncryptionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.backupOperatorsInput">backupOperatorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dnsInput">dnsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.encryptDcConnectionsInput">encryptDcConnectionsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcHostnameInput">kdcHostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcIpInput">kdcIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.ldapSigningInput">ldapSigningInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.netBiosPrefixInput">netBiosPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nfsUsersWithLdapInput">nfsUsersWithLdapInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.organizationalUnitInput">organizationalUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.securityOperatorsInput">securityOperatorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.siteInput">siteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.administrators">administrators</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.aesEncryption">aesEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.backupOperators">backupOperators</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dns">dns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.encryptDcConnections">encryptDcConnections</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcHostname">kdcHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcIp">kdcIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.ldapSigning">ldapSigning</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.netBiosPrefix">netBiosPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nfsUsersWithLdap">nfsUsersWithLdap</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.securityOperators">securityOperators</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.site">site</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.stateDetails"></a>

```java
public java.lang.String getStateDetails();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.timeouts"></a>

```java
public GoogleNetappActiveDirectoryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference">GoogleNetappActiveDirectoryTimeoutsOutputReference</a>

---

##### `administratorsInput`<sup>Optional</sup> <a name="administratorsInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.administratorsInput"></a>

```java
public java.util.List<java.lang.String> getAdministratorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `aesEncryptionInput`<sup>Optional</sup> <a name="aesEncryptionInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.aesEncryptionInput"></a>

```java
public java.lang.Object getAesEncryptionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backupOperatorsInput`<sup>Optional</sup> <a name="backupOperatorsInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.backupOperatorsInput"></a>

```java
public java.util.List<java.lang.String> getBackupOperatorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dnsInput"></a>

```java
public java.lang.String getDnsInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `encryptDcConnectionsInput`<sup>Optional</sup> <a name="encryptDcConnectionsInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.encryptDcConnectionsInput"></a>

```java
public java.lang.Object getEncryptDcConnectionsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kdcHostnameInput`<sup>Optional</sup> <a name="kdcHostnameInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcHostnameInput"></a>

```java
public java.lang.String getKdcHostnameInput();
```

- *Type:* java.lang.String

---

##### `kdcIpInput`<sup>Optional</sup> <a name="kdcIpInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcIpInput"></a>

```java
public java.lang.String getKdcIpInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ldapSigningInput`<sup>Optional</sup> <a name="ldapSigningInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.ldapSigningInput"></a>

```java
public java.lang.Object getLdapSigningInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `netBiosPrefixInput`<sup>Optional</sup> <a name="netBiosPrefixInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.netBiosPrefixInput"></a>

```java
public java.lang.String getNetBiosPrefixInput();
```

- *Type:* java.lang.String

---

##### `nfsUsersWithLdapInput`<sup>Optional</sup> <a name="nfsUsersWithLdapInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nfsUsersWithLdapInput"></a>

```java
public java.lang.Object getNfsUsersWithLdapInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `organizationalUnitInput`<sup>Optional</sup> <a name="organizationalUnitInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.organizationalUnitInput"></a>

```java
public java.lang.String getOrganizationalUnitInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `securityOperatorsInput`<sup>Optional</sup> <a name="securityOperatorsInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.securityOperatorsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityOperatorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `siteInput`<sup>Optional</sup> <a name="siteInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.siteInput"></a>

```java
public java.lang.String getSiteInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `administrators`<sup>Required</sup> <a name="administrators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.administrators"></a>

```java
public java.util.List<java.lang.String> getAdministrators();
```

- *Type:* java.util.List<java.lang.String>

---

##### `aesEncryption`<sup>Required</sup> <a name="aesEncryption" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.aesEncryption"></a>

```java
public java.lang.Object getAesEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backupOperators`<sup>Required</sup> <a name="backupOperators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.backupOperators"></a>

```java
public java.util.List<java.lang.String> getBackupOperators();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dns"></a>

```java
public java.lang.String getDns();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `encryptDcConnections`<sup>Required</sup> <a name="encryptDcConnections" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.encryptDcConnections"></a>

```java
public java.lang.Object getEncryptDcConnections();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kdcHostname`<sup>Required</sup> <a name="kdcHostname" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcHostname"></a>

```java
public java.lang.String getKdcHostname();
```

- *Type:* java.lang.String

---

##### `kdcIp`<sup>Required</sup> <a name="kdcIp" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcIp"></a>

```java
public java.lang.String getKdcIp();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ldapSigning`<sup>Required</sup> <a name="ldapSigning" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.ldapSigning"></a>

```java
public java.lang.Object getLdapSigning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `netBiosPrefix`<sup>Required</sup> <a name="netBiosPrefix" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.netBiosPrefix"></a>

```java
public java.lang.String getNetBiosPrefix();
```

- *Type:* java.lang.String

---

##### `nfsUsersWithLdap`<sup>Required</sup> <a name="nfsUsersWithLdap" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nfsUsersWithLdap"></a>

```java
public java.lang.Object getNfsUsersWithLdap();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `securityOperators`<sup>Required</sup> <a name="securityOperators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.securityOperators"></a>

```java
public java.util.List<java.lang.String> getSecurityOperators();
```

- *Type:* java.util.List<java.lang.String>

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.site"></a>

```java
public java.lang.String getSite();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappActiveDirectoryConfig <a name="GoogleNetappActiveDirectoryConfig" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_netapp_active_directory.GoogleNetappActiveDirectoryConfig;

GoogleNetappActiveDirectoryConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .dns(java.lang.String)
    .domain(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .netBiosPrefix(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
//  .administrators(java.util.List<java.lang.String>)
//  .aesEncryption(java.lang.Boolean)
//  .aesEncryption(IResolvable)
//  .backupOperators(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .encryptDcConnections(java.lang.Boolean)
//  .encryptDcConnections(IResolvable)
//  .id(java.lang.String)
//  .kdcHostname(java.lang.String)
//  .kdcIp(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .ldapSigning(java.lang.Boolean)
//  .ldapSigning(IResolvable)
//  .nfsUsersWithLdap(java.lang.Boolean)
//  .nfsUsersWithLdap(IResolvable)
//  .organizationalUnit(java.lang.String)
//  .project(java.lang.String)
//  .securityOperators(java.util.List<java.lang.String>)
//  .site(java.lang.String)
//  .timeouts(GoogleNetappActiveDirectoryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.dns">dns</a></code> | <code>java.lang.String</code> | Comma separated list of DNS server IP addresses for the Active Directory domain. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Fully qualified domain name for the Active Directory domain. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.location">location</a></code> | <code>java.lang.String</code> | Name of the region for the policy to apply to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the Active Directory pool. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.netBiosPrefix">netBiosPrefix</a></code> | <code>java.lang.String</code> | NetBIOS name prefix of the server to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.password">password</a></code> | <code>java.lang.String</code> | Password for specified username. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.username">username</a></code> | <code>java.lang.String</code> | Username for the Active Directory account with permissions to create the compute account within the specified organizational unit. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.administrators">administrators</a></code> | <code>java.util.List<java.lang.String></code> | Domain user accounts to be added to the local Administrators group of the SMB service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.aesEncryption">aesEncryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.backupOperators">backupOperators</a></code> | <code>java.util.List<java.lang.String></code> | Domain user/group accounts to be added to the Backup Operators group of the SMB service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.encryptDcConnections">encryptDcConnections</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#id GoogleNetappActiveDirectory#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.kdcHostname">kdcHostname</a></code> | <code>java.lang.String</code> | Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only required for volumes using kerberized NFSv4.1. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.kdcIp">kdcIp</a></code> | <code>java.lang.String</code> | IP address of the Active Directory server used as Kerberos Key Distribution Center. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.ldapSigning">ldapSigning</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether or not the LDAP traffic needs to be signed. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.nfsUsersWithLdap">nfsUsersWithLdap</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#project GoogleNetappActiveDirectory#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.securityOperators">securityOperators</a></code> | <code>java.util.List<java.lang.String></code> | Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.site">site</a></code> | <code>java.lang.String</code> | Specifies an Active Directory site to manage domain controller selection. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.dns"></a>

```java
public java.lang.String getDns();
```

- *Type:* java.lang.String

Comma separated list of DNS server IP addresses for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#dns GoogleNetappActiveDirectory#dns}

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Fully qualified domain name for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#domain GoogleNetappActiveDirectory#domain}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Name of the region for the policy to apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#location GoogleNetappActiveDirectory#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the Active Directory pool. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#name GoogleNetappActiveDirectory#name}

---

##### `netBiosPrefix`<sup>Required</sup> <a name="netBiosPrefix" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.netBiosPrefix"></a>

```java
public java.lang.String getNetBiosPrefix();
```

- *Type:* java.lang.String

NetBIOS name prefix of the server to be created.

A five-character random ID is generated automatically, for example, -6f9a, and appended to the prefix. The full UNC share path will have the following format:
'\NetBIOS_PREFIX-ABCD.DOMAIN_NAME\SHARE_NAME'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#net_bios_prefix GoogleNetappActiveDirectory#net_bios_prefix}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for specified username.

Note - Manual changes done to the password will not be detected. Terraform will not re-apply the password, unless you use a new password in Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#password GoogleNetappActiveDirectory#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username for the Active Directory account with permissions to create the compute account within the specified organizational unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#username GoogleNetappActiveDirectory#username}

---

##### `administrators`<sup>Optional</sup> <a name="administrators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.administrators"></a>

```java
public java.util.List<java.lang.String> getAdministrators();
```

- *Type:* java.util.List<java.lang.String>

Domain user accounts to be added to the local Administrators group of the SMB service.

Comma-separated list of domain users or groups. The Domain Admin group is automatically added when the service joins your domain as a hidden group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#administrators GoogleNetappActiveDirectory#administrators}

---

##### `aesEncryption`<sup>Optional</sup> <a name="aesEncryption" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.aesEncryption"></a>

```java
public java.lang.Object getAesEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#aes_encryption GoogleNetappActiveDirectory#aes_encryption}

---

##### `backupOperators`<sup>Optional</sup> <a name="backupOperators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.backupOperators"></a>

```java
public java.util.List<java.lang.String> getBackupOperators();
```

- *Type:* java.util.List<java.lang.String>

Domain user/group accounts to be added to the Backup Operators group of the SMB service.

The Backup Operators group allows members to backup and restore files regardless of whether they have read or write access to the files. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#backup_operators GoogleNetappActiveDirectory#backup_operators}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#description GoogleNetappActiveDirectory#description}

---

##### `encryptDcConnections`<sup>Optional</sup> <a name="encryptDcConnections" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.encryptDcConnections"></a>

```java
public java.lang.Object getEncryptDcConnections();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#encrypt_dc_connections GoogleNetappActiveDirectory#encrypt_dc_connections}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#id GoogleNetappActiveDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kdcHostname`<sup>Optional</sup> <a name="kdcHostname" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.kdcHostname"></a>

```java
public java.lang.String getKdcHostname();
```

- *Type:* java.lang.String

Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only required for volumes using kerberized NFSv4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#kdc_hostname GoogleNetappActiveDirectory#kdc_hostname}

---

##### `kdcIp`<sup>Optional</sup> <a name="kdcIp" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.kdcIp"></a>

```java
public java.lang.String getKdcIp();
```

- *Type:* java.lang.String

IP address of the Active Directory server used as Kerberos Key Distribution Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#kdc_ip GoogleNetappActiveDirectory#kdc_ip}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#labels GoogleNetappActiveDirectory#labels}

---

##### `ldapSigning`<sup>Optional</sup> <a name="ldapSigning" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.ldapSigning"></a>

```java
public java.lang.Object getLdapSigning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether or not the LDAP traffic needs to be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#ldap_signing GoogleNetappActiveDirectory#ldap_signing}

---

##### `nfsUsersWithLdap`<sup>Optional</sup> <a name="nfsUsersWithLdap" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.nfsUsersWithLdap"></a>

```java
public java.lang.Object getNfsUsersWithLdap();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes.

This option can be used to temporarily switch such volumes to AUTH_SYS authentication (user ID + 1-16 groups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#nfs_users_with_ldap GoogleNetappActiveDirectory#nfs_users_with_ldap}

---

##### `organizationalUnit`<sup>Optional</sup> <a name="organizationalUnit" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes.

Defaults to 'CN=Computers' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#organizational_unit GoogleNetappActiveDirectory#organizational_unit}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#project GoogleNetappActiveDirectory#project}.

---

##### `securityOperators`<sup>Optional</sup> <a name="securityOperators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.securityOperators"></a>

```java
public java.util.List<java.lang.String> getSecurityOperators();
```

- *Type:* java.util.List<java.lang.String>

Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#security_operators GoogleNetappActiveDirectory#security_operators}

---

##### `site`<sup>Optional</sup> <a name="site" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.site"></a>

```java
public java.lang.String getSite();
```

- *Type:* java.lang.String

Specifies an Active Directory site to manage domain controller selection.

Use when Active Directory domain controllers in multiple regions are configured. Defaults to 'Default-First-Site-Name' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#site GoogleNetappActiveDirectory#site}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.timeouts"></a>

```java
public GoogleNetappActiveDirectoryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#timeouts GoogleNetappActiveDirectory#timeouts}

---

### GoogleNetappActiveDirectoryTimeouts <a name="GoogleNetappActiveDirectoryTimeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_netapp_active_directory.GoogleNetappActiveDirectoryTimeouts;

GoogleNetappActiveDirectoryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#create GoogleNetappActiveDirectory#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#delete GoogleNetappActiveDirectory#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#update GoogleNetappActiveDirectory#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#create GoogleNetappActiveDirectory#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#delete GoogleNetappActiveDirectory#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_netapp_active_directory#update GoogleNetappActiveDirectory#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappActiveDirectoryTimeoutsOutputReference <a name="GoogleNetappActiveDirectoryTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_netapp_active_directory.GoogleNetappActiveDirectoryTimeoutsOutputReference;

new GoogleNetappActiveDirectoryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a>

---



