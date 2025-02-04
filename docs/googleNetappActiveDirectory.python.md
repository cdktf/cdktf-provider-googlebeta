# `googleNetappActiveDirectory` Submodule <a name="`googleNetappActiveDirectory` Submodule" id="@cdktf/provider-google-beta.googleNetappActiveDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappActiveDirectory <a name="GoogleNetappActiveDirectory" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory google_netapp_active_directory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_active_directory

googleNetappActiveDirectory.GoogleNetappActiveDirectory(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns: str,
  domain: str,
  location: str,
  name: str,
  net_bios_prefix: str,
  password: str,
  username: str,
  administrators: typing.List[str] = None,
  aes_encryption: typing.Union[bool, IResolvable] = None,
  backup_operators: typing.List[str] = None,
  description: str = None,
  encrypt_dc_connections: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kdc_hostname: str = None,
  kdc_ip: str = None,
  labels: typing.Mapping[str] = None,
  ldap_signing: typing.Union[bool, IResolvable] = None,
  nfs_users_with_ldap: typing.Union[bool, IResolvable] = None,
  organizational_unit: str = None,
  project: str = None,
  security_operators: typing.List[str] = None,
  site: str = None,
  timeouts: GoogleNetappActiveDirectoryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.dns">dns</a></code> | <code>str</code> | Comma separated list of DNS server IP addresses for the Active Directory domain. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.domain">domain</a></code> | <code>str</code> | Fully qualified domain name for the Active Directory domain. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.location">location</a></code> | <code>str</code> | Name of the region for the policy to apply to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the Active Directory pool. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.netBiosPrefix">net_bios_prefix</a></code> | <code>str</code> | NetBIOS name prefix of the server to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.password">password</a></code> | <code>str</code> | Password for specified username. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.username">username</a></code> | <code>str</code> | Username for the Active Directory account with permissions to create the compute account within the specified organizational unit. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.administrators">administrators</a></code> | <code>typing.List[str]</code> | Domain user accounts to be added to the local Administrators group of the SMB service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.aesEncryption">aes_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.backupOperators">backup_operators</a></code> | <code>typing.List[str]</code> | Domain user/group accounts to be added to the Backup Operators group of the SMB service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.encryptDcConnections">encrypt_dc_connections</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#id GoogleNetappActiveDirectory#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.kdcHostname">kdc_hostname</a></code> | <code>str</code> | Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only required for volumes using kerberized NFSv4.1. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.kdcIp">kdc_ip</a></code> | <code>str</code> | IP address of the Active Directory server used as Kerberos Key Distribution Center. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.ldapSigning">ldap_signing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether or not the LDAP traffic needs to be signed. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.nfsUsersWithLdap">nfs_users_with_ldap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.organizationalUnit">organizational_unit</a></code> | <code>str</code> | Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#project GoogleNetappActiveDirectory#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.securityOperators">security_operators</a></code> | <code>typing.List[str]</code> | Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.site">site</a></code> | <code>str</code> | Specifies an Active Directory site to manage domain controller selection. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.dns"></a>

- *Type:* str

Comma separated list of DNS server IP addresses for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#dns GoogleNetappActiveDirectory#dns}

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.domain"></a>

- *Type:* str

Fully qualified domain name for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#domain GoogleNetappActiveDirectory#domain}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.location"></a>

- *Type:* str

Name of the region for the policy to apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#location GoogleNetappActiveDirectory#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the Active Directory pool. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#name GoogleNetappActiveDirectory#name}

---

##### `net_bios_prefix`<sup>Required</sup> <a name="net_bios_prefix" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.netBiosPrefix"></a>

- *Type:* str

NetBIOS name prefix of the server to be created.

A five-character random ID is generated automatically, for example, -6f9a, and appended to the prefix. The full UNC share path will have the following format:
'\NetBIOS_PREFIX-ABCD.DOMAIN_NAME\SHARE_NAME'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#net_bios_prefix GoogleNetappActiveDirectory#net_bios_prefix}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.password"></a>

- *Type:* str

Password for specified username.

Note - Manual changes done to the password will not be detected. Terraform will not re-apply the password, unless you use a new password in Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#password GoogleNetappActiveDirectory#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.username"></a>

- *Type:* str

Username for the Active Directory account with permissions to create the compute account within the specified organizational unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#username GoogleNetappActiveDirectory#username}

---

##### `administrators`<sup>Optional</sup> <a name="administrators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.administrators"></a>

- *Type:* typing.List[str]

Domain user accounts to be added to the local Administrators group of the SMB service.

Comma-separated list of domain users or groups. The Domain Admin group is automatically added when the service joins your domain as a hidden group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#administrators GoogleNetappActiveDirectory#administrators}

---

##### `aes_encryption`<sup>Optional</sup> <a name="aes_encryption" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.aesEncryption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#aes_encryption GoogleNetappActiveDirectory#aes_encryption}

---

##### `backup_operators`<sup>Optional</sup> <a name="backup_operators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.backupOperators"></a>

- *Type:* typing.List[str]

Domain user/group accounts to be added to the Backup Operators group of the SMB service.

The Backup Operators group allows members to backup and restore files regardless of whether they have read or write access to the files. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#backup_operators GoogleNetappActiveDirectory#backup_operators}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#description GoogleNetappActiveDirectory#description}

---

##### `encrypt_dc_connections`<sup>Optional</sup> <a name="encrypt_dc_connections" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.encryptDcConnections"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#encrypt_dc_connections GoogleNetappActiveDirectory#encrypt_dc_connections}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#id GoogleNetappActiveDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kdc_hostname`<sup>Optional</sup> <a name="kdc_hostname" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.kdcHostname"></a>

- *Type:* str

Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only required for volumes using kerberized NFSv4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#kdc_hostname GoogleNetappActiveDirectory#kdc_hostname}

---

##### `kdc_ip`<sup>Optional</sup> <a name="kdc_ip" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.kdcIp"></a>

- *Type:* str

IP address of the Active Directory server used as Kerberos Key Distribution Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#kdc_ip GoogleNetappActiveDirectory#kdc_ip}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#labels GoogleNetappActiveDirectory#labels}

---

##### `ldap_signing`<sup>Optional</sup> <a name="ldap_signing" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.ldapSigning"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether or not the LDAP traffic needs to be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#ldap_signing GoogleNetappActiveDirectory#ldap_signing}

---

##### `nfs_users_with_ldap`<sup>Optional</sup> <a name="nfs_users_with_ldap" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.nfsUsersWithLdap"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes.

This option can be used to temporarily switch such volumes to AUTH_SYS authentication (user ID + 1-16 groups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#nfs_users_with_ldap GoogleNetappActiveDirectory#nfs_users_with_ldap}

---

##### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.organizationalUnit"></a>

- *Type:* str

Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes.

Defaults to 'CN=Computers' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#organizational_unit GoogleNetappActiveDirectory#organizational_unit}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#project GoogleNetappActiveDirectory#project}.

---

##### `security_operators`<sup>Optional</sup> <a name="security_operators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.securityOperators"></a>

- *Type:* typing.List[str]

Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#security_operators GoogleNetappActiveDirectory#security_operators}

---

##### `site`<sup>Optional</sup> <a name="site" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.site"></a>

- *Type:* str

Specifies an Active Directory site to manage domain controller selection.

Use when Active Directory domain controllers in multiple regions are configured. Defaults to 'Default-First-Site-Name' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#site GoogleNetappActiveDirectory#site}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#timeouts GoogleNetappActiveDirectory#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetAdministrators">reset_administrators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetAesEncryption">reset_aes_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetBackupOperators">reset_backup_operators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetEncryptDcConnections">reset_encrypt_dc_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetKdcHostname">reset_kdc_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetKdcIp">reset_kdc_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetLdapSigning">reset_ldap_signing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetNfsUsersWithLdap">reset_nfs_users_with_ldap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetOrganizationalUnit">reset_organizational_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetSecurityOperators">reset_security_operators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetSite">reset_site</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#create GoogleNetappActiveDirectory#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#delete GoogleNetappActiveDirectory#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#update GoogleNetappActiveDirectory#update}.

---

##### `reset_administrators` <a name="reset_administrators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetAdministrators"></a>

```python
def reset_administrators() -> None
```

##### `reset_aes_encryption` <a name="reset_aes_encryption" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetAesEncryption"></a>

```python
def reset_aes_encryption() -> None
```

##### `reset_backup_operators` <a name="reset_backup_operators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetBackupOperators"></a>

```python
def reset_backup_operators() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encrypt_dc_connections` <a name="reset_encrypt_dc_connections" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetEncryptDcConnections"></a>

```python
def reset_encrypt_dc_connections() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kdc_hostname` <a name="reset_kdc_hostname" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetKdcHostname"></a>

```python
def reset_kdc_hostname() -> None
```

##### `reset_kdc_ip` <a name="reset_kdc_ip" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetKdcIp"></a>

```python
def reset_kdc_ip() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_ldap_signing` <a name="reset_ldap_signing" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetLdapSigning"></a>

```python
def reset_ldap_signing() -> None
```

##### `reset_nfs_users_with_ldap` <a name="reset_nfs_users_with_ldap" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetNfsUsersWithLdap"></a>

```python
def reset_nfs_users_with_ldap() -> None
```

##### `reset_organizational_unit` <a name="reset_organizational_unit" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetOrganizationalUnit"></a>

```python
def reset_organizational_unit() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_security_operators` <a name="reset_security_operators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetSecurityOperators"></a>

```python
def reset_security_operators() -> None
```

##### `reset_site` <a name="reset_site" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetSite"></a>

```python
def reset_site() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetappActiveDirectory resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_active_directory

googleNetappActiveDirectory.GoogleNetappActiveDirectory.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_active_directory

googleNetappActiveDirectory.GoogleNetappActiveDirectory.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_active_directory

googleNetappActiveDirectory.GoogleNetappActiveDirectory.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_active_directory

googleNetappActiveDirectory.GoogleNetappActiveDirectory.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetappActiveDirectory resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetappActiveDirectory to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetappActiveDirectory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetappActiveDirectory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.stateDetails">state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference">GoogleNetappActiveDirectoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.administratorsInput">administrators_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.aesEncryptionInput">aes_encryption_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.backupOperatorsInput">backup_operators_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dnsInput">dns_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.encryptDcConnectionsInput">encrypt_dc_connections_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcHostnameInput">kdc_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcIpInput">kdc_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.ldapSigningInput">ldap_signing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.netBiosPrefixInput">net_bios_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nfsUsersWithLdapInput">nfs_users_with_ldap_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.organizationalUnitInput">organizational_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.securityOperatorsInput">security_operators_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.siteInput">site_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.administrators">administrators</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.aesEncryption">aes_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.backupOperators">backup_operators</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dns">dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.encryptDcConnections">encrypt_dc_connections</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcHostname">kdc_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcIp">kdc_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.ldapSigning">ldap_signing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.netBiosPrefix">net_bios_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nfsUsersWithLdap">nfs_users_with_ldap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.securityOperators">security_operators</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.site">site</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_details`<sup>Required</sup> <a name="state_details" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.stateDetails"></a>

```python
state_details: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.timeouts"></a>

```python
timeouts: GoogleNetappActiveDirectoryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference">GoogleNetappActiveDirectoryTimeoutsOutputReference</a>

---

##### `administrators_input`<sup>Optional</sup> <a name="administrators_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.administratorsInput"></a>

```python
administrators_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `aes_encryption_input`<sup>Optional</sup> <a name="aes_encryption_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.aesEncryptionInput"></a>

```python
aes_encryption_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backup_operators_input`<sup>Optional</sup> <a name="backup_operators_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.backupOperatorsInput"></a>

```python
backup_operators_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dns_input`<sup>Optional</sup> <a name="dns_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dnsInput"></a>

```python
dns_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `encrypt_dc_connections_input`<sup>Optional</sup> <a name="encrypt_dc_connections_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.encryptDcConnectionsInput"></a>

```python
encrypt_dc_connections_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kdc_hostname_input`<sup>Optional</sup> <a name="kdc_hostname_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcHostnameInput"></a>

```python
kdc_hostname_input: str
```

- *Type:* str

---

##### `kdc_ip_input`<sup>Optional</sup> <a name="kdc_ip_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcIpInput"></a>

```python
kdc_ip_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ldap_signing_input`<sup>Optional</sup> <a name="ldap_signing_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.ldapSigningInput"></a>

```python
ldap_signing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `net_bios_prefix_input`<sup>Optional</sup> <a name="net_bios_prefix_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.netBiosPrefixInput"></a>

```python
net_bios_prefix_input: str
```

- *Type:* str

---

##### `nfs_users_with_ldap_input`<sup>Optional</sup> <a name="nfs_users_with_ldap_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nfsUsersWithLdapInput"></a>

```python
nfs_users_with_ldap_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `organizational_unit_input`<sup>Optional</sup> <a name="organizational_unit_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.organizationalUnitInput"></a>

```python
organizational_unit_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `security_operators_input`<sup>Optional</sup> <a name="security_operators_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.securityOperatorsInput"></a>

```python
security_operators_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `site_input`<sup>Optional</sup> <a name="site_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.siteInput"></a>

```python
site_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetappActiveDirectoryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a>]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `administrators`<sup>Required</sup> <a name="administrators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.administrators"></a>

```python
administrators: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `aes_encryption`<sup>Required</sup> <a name="aes_encryption" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.aesEncryption"></a>

```python
aes_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backup_operators`<sup>Required</sup> <a name="backup_operators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.backupOperators"></a>

```python
backup_operators: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.dns"></a>

```python
dns: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `encrypt_dc_connections`<sup>Required</sup> <a name="encrypt_dc_connections" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.encryptDcConnections"></a>

```python
encrypt_dc_connections: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kdc_hostname`<sup>Required</sup> <a name="kdc_hostname" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcHostname"></a>

```python
kdc_hostname: str
```

- *Type:* str

---

##### `kdc_ip`<sup>Required</sup> <a name="kdc_ip" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.kdcIp"></a>

```python
kdc_ip: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ldap_signing`<sup>Required</sup> <a name="ldap_signing" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.ldapSigning"></a>

```python
ldap_signing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `net_bios_prefix`<sup>Required</sup> <a name="net_bios_prefix" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.netBiosPrefix"></a>

```python
net_bios_prefix: str
```

- *Type:* str

---

##### `nfs_users_with_ldap`<sup>Required</sup> <a name="nfs_users_with_ldap" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.nfsUsersWithLdap"></a>

```python
nfs_users_with_ldap: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `organizational_unit`<sup>Required</sup> <a name="organizational_unit" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `security_operators`<sup>Required</sup> <a name="security_operators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.securityOperators"></a>

```python
security_operators: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.site"></a>

```python
site: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectory.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappActiveDirectoryConfig <a name="GoogleNetappActiveDirectoryConfig" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_active_directory

googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns: str,
  domain: str,
  location: str,
  name: str,
  net_bios_prefix: str,
  password: str,
  username: str,
  administrators: typing.List[str] = None,
  aes_encryption: typing.Union[bool, IResolvable] = None,
  backup_operators: typing.List[str] = None,
  description: str = None,
  encrypt_dc_connections: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kdc_hostname: str = None,
  kdc_ip: str = None,
  labels: typing.Mapping[str] = None,
  ldap_signing: typing.Union[bool, IResolvable] = None,
  nfs_users_with_ldap: typing.Union[bool, IResolvable] = None,
  organizational_unit: str = None,
  project: str = None,
  security_operators: typing.List[str] = None,
  site: str = None,
  timeouts: GoogleNetappActiveDirectoryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.dns">dns</a></code> | <code>str</code> | Comma separated list of DNS server IP addresses for the Active Directory domain. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.domain">domain</a></code> | <code>str</code> | Fully qualified domain name for the Active Directory domain. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.location">location</a></code> | <code>str</code> | Name of the region for the policy to apply to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.name">name</a></code> | <code>str</code> | The resource name of the Active Directory pool. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.netBiosPrefix">net_bios_prefix</a></code> | <code>str</code> | NetBIOS name prefix of the server to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.password">password</a></code> | <code>str</code> | Password for specified username. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.username">username</a></code> | <code>str</code> | Username for the Active Directory account with permissions to create the compute account within the specified organizational unit. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.administrators">administrators</a></code> | <code>typing.List[str]</code> | Domain user accounts to be added to the local Administrators group of the SMB service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.aesEncryption">aes_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.backupOperators">backup_operators</a></code> | <code>typing.List[str]</code> | Domain user/group accounts to be added to the Backup Operators group of the SMB service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.encryptDcConnections">encrypt_dc_connections</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#id GoogleNetappActiveDirectory#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.kdcHostname">kdc_hostname</a></code> | <code>str</code> | Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only required for volumes using kerberized NFSv4.1. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.kdcIp">kdc_ip</a></code> | <code>str</code> | IP address of the Active Directory server used as Kerberos Key Distribution Center. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.ldapSigning">ldap_signing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether or not the LDAP traffic needs to be signed. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.nfsUsersWithLdap">nfs_users_with_ldap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.organizationalUnit">organizational_unit</a></code> | <code>str</code> | Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#project GoogleNetappActiveDirectory#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.securityOperators">security_operators</a></code> | <code>typing.List[str]</code> | Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.site">site</a></code> | <code>str</code> | Specifies an Active Directory site to manage domain controller selection. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.dns"></a>

```python
dns: str
```

- *Type:* str

Comma separated list of DNS server IP addresses for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#dns GoogleNetappActiveDirectory#dns}

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Fully qualified domain name for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#domain GoogleNetappActiveDirectory#domain}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Name of the region for the policy to apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#location GoogleNetappActiveDirectory#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the Active Directory pool. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#name GoogleNetappActiveDirectory#name}

---

##### `net_bios_prefix`<sup>Required</sup> <a name="net_bios_prefix" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.netBiosPrefix"></a>

```python
net_bios_prefix: str
```

- *Type:* str

NetBIOS name prefix of the server to be created.

A five-character random ID is generated automatically, for example, -6f9a, and appended to the prefix. The full UNC share path will have the following format:
'\NetBIOS_PREFIX-ABCD.DOMAIN_NAME\SHARE_NAME'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#net_bios_prefix GoogleNetappActiveDirectory#net_bios_prefix}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Password for specified username.

Note - Manual changes done to the password will not be detected. Terraform will not re-apply the password, unless you use a new password in Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#password GoogleNetappActiveDirectory#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Username for the Active Directory account with permissions to create the compute account within the specified organizational unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#username GoogleNetappActiveDirectory#username}

---

##### `administrators`<sup>Optional</sup> <a name="administrators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.administrators"></a>

```python
administrators: typing.List[str]
```

- *Type:* typing.List[str]

Domain user accounts to be added to the local Administrators group of the SMB service.

Comma-separated list of domain users or groups. The Domain Admin group is automatically added when the service joins your domain as a hidden group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#administrators GoogleNetappActiveDirectory#administrators}

---

##### `aes_encryption`<sup>Optional</sup> <a name="aes_encryption" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.aesEncryption"></a>

```python
aes_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#aes_encryption GoogleNetappActiveDirectory#aes_encryption}

---

##### `backup_operators`<sup>Optional</sup> <a name="backup_operators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.backupOperators"></a>

```python
backup_operators: typing.List[str]
```

- *Type:* typing.List[str]

Domain user/group accounts to be added to the Backup Operators group of the SMB service.

The Backup Operators group allows members to backup and restore files regardless of whether they have read or write access to the files. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#backup_operators GoogleNetappActiveDirectory#backup_operators}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#description GoogleNetappActiveDirectory#description}

---

##### `encrypt_dc_connections`<sup>Optional</sup> <a name="encrypt_dc_connections" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.encryptDcConnections"></a>

```python
encrypt_dc_connections: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#encrypt_dc_connections GoogleNetappActiveDirectory#encrypt_dc_connections}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#id GoogleNetappActiveDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kdc_hostname`<sup>Optional</sup> <a name="kdc_hostname" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.kdcHostname"></a>

```python
kdc_hostname: str
```

- *Type:* str

Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only required for volumes using kerberized NFSv4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#kdc_hostname GoogleNetappActiveDirectory#kdc_hostname}

---

##### `kdc_ip`<sup>Optional</sup> <a name="kdc_ip" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.kdcIp"></a>

```python
kdc_ip: str
```

- *Type:* str

IP address of the Active Directory server used as Kerberos Key Distribution Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#kdc_ip GoogleNetappActiveDirectory#kdc_ip}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#labels GoogleNetappActiveDirectory#labels}

---

##### `ldap_signing`<sup>Optional</sup> <a name="ldap_signing" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.ldapSigning"></a>

```python
ldap_signing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether or not the LDAP traffic needs to be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#ldap_signing GoogleNetappActiveDirectory#ldap_signing}

---

##### `nfs_users_with_ldap`<sup>Optional</sup> <a name="nfs_users_with_ldap" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.nfsUsersWithLdap"></a>

```python
nfs_users_with_ldap: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes.

This option can be used to temporarily switch such volumes to AUTH_SYS authentication (user ID + 1-16 groups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#nfs_users_with_ldap GoogleNetappActiveDirectory#nfs_users_with_ldap}

---

##### `organizational_unit`<sup>Optional</sup> <a name="organizational_unit" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.organizationalUnit"></a>

```python
organizational_unit: str
```

- *Type:* str

Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes.

Defaults to 'CN=Computers' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#organizational_unit GoogleNetappActiveDirectory#organizational_unit}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#project GoogleNetappActiveDirectory#project}.

---

##### `security_operators`<sup>Optional</sup> <a name="security_operators" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.securityOperators"></a>

```python
security_operators: typing.List[str]
```

- *Type:* typing.List[str]

Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#security_operators GoogleNetappActiveDirectory#security_operators}

---

##### `site`<sup>Optional</sup> <a name="site" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.site"></a>

```python
site: str
```

- *Type:* str

Specifies an Active Directory site to manage domain controller selection.

Use when Active Directory domain controllers in multiple regions are configured. Defaults to 'Default-First-Site-Name' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#site GoogleNetappActiveDirectory#site}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryConfig.property.timeouts"></a>

```python
timeouts: GoogleNetappActiveDirectoryTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#timeouts GoogleNetappActiveDirectory#timeouts}

---

### GoogleNetappActiveDirectoryTimeouts <a name="GoogleNetappActiveDirectoryTimeouts" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_active_directory

googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#create GoogleNetappActiveDirectory#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#delete GoogleNetappActiveDirectory#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#update GoogleNetappActiveDirectory#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#create GoogleNetappActiveDirectory#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#delete GoogleNetappActiveDirectory#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_active_directory#update GoogleNetappActiveDirectory#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappActiveDirectoryTimeoutsOutputReference <a name="GoogleNetappActiveDirectoryTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_netapp_active_directory

googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetappActiveDirectoryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetappActiveDirectory.GoogleNetappActiveDirectoryTimeouts">GoogleNetappActiveDirectoryTimeouts</a>]

---



