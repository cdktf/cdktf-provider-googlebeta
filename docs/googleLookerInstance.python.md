# `googleLookerInstance` Submodule <a name="`googleLookerInstance` Submodule" id="@cdktf/provider-google-beta.googleLookerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLookerInstance <a name="GoogleLookerInstance" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance google_looker_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  oauth_config: GoogleLookerInstanceOauthConfig,
  admin_settings: GoogleLookerInstanceAdminSettings = None,
  consumer_network: str = None,
  custom_domain: GoogleLookerInstanceCustomDomain = None,
  deletion_policy: str = None,
  deny_maintenance_period: GoogleLookerInstanceDenyMaintenancePeriod = None,
  encryption_config: GoogleLookerInstanceEncryptionConfig = None,
  fips_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  maintenance_window: GoogleLookerInstanceMaintenanceWindow = None,
  platform_edition: str = None,
  private_ip_enabled: typing.Union[bool, IResolvable] = None,
  project: str = None,
  psc_config: GoogleLookerInstancePscConfig = None,
  psc_enabled: typing.Union[bool, IResolvable] = None,
  public_ip_enabled: typing.Union[bool, IResolvable] = None,
  region: str = None,
  reserved_range: str = None,
  timeouts: GoogleLookerInstanceTimeouts = None,
  user_metadata: GoogleLookerInstanceUserMetadata = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.adminSettings">admin_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a></code> | admin_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.consumerNetwork">consumer_network</a></code> | <code>str</code> | Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.customDomain">custom_domain</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a></code> | custom_domain block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Policy to determine if the cluster should be deleted forcefully. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.denyMaintenancePeriod">deny_maintenance_period</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a></code> | deny_maintenance_period block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.fipsEnabled">fips_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | FIPS 140-2 Encryption enablement for Looker (Google Cloud Core). |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#id GoogleLookerInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.platformEdition">platform_edition</a></code> | <code>str</code> | Platform editions for a Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.privateIpEnabled">private_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether private IP is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#project GoogleLookerInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.pscConfig">psc_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.pscEnabled">psc_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Public Service Connect (PSC) is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.publicIpEnabled">public_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether public IP is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.region">region</a></code> | <code>str</code> | The name of the Looker region of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.reservedRange">reserved_range</a></code> | <code>str</code> | Name of a reserved IP address range within the consumer network, to be used for private service access connection. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.userMetadata">user_metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a></code> | user_metadata block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.name"></a>

- *Type:* str

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#name GoogleLookerInstance#name}

---

##### `oauth_config`<sup>Required</sup> <a name="oauth_config" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.oauthConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#oauth_config GoogleLookerInstance#oauth_config}

---

##### `admin_settings`<sup>Optional</sup> <a name="admin_settings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.adminSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a>

admin_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#admin_settings GoogleLookerInstance#admin_settings}

---

##### `consumer_network`<sup>Optional</sup> <a name="consumer_network" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.consumerNetwork"></a>

- *Type:* str

Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#consumer_network GoogleLookerInstance#consumer_network}

---

##### `custom_domain`<sup>Optional</sup> <a name="custom_domain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.customDomain"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#custom_domain GoogleLookerInstance#custom_domain}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Policy to determine if the cluster should be deleted forcefully.

If setting deletion_policy = "FORCE", the Looker instance will be deleted regardless
of its nested resources. If set to "DEFAULT", Looker instances that still have
nested resources will return an error. Possible values: DEFAULT, FORCE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#deletion_policy GoogleLookerInstance#deletion_policy}

---

##### `deny_maintenance_period`<sup>Optional</sup> <a name="deny_maintenance_period" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.denyMaintenancePeriod"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a>

deny_maintenance_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#deny_maintenance_period GoogleLookerInstance#deny_maintenance_period}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#encryption_config GoogleLookerInstance#encryption_config}

---

##### `fips_enabled`<sup>Optional</sup> <a name="fips_enabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.fipsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

FIPS 140-2 Encryption enablement for Looker (Google Cloud Core).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#fips_enabled GoogleLookerInstance#fips_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#id GoogleLookerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#maintenance_window GoogleLookerInstance#maintenance_window}

---

##### `platform_edition`<sup>Optional</sup> <a name="platform_edition" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.platformEdition"></a>

- *Type:* str

Platform editions for a Looker instance.

Each edition maps to a set of instance features, like its size. Must be one of these values:

* LOOKER_CORE_TRIAL: trial instance (Currently Unavailable)
* LOOKER_CORE_STANDARD: pay as you go standard instance (Currently Unavailable)
* LOOKER_CORE_STANDARD_ANNUAL: subscription standard instance
* LOOKER_CORE_ENTERPRISE_ANNUAL: subscription enterprise instance
* LOOKER_CORE_EMBED_ANNUAL: subscription embed instance
* LOOKER_CORE_NONPROD_STANDARD_ANNUAL: nonprod subscription standard instance
* LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL: nonprod subscription enterprise instance
* LOOKER_CORE_NONPROD_EMBED_ANNUAL: nonprod subscription embed instance Default value: "LOOKER_CORE_TRIAL" Possible values: ["LOOKER_CORE_TRIAL", "LOOKER_CORE_STANDARD", "LOOKER_CORE_STANDARD_ANNUAL", "LOOKER_CORE_ENTERPRISE_ANNUAL", "LOOKER_CORE_EMBED_ANNUAL", "LOOKER_CORE_NONPROD_STANDARD_ANNUAL", "LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL", "LOOKER_CORE_NONPROD_EMBED_ANNUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#platform_edition GoogleLookerInstance#platform_edition}

---

##### `private_ip_enabled`<sup>Optional</sup> <a name="private_ip_enabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.privateIpEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether private IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#private_ip_enabled GoogleLookerInstance#private_ip_enabled}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#project GoogleLookerInstance#project}.

---

##### `psc_config`<sup>Optional</sup> <a name="psc_config" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.pscConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#psc_config GoogleLookerInstance#psc_config}

---

##### `psc_enabled`<sup>Optional</sup> <a name="psc_enabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.pscEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Public Service Connect (PSC) is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#psc_enabled GoogleLookerInstance#psc_enabled}

---

##### `public_ip_enabled`<sup>Optional</sup> <a name="public_ip_enabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.publicIpEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether public IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#public_ip_enabled GoogleLookerInstance#public_ip_enabled}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.region"></a>

- *Type:* str

The name of the Looker region of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#region GoogleLookerInstance#region}

---

##### `reserved_range`<sup>Optional</sup> <a name="reserved_range" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.reservedRange"></a>

- *Type:* str

Name of a reserved IP address range within the consumer network, to be used for private service access connection.

User may or may not specify this in a request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#reserved_range GoogleLookerInstance#reserved_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#timeouts GoogleLookerInstance#timeouts}

---

##### `user_metadata`<sup>Optional</sup> <a name="user_metadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.userMetadata"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a>

user_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#user_metadata GoogleLookerInstance#user_metadata}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putAdminSettings">put_admin_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putCustomDomain">put_custom_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putDenyMaintenancePeriod">put_deny_maintenance_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putEncryptionConfig">put_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putOauthConfig">put_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putPscConfig">put_psc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putUserMetadata">put_user_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetAdminSettings">reset_admin_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetConsumerNetwork">reset_consumer_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetCustomDomain">reset_custom_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetDenyMaintenancePeriod">reset_deny_maintenance_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetEncryptionConfig">reset_encryption_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetFipsEnabled">reset_fips_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPlatformEdition">reset_platform_edition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPrivateIpEnabled">reset_private_ip_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPscConfig">reset_psc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPscEnabled">reset_psc_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPublicIpEnabled">reset_public_ip_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetReservedRange">reset_reserved_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetUserMetadata">reset_user_metadata</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_admin_settings` <a name="put_admin_settings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putAdminSettings"></a>

```python
def put_admin_settings(
  allowed_email_domains: typing.List[str] = None
) -> None
```

###### `allowed_email_domains`<sup>Optional</sup> <a name="allowed_email_domains" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putAdminSettings.parameter.allowedEmailDomains"></a>

- *Type:* typing.List[str]

Email domain allowlist for the instance.

Define the email domains to which your users can deliver Looker (Google Cloud core) content.
Updating this list will restart the instance. Updating the allowed email domains from terraform
means the value provided will be considered as the entire list and not an amendment to the
existing list of allowed email domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#allowed_email_domains GoogleLookerInstance#allowed_email_domains}

---

##### `put_custom_domain` <a name="put_custom_domain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putCustomDomain"></a>

```python
def put_custom_domain(
  domain: str = None
) -> None
```

###### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putCustomDomain.parameter.domain"></a>

- *Type:* str

Domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#domain GoogleLookerInstance#domain}

---

##### `put_deny_maintenance_period` <a name="put_deny_maintenance_period" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putDenyMaintenancePeriod"></a>

```python
def put_deny_maintenance_period(
  end_date: GoogleLookerInstanceDenyMaintenancePeriodEndDate,
  start_date: GoogleLookerInstanceDenyMaintenancePeriodStartDate,
  time: GoogleLookerInstanceDenyMaintenancePeriodTime
) -> None
```

###### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putDenyMaintenancePeriod.parameter.endDate"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#end_date GoogleLookerInstance#end_date}

---

###### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putDenyMaintenancePeriod.parameter.startDate"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#start_date GoogleLookerInstance#start_date}

---

###### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putDenyMaintenancePeriod.parameter.time"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a>

time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#time GoogleLookerInstance#time}

---

##### `put_encryption_config` <a name="put_encryption_config" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putEncryptionConfig"></a>

```python
def put_encryption_config(
  kms_key_name: str = None
) -> None
```

###### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putEncryptionConfig.parameter.kmsKeyName"></a>

- *Type:* str

Name of the customer managed encryption key (CMEK) in KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#kms_key_name GoogleLookerInstance#kms_key_name}

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  day_of_week: str,
  start_time: GoogleLookerInstanceMaintenanceWindowStartTime
) -> None
```

###### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putMaintenanceWindow.parameter.dayOfWeek"></a>

- *Type:* str

Required. Day of the week for this MaintenanceWindow (in UTC).

* MONDAY: Monday
* TUESDAY: Tuesday
* WEDNESDAY: Wednesday
* THURSDAY: Thursday
* FRIDAY: Friday
* SATURDAY: Saturday
* SUNDAY: Sunday Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#day_of_week GoogleLookerInstance#day_of_week}

---

###### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putMaintenanceWindow.parameter.startTime"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#start_time GoogleLookerInstance#start_time}

---

##### `put_oauth_config` <a name="put_oauth_config" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putOauthConfig"></a>

```python
def put_oauth_config(
  client_id: str,
  client_secret: str
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putOauthConfig.parameter.clientId"></a>

- *Type:* str

The client ID for the Oauth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#client_id GoogleLookerInstance#client_id}

---

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putOauthConfig.parameter.clientSecret"></a>

- *Type:* str

The client secret for the Oauth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#client_secret GoogleLookerInstance#client_secret}

---

##### `put_psc_config` <a name="put_psc_config" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putPscConfig"></a>

```python
def put_psc_config(
  allowed_vpcs: typing.List[str] = None,
  service_attachments: typing.Union[IResolvable, typing.List[GoogleLookerInstancePscConfigServiceAttachments]] = None
) -> None
```

###### `allowed_vpcs`<sup>Optional</sup> <a name="allowed_vpcs" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putPscConfig.parameter.allowedVpcs"></a>

- *Type:* typing.List[str]

List of VPCs that are allowed ingress into the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#allowed_vpcs GoogleLookerInstance#allowed_vpcs}

---

###### `service_attachments`<sup>Optional</sup> <a name="service_attachments" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putPscConfig.parameter.serviceAttachments"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments">GoogleLookerInstancePscConfigServiceAttachments</a>]]

service_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#service_attachments GoogleLookerInstance#service_attachments}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#create GoogleLookerInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#delete GoogleLookerInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#update GoogleLookerInstance#update}.

---

##### `put_user_metadata` <a name="put_user_metadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putUserMetadata"></a>

```python
def put_user_metadata(
  additional_developer_user_count: typing.Union[int, float] = None,
  additional_standard_user_count: typing.Union[int, float] = None,
  additional_viewer_user_count: typing.Union[int, float] = None
) -> None
```

###### `additional_developer_user_count`<sup>Optional</sup> <a name="additional_developer_user_count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putUserMetadata.parameter.additionalDeveloperUserCount"></a>

- *Type:* typing.Union[int, float]

Number of additional Developer Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#additional_developer_user_count GoogleLookerInstance#additional_developer_user_count}

---

###### `additional_standard_user_count`<sup>Optional</sup> <a name="additional_standard_user_count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putUserMetadata.parameter.additionalStandardUserCount"></a>

- *Type:* typing.Union[int, float]

Number of additional Standard Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#additional_standard_user_count GoogleLookerInstance#additional_standard_user_count}

---

###### `additional_viewer_user_count`<sup>Optional</sup> <a name="additional_viewer_user_count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putUserMetadata.parameter.additionalViewerUserCount"></a>

- *Type:* typing.Union[int, float]

Number of additional Viewer Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#additional_viewer_user_count GoogleLookerInstance#additional_viewer_user_count}

---

##### `reset_admin_settings` <a name="reset_admin_settings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetAdminSettings"></a>

```python
def reset_admin_settings() -> None
```

##### `reset_consumer_network` <a name="reset_consumer_network" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetConsumerNetwork"></a>

```python
def reset_consumer_network() -> None
```

##### `reset_custom_domain` <a name="reset_custom_domain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetCustomDomain"></a>

```python
def reset_custom_domain() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_deny_maintenance_period` <a name="reset_deny_maintenance_period" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetDenyMaintenancePeriod"></a>

```python
def reset_deny_maintenance_period() -> None
```

##### `reset_encryption_config` <a name="reset_encryption_config" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetEncryptionConfig"></a>

```python
def reset_encryption_config() -> None
```

##### `reset_fips_enabled` <a name="reset_fips_enabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetFipsEnabled"></a>

```python
def reset_fips_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_platform_edition` <a name="reset_platform_edition" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPlatformEdition"></a>

```python
def reset_platform_edition() -> None
```

##### `reset_private_ip_enabled` <a name="reset_private_ip_enabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPrivateIpEnabled"></a>

```python
def reset_private_ip_enabled() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_psc_config` <a name="reset_psc_config" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPscConfig"></a>

```python
def reset_psc_config() -> None
```

##### `reset_psc_enabled` <a name="reset_psc_enabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPscEnabled"></a>

```python
def reset_psc_enabled() -> None
```

##### `reset_public_ip_enabled` <a name="reset_public_ip_enabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPublicIpEnabled"></a>

```python
def reset_public_ip_enabled() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_reserved_range` <a name="reset_reserved_range" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetReservedRange"></a>

```python
def reset_reserved_range() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_metadata` <a name="reset_user_metadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetUserMetadata"></a>

```python
def reset_user_metadata() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleLookerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleLookerInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleLookerInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleLookerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleLookerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.adminSettings">admin_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference">GoogleLookerInstanceAdminSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.customDomain">custom_domain</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference">GoogleLookerInstanceCustomDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.denyMaintenancePeriod">deny_maintenance_period</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference">GoogleLookerInstanceDenyMaintenancePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.egressPublicIp">egress_public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference">GoogleLookerInstanceEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.ingressPrivateIp">ingress_private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.ingressPublicIp">ingress_public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lookerUri">looker_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lookerVersion">looker_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference">GoogleLookerInstanceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference">GoogleLookerInstanceOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscConfig">psc_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference">GoogleLookerInstancePscConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference">GoogleLookerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.userMetadata">user_metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference">GoogleLookerInstanceUserMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.adminSettingsInput">admin_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.consumerNetworkInput">consumer_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.customDomainInput">custom_domain_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.denyMaintenancePeriodInput">deny_maintenance_period_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.encryptionConfigInput">encryption_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.fipsEnabledInput">fips_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.oauthConfigInput">oauth_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.platformEditionInput">platform_edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.privateIpEnabledInput">private_ip_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscConfigInput">psc_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscEnabledInput">psc_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.publicIpEnabledInput">public_ip_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.reservedRangeInput">reserved_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.userMetadataInput">user_metadata_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.consumerNetwork">consumer_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.fipsEnabled">fips_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.platformEdition">platform_edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.privateIpEnabled">private_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscEnabled">psc_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.publicIpEnabled">public_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.reservedRange">reserved_range</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_settings`<sup>Required</sup> <a name="admin_settings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.adminSettings"></a>

```python
admin_settings: GoogleLookerInstanceAdminSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference">GoogleLookerInstanceAdminSettingsOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `custom_domain`<sup>Required</sup> <a name="custom_domain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.customDomain"></a>

```python
custom_domain: GoogleLookerInstanceCustomDomainOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference">GoogleLookerInstanceCustomDomainOutputReference</a>

---

##### `deny_maintenance_period`<sup>Required</sup> <a name="deny_maintenance_period" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.denyMaintenancePeriod"></a>

```python
deny_maintenance_period: GoogleLookerInstanceDenyMaintenancePeriodOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference">GoogleLookerInstanceDenyMaintenancePeriodOutputReference</a>

---

##### `egress_public_ip`<sup>Required</sup> <a name="egress_public_ip" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.egressPublicIp"></a>

```python
egress_public_ip: str
```

- *Type:* str

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.encryptionConfig"></a>

```python
encryption_config: GoogleLookerInstanceEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference">GoogleLookerInstanceEncryptionConfigOutputReference</a>

---

##### `ingress_private_ip`<sup>Required</sup> <a name="ingress_private_ip" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.ingressPrivateIp"></a>

```python
ingress_private_ip: str
```

- *Type:* str

---

##### `ingress_public_ip`<sup>Required</sup> <a name="ingress_public_ip" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.ingressPublicIp"></a>

```python
ingress_public_ip: str
```

- *Type:* str

---

##### `looker_uri`<sup>Required</sup> <a name="looker_uri" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lookerUri"></a>

```python
looker_uri: str
```

- *Type:* str

---

##### `looker_version`<sup>Required</sup> <a name="looker_version" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lookerVersion"></a>

```python
looker_version: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.maintenanceWindow"></a>

```python
maintenance_window: GoogleLookerInstanceMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference">GoogleLookerInstanceMaintenanceWindowOutputReference</a>

---

##### `oauth_config`<sup>Required</sup> <a name="oauth_config" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.oauthConfig"></a>

```python
oauth_config: GoogleLookerInstanceOauthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference">GoogleLookerInstanceOauthConfigOutputReference</a>

---

##### `psc_config`<sup>Required</sup> <a name="psc_config" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscConfig"></a>

```python
psc_config: GoogleLookerInstancePscConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference">GoogleLookerInstancePscConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.timeouts"></a>

```python
timeouts: GoogleLookerInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference">GoogleLookerInstanceTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `user_metadata`<sup>Required</sup> <a name="user_metadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.userMetadata"></a>

```python
user_metadata: GoogleLookerInstanceUserMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference">GoogleLookerInstanceUserMetadataOutputReference</a>

---

##### `admin_settings_input`<sup>Optional</sup> <a name="admin_settings_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.adminSettingsInput"></a>

```python
admin_settings_input: GoogleLookerInstanceAdminSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a>

---

##### `consumer_network_input`<sup>Optional</sup> <a name="consumer_network_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.consumerNetworkInput"></a>

```python
consumer_network_input: str
```

- *Type:* str

---

##### `custom_domain_input`<sup>Optional</sup> <a name="custom_domain_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.customDomainInput"></a>

```python
custom_domain_input: GoogleLookerInstanceCustomDomain
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `deny_maintenance_period_input`<sup>Optional</sup> <a name="deny_maintenance_period_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.denyMaintenancePeriodInput"></a>

```python
deny_maintenance_period_input: GoogleLookerInstanceDenyMaintenancePeriod
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a>

---

##### `encryption_config_input`<sup>Optional</sup> <a name="encryption_config_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.encryptionConfigInput"></a>

```python
encryption_config_input: GoogleLookerInstanceEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a>

---

##### `fips_enabled_input`<sup>Optional</sup> <a name="fips_enabled_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.fipsEnabledInput"></a>

```python
fips_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: GoogleLookerInstanceMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `oauth_config_input`<sup>Optional</sup> <a name="oauth_config_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.oauthConfigInput"></a>

```python
oauth_config_input: GoogleLookerInstanceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a>

---

##### `platform_edition_input`<sup>Optional</sup> <a name="platform_edition_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.platformEditionInput"></a>

```python
platform_edition_input: str
```

- *Type:* str

---

##### `private_ip_enabled_input`<sup>Optional</sup> <a name="private_ip_enabled_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.privateIpEnabledInput"></a>

```python
private_ip_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `psc_config_input`<sup>Optional</sup> <a name="psc_config_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscConfigInput"></a>

```python
psc_config_input: GoogleLookerInstancePscConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a>

---

##### `psc_enabled_input`<sup>Optional</sup> <a name="psc_enabled_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscEnabledInput"></a>

```python
psc_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `public_ip_enabled_input`<sup>Optional</sup> <a name="public_ip_enabled_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.publicIpEnabledInput"></a>

```python
public_ip_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `reserved_range_input`<sup>Optional</sup> <a name="reserved_range_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.reservedRangeInput"></a>

```python
reserved_range_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleLookerInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a>]

---

##### `user_metadata_input`<sup>Optional</sup> <a name="user_metadata_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.userMetadataInput"></a>

```python
user_metadata_input: GoogleLookerInstanceUserMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a>

---

##### `consumer_network`<sup>Required</sup> <a name="consumer_network" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.consumerNetwork"></a>

```python
consumer_network: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `fips_enabled`<sup>Required</sup> <a name="fips_enabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.fipsEnabled"></a>

```python
fips_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `platform_edition`<sup>Required</sup> <a name="platform_edition" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.platformEdition"></a>

```python
platform_edition: str
```

- *Type:* str

---

##### `private_ip_enabled`<sup>Required</sup> <a name="private_ip_enabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.privateIpEnabled"></a>

```python
private_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `psc_enabled`<sup>Required</sup> <a name="psc_enabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.pscEnabled"></a>

```python
psc_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `public_ip_enabled`<sup>Required</sup> <a name="public_ip_enabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.publicIpEnabled"></a>

```python
public_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `reserved_range`<sup>Required</sup> <a name="reserved_range" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.reservedRange"></a>

```python
reserved_range: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLookerInstanceAdminSettings <a name="GoogleLookerInstanceAdminSettings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceAdminSettings(
  allowed_email_domains: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings.property.allowedEmailDomains">allowed_email_domains</a></code> | <code>typing.List[str]</code> | Email domain allowlist for the instance. |

---

##### `allowed_email_domains`<sup>Optional</sup> <a name="allowed_email_domains" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings.property.allowedEmailDomains"></a>

```python
allowed_email_domains: typing.List[str]
```

- *Type:* typing.List[str]

Email domain allowlist for the instance.

Define the email domains to which your users can deliver Looker (Google Cloud core) content.
Updating this list will restart the instance. Updating the allowed email domains from terraform
means the value provided will be considered as the entire list and not an amendment to the
existing list of allowed email domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#allowed_email_domains GoogleLookerInstance#allowed_email_domains}

---

### GoogleLookerInstanceConfig <a name="GoogleLookerInstanceConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  oauth_config: GoogleLookerInstanceOauthConfig,
  admin_settings: GoogleLookerInstanceAdminSettings = None,
  consumer_network: str = None,
  custom_domain: GoogleLookerInstanceCustomDomain = None,
  deletion_policy: str = None,
  deny_maintenance_period: GoogleLookerInstanceDenyMaintenancePeriod = None,
  encryption_config: GoogleLookerInstanceEncryptionConfig = None,
  fips_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  maintenance_window: GoogleLookerInstanceMaintenanceWindow = None,
  platform_edition: str = None,
  private_ip_enabled: typing.Union[bool, IResolvable] = None,
  project: str = None,
  psc_config: GoogleLookerInstancePscConfig = None,
  psc_enabled: typing.Union[bool, IResolvable] = None,
  public_ip_enabled: typing.Union[bool, IResolvable] = None,
  region: str = None,
  reserved_range: str = None,
  timeouts: GoogleLookerInstanceTimeouts = None,
  user_metadata: GoogleLookerInstanceUserMetadata = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.name">name</a></code> | <code>str</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.adminSettings">admin_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a></code> | admin_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.consumerNetwork">consumer_network</a></code> | <code>str</code> | Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.customDomain">custom_domain</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a></code> | custom_domain block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Policy to determine if the cluster should be deleted forcefully. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.denyMaintenancePeriod">deny_maintenance_period</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a></code> | deny_maintenance_period block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.fipsEnabled">fips_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | FIPS 140-2 Encryption enablement for Looker (Google Cloud Core). |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#id GoogleLookerInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.platformEdition">platform_edition</a></code> | <code>str</code> | Platform editions for a Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.privateIpEnabled">private_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether private IP is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#project GoogleLookerInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.pscConfig">psc_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.pscEnabled">psc_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Public Service Connect (PSC) is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.publicIpEnabled">public_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether public IP is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.region">region</a></code> | <code>str</code> | The name of the Looker region of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.reservedRange">reserved_range</a></code> | <code>str</code> | Name of a reserved IP address range within the consumer network, to be used for private service access connection. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.userMetadata">user_metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a></code> | user_metadata block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#name GoogleLookerInstance#name}

---

##### `oauth_config`<sup>Required</sup> <a name="oauth_config" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.oauthConfig"></a>

```python
oauth_config: GoogleLookerInstanceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#oauth_config GoogleLookerInstance#oauth_config}

---

##### `admin_settings`<sup>Optional</sup> <a name="admin_settings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.adminSettings"></a>

```python
admin_settings: GoogleLookerInstanceAdminSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a>

admin_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#admin_settings GoogleLookerInstance#admin_settings}

---

##### `consumer_network`<sup>Optional</sup> <a name="consumer_network" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.consumerNetwork"></a>

```python
consumer_network: str
```

- *Type:* str

Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#consumer_network GoogleLookerInstance#consumer_network}

---

##### `custom_domain`<sup>Optional</sup> <a name="custom_domain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.customDomain"></a>

```python
custom_domain: GoogleLookerInstanceCustomDomain
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#custom_domain GoogleLookerInstance#custom_domain}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Policy to determine if the cluster should be deleted forcefully.

If setting deletion_policy = "FORCE", the Looker instance will be deleted regardless
of its nested resources. If set to "DEFAULT", Looker instances that still have
nested resources will return an error. Possible values: DEFAULT, FORCE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#deletion_policy GoogleLookerInstance#deletion_policy}

---

##### `deny_maintenance_period`<sup>Optional</sup> <a name="deny_maintenance_period" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.denyMaintenancePeriod"></a>

```python
deny_maintenance_period: GoogleLookerInstanceDenyMaintenancePeriod
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a>

deny_maintenance_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#deny_maintenance_period GoogleLookerInstance#deny_maintenance_period}

---

##### `encryption_config`<sup>Optional</sup> <a name="encryption_config" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.encryptionConfig"></a>

```python
encryption_config: GoogleLookerInstanceEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#encryption_config GoogleLookerInstance#encryption_config}

---

##### `fips_enabled`<sup>Optional</sup> <a name="fips_enabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.fipsEnabled"></a>

```python
fips_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

FIPS 140-2 Encryption enablement for Looker (Google Cloud Core).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#fips_enabled GoogleLookerInstance#fips_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#id GoogleLookerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.maintenanceWindow"></a>

```python
maintenance_window: GoogleLookerInstanceMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#maintenance_window GoogleLookerInstance#maintenance_window}

---

##### `platform_edition`<sup>Optional</sup> <a name="platform_edition" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.platformEdition"></a>

```python
platform_edition: str
```

- *Type:* str

Platform editions for a Looker instance.

Each edition maps to a set of instance features, like its size. Must be one of these values:

* LOOKER_CORE_TRIAL: trial instance (Currently Unavailable)
* LOOKER_CORE_STANDARD: pay as you go standard instance (Currently Unavailable)
* LOOKER_CORE_STANDARD_ANNUAL: subscription standard instance
* LOOKER_CORE_ENTERPRISE_ANNUAL: subscription enterprise instance
* LOOKER_CORE_EMBED_ANNUAL: subscription embed instance
* LOOKER_CORE_NONPROD_STANDARD_ANNUAL: nonprod subscription standard instance
* LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL: nonprod subscription enterprise instance
* LOOKER_CORE_NONPROD_EMBED_ANNUAL: nonprod subscription embed instance Default value: "LOOKER_CORE_TRIAL" Possible values: ["LOOKER_CORE_TRIAL", "LOOKER_CORE_STANDARD", "LOOKER_CORE_STANDARD_ANNUAL", "LOOKER_CORE_ENTERPRISE_ANNUAL", "LOOKER_CORE_EMBED_ANNUAL", "LOOKER_CORE_NONPROD_STANDARD_ANNUAL", "LOOKER_CORE_NONPROD_ENTERPRISE_ANNUAL", "LOOKER_CORE_NONPROD_EMBED_ANNUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#platform_edition GoogleLookerInstance#platform_edition}

---

##### `private_ip_enabled`<sup>Optional</sup> <a name="private_ip_enabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.privateIpEnabled"></a>

```python
private_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether private IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#private_ip_enabled GoogleLookerInstance#private_ip_enabled}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#project GoogleLookerInstance#project}.

---

##### `psc_config`<sup>Optional</sup> <a name="psc_config" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.pscConfig"></a>

```python
psc_config: GoogleLookerInstancePscConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#psc_config GoogleLookerInstance#psc_config}

---

##### `psc_enabled`<sup>Optional</sup> <a name="psc_enabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.pscEnabled"></a>

```python
psc_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Public Service Connect (PSC) is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#psc_enabled GoogleLookerInstance#psc_enabled}

---

##### `public_ip_enabled`<sup>Optional</sup> <a name="public_ip_enabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.publicIpEnabled"></a>

```python
public_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether public IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#public_ip_enabled GoogleLookerInstance#public_ip_enabled}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The name of the Looker region of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#region GoogleLookerInstance#region}

---

##### `reserved_range`<sup>Optional</sup> <a name="reserved_range" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.reservedRange"></a>

```python
reserved_range: str
```

- *Type:* str

Name of a reserved IP address range within the consumer network, to be used for private service access connection.

User may or may not specify this in a request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#reserved_range GoogleLookerInstance#reserved_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.timeouts"></a>

```python
timeouts: GoogleLookerInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#timeouts GoogleLookerInstance#timeouts}

---

##### `user_metadata`<sup>Optional</sup> <a name="user_metadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.userMetadata"></a>

```python
user_metadata: GoogleLookerInstanceUserMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a>

user_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#user_metadata GoogleLookerInstance#user_metadata}

---

### GoogleLookerInstanceCustomDomain <a name="GoogleLookerInstanceCustomDomain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceCustomDomain(
  domain: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain.property.domain">domain</a></code> | <code>str</code> | Domain name. |

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain.property.domain"></a>

```python
domain: str
```

- *Type:* str

Domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#domain GoogleLookerInstance#domain}

---

### GoogleLookerInstanceDenyMaintenancePeriod <a name="GoogleLookerInstanceDenyMaintenancePeriod" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod(
  end_date: GoogleLookerInstanceDenyMaintenancePeriodEndDate,
  start_date: GoogleLookerInstanceDenyMaintenancePeriodStartDate,
  time: GoogleLookerInstanceDenyMaintenancePeriodTime
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.endDate">end_date</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a></code> | end_date block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.startDate">start_date</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a></code> | start_date block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.time">time</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a></code> | time block. |

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.endDate"></a>

```python
end_date: GoogleLookerInstanceDenyMaintenancePeriodEndDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#end_date GoogleLookerInstance#end_date}

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.startDate"></a>

```python
start_date: GoogleLookerInstanceDenyMaintenancePeriodStartDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#start_date GoogleLookerInstance#start_date}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.time"></a>

```python
time: GoogleLookerInstanceDenyMaintenancePeriodTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a>

time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#time GoogleLookerInstance#time}

---

### GoogleLookerInstanceDenyMaintenancePeriodEndDate <a name="GoogleLookerInstanceDenyMaintenancePeriodEndDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate(
  day: typing.Union[int, float] = None,
  month: typing.Union[int, float] = None,
  year: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.day">day</a></code> | <code>typing.Union[int, float]</code> | Day of a month. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.month">month</a></code> | <code>typing.Union[int, float]</code> | Month of a year. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.year">year</a></code> | <code>typing.Union[int, float]</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#day GoogleLookerInstance#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#month GoogleLookerInstance#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#year GoogleLookerInstance#year}

---

### GoogleLookerInstanceDenyMaintenancePeriodStartDate <a name="GoogleLookerInstanceDenyMaintenancePeriodStartDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate(
  day: typing.Union[int, float] = None,
  month: typing.Union[int, float] = None,
  year: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.day">day</a></code> | <code>typing.Union[int, float]</code> | Day of a month. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.month">month</a></code> | <code>typing.Union[int, float]</code> | Month of a year. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.year">year</a></code> | <code>typing.Union[int, float]</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#day GoogleLookerInstance#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#month GoogleLookerInstance#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#year GoogleLookerInstance#year}

---

### GoogleLookerInstanceDenyMaintenancePeriodTime <a name="GoogleLookerInstanceDenyMaintenancePeriodTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#hours GoogleLookerInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#minutes GoogleLookerInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#nanos GoogleLookerInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#seconds GoogleLookerInstance#seconds}

---

### GoogleLookerInstanceEncryptionConfig <a name="GoogleLookerInstanceEncryptionConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceEncryptionConfig(
  kms_key_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Name of the customer managed encryption key (CMEK) in KMS. |

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Name of the customer managed encryption key (CMEK) in KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#kms_key_name GoogleLookerInstance#kms_key_name}

---

### GoogleLookerInstanceMaintenanceWindow <a name="GoogleLookerInstanceMaintenanceWindow" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceMaintenanceWindow(
  day_of_week: str,
  start_time: GoogleLookerInstanceMaintenanceWindowStartTime
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | Required. Day of the week for this MaintenanceWindow (in UTC). |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow.property.startTime">start_time</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

Required. Day of the week for this MaintenanceWindow (in UTC).

* MONDAY: Monday
* TUESDAY: Tuesday
* WEDNESDAY: Wednesday
* THURSDAY: Thursday
* FRIDAY: Friday
* SATURDAY: Saturday
* SUNDAY: Sunday Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#day_of_week GoogleLookerInstance#day_of_week}

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow.property.startTime"></a>

```python
start_time: GoogleLookerInstanceMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#start_time GoogleLookerInstance#start_time}

---

### GoogleLookerInstanceMaintenanceWindowStartTime <a name="GoogleLookerInstanceMaintenanceWindowStartTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#hours GoogleLookerInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#minutes GoogleLookerInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#nanos GoogleLookerInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#seconds GoogleLookerInstance#seconds}

---

### GoogleLookerInstanceOauthConfig <a name="GoogleLookerInstanceOauthConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceOauthConfig(
  client_id: str,
  client_secret: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig.property.clientId">client_id</a></code> | <code>str</code> | The client ID for the Oauth config. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | The client secret for the Oauth config. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID for the Oauth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#client_id GoogleLookerInstance#client_id}

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The client secret for the Oauth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#client_secret GoogleLookerInstance#client_secret}

---

### GoogleLookerInstancePscConfig <a name="GoogleLookerInstancePscConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstancePscConfig(
  allowed_vpcs: typing.List[str] = None,
  service_attachments: typing.Union[IResolvable, typing.List[GoogleLookerInstancePscConfigServiceAttachments]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig.property.allowedVpcs">allowed_vpcs</a></code> | <code>typing.List[str]</code> | List of VPCs that are allowed ingress into the Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig.property.serviceAttachments">service_attachments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments">GoogleLookerInstancePscConfigServiceAttachments</a>]]</code> | service_attachments block. |

---

##### `allowed_vpcs`<sup>Optional</sup> <a name="allowed_vpcs" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig.property.allowedVpcs"></a>

```python
allowed_vpcs: typing.List[str]
```

- *Type:* typing.List[str]

List of VPCs that are allowed ingress into the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#allowed_vpcs GoogleLookerInstance#allowed_vpcs}

---

##### `service_attachments`<sup>Optional</sup> <a name="service_attachments" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig.property.serviceAttachments"></a>

```python
service_attachments: typing.Union[IResolvable, typing.List[GoogleLookerInstancePscConfigServiceAttachments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments">GoogleLookerInstancePscConfigServiceAttachments</a>]]

service_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#service_attachments GoogleLookerInstance#service_attachments}

---

### GoogleLookerInstancePscConfigServiceAttachments <a name="GoogleLookerInstancePscConfigServiceAttachments" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments(
  local_fqdn: str = None,
  target_service_attachment_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments.property.localFqdn">local_fqdn</a></code> | <code>str</code> | Fully qualified domain name that will be used in the private DNS record created for the service attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments.property.targetServiceAttachmentUri">target_service_attachment_uri</a></code> | <code>str</code> | URI of the service attachment to connect to. |

---

##### `local_fqdn`<sup>Optional</sup> <a name="local_fqdn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments.property.localFqdn"></a>

```python
local_fqdn: str
```

- *Type:* str

Fully qualified domain name that will be used in the private DNS record created for the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#local_fqdn GoogleLookerInstance#local_fqdn}

---

##### `target_service_attachment_uri`<sup>Optional</sup> <a name="target_service_attachment_uri" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments.property.targetServiceAttachmentUri"></a>

```python
target_service_attachment_uri: str
```

- *Type:* str

URI of the service attachment to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#target_service_attachment_uri GoogleLookerInstance#target_service_attachment_uri}

---

### GoogleLookerInstanceTimeouts <a name="GoogleLookerInstanceTimeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#create GoogleLookerInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#delete GoogleLookerInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#update GoogleLookerInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#create GoogleLookerInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#delete GoogleLookerInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#update GoogleLookerInstance#update}.

---

### GoogleLookerInstanceUserMetadata <a name="GoogleLookerInstanceUserMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceUserMetadata(
  additional_developer_user_count: typing.Union[int, float] = None,
  additional_standard_user_count: typing.Union[int, float] = None,
  additional_viewer_user_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalDeveloperUserCount">additional_developer_user_count</a></code> | <code>typing.Union[int, float]</code> | Number of additional Developer Users to allocate to the Looker Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalStandardUserCount">additional_standard_user_count</a></code> | <code>typing.Union[int, float]</code> | Number of additional Standard Users to allocate to the Looker Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalViewerUserCount">additional_viewer_user_count</a></code> | <code>typing.Union[int, float]</code> | Number of additional Viewer Users to allocate to the Looker Instance. |

---

##### `additional_developer_user_count`<sup>Optional</sup> <a name="additional_developer_user_count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalDeveloperUserCount"></a>

```python
additional_developer_user_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of additional Developer Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#additional_developer_user_count GoogleLookerInstance#additional_developer_user_count}

---

##### `additional_standard_user_count`<sup>Optional</sup> <a name="additional_standard_user_count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalStandardUserCount"></a>

```python
additional_standard_user_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of additional Standard Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#additional_standard_user_count GoogleLookerInstance#additional_standard_user_count}

---

##### `additional_viewer_user_count`<sup>Optional</sup> <a name="additional_viewer_user_count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalViewerUserCount"></a>

```python
additional_viewer_user_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of additional Viewer Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#additional_viewer_user_count GoogleLookerInstance#additional_viewer_user_count}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLookerInstanceAdminSettingsOutputReference <a name="GoogleLookerInstanceAdminSettingsOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.resetAllowedEmailDomains">reset_allowed_email_domains</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_email_domains` <a name="reset_allowed_email_domains" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.resetAllowedEmailDomains"></a>

```python
def reset_allowed_email_domains() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.allowedEmailDomainsInput">allowed_email_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.allowedEmailDomains">allowed_email_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_email_domains_input`<sup>Optional</sup> <a name="allowed_email_domains_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.allowedEmailDomainsInput"></a>

```python
allowed_email_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_email_domains`<sup>Required</sup> <a name="allowed_email_domains" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.allowedEmailDomains"></a>

```python
allowed_email_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleLookerInstanceAdminSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a>

---


### GoogleLookerInstanceCustomDomainOutputReference <a name="GoogleLookerInstanceCustomDomainOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.resetDomain">reset_domain</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_domain` <a name="reset_domain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.resetDomain"></a>

```python
def reset_domain() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomainOutputReference.property.internalValue"></a>

```python
internal_value: GoogleLookerInstanceCustomDomain
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceCustomDomain">GoogleLookerInstanceCustomDomain</a>

---


### GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference <a name="GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetDay">reset_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetMonth">reset_month</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetYear">reset_year</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day` <a name="reset_day" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetDay"></a>

```python
def reset_day() -> None
```

##### `reset_month` <a name="reset_month" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetMonth"></a>

```python
def reset_month() -> None
```

##### `reset_year` <a name="reset_year" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetYear"></a>

```python
def reset_year() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.dayInput">day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.monthInput">month_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.yearInput">year_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.year">year</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.dayInput"></a>

```python
day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_input`<sup>Optional</sup> <a name="month_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.monthInput"></a>

```python
month_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year_input`<sup>Optional</sup> <a name="year_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.yearInput"></a>

```python
year_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleLookerInstanceDenyMaintenancePeriodEndDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a>

---


### GoogleLookerInstanceDenyMaintenancePeriodOutputReference <a name="GoogleLookerInstanceDenyMaintenancePeriodOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putEndDate">put_end_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putStartDate">put_start_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putTime">put_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_end_date` <a name="put_end_date" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putEndDate"></a>

```python
def put_end_date(
  day: typing.Union[int, float] = None,
  month: typing.Union[int, float] = None,
  year: typing.Union[int, float] = None
) -> None
```

###### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putEndDate.parameter.day"></a>

- *Type:* typing.Union[int, float]

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#day GoogleLookerInstance#day}

---

###### `month`<sup>Optional</sup> <a name="month" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putEndDate.parameter.month"></a>

- *Type:* typing.Union[int, float]

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#month GoogleLookerInstance#month}

---

###### `year`<sup>Optional</sup> <a name="year" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putEndDate.parameter.year"></a>

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#year GoogleLookerInstance#year}

---

##### `put_start_date` <a name="put_start_date" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putStartDate"></a>

```python
def put_start_date(
  day: typing.Union[int, float] = None,
  month: typing.Union[int, float] = None,
  year: typing.Union[int, float] = None
) -> None
```

###### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putStartDate.parameter.day"></a>

- *Type:* typing.Union[int, float]

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#day GoogleLookerInstance#day}

---

###### `month`<sup>Optional</sup> <a name="month" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putStartDate.parameter.month"></a>

- *Type:* typing.Union[int, float]

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#month GoogleLookerInstance#month}

---

###### `year`<sup>Optional</sup> <a name="year" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putStartDate.parameter.year"></a>

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#year GoogleLookerInstance#year}

---

##### `put_time` <a name="put_time" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putTime"></a>

```python
def put_time(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
) -> None
```

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putTime.parameter.hours"></a>

- *Type:* typing.Union[int, float]

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#hours GoogleLookerInstance#hours}

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#minutes GoogleLookerInstance#minutes}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putTime.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#nanos GoogleLookerInstance#nanos}

---

###### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putTime.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#seconds GoogleLookerInstance#seconds}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.endDate">end_date</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference">GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.startDate">start_date</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference">GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.time">time</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference">GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.endDateInput">end_date_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.startDateInput">start_date_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.timeInput">time_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.endDate"></a>

```python
end_date: GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference">GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference</a>

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.startDate"></a>

```python
start_date: GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference">GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference</a>

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.time"></a>

```python
time: GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference">GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference</a>

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.endDateInput"></a>

```python
end_date_input: GoogleLookerInstanceDenyMaintenancePeriodEndDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a>

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.startDateInput"></a>

```python
start_date_input: GoogleLookerInstanceDenyMaintenancePeriodStartDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a>

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.timeInput"></a>

```python
time_input: GoogleLookerInstanceDenyMaintenancePeriodTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.internalValue"></a>

```python
internal_value: GoogleLookerInstanceDenyMaintenancePeriod
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a>

---


### GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference <a name="GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetDay">reset_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetMonth">reset_month</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetYear">reset_year</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day` <a name="reset_day" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetDay"></a>

```python
def reset_day() -> None
```

##### `reset_month` <a name="reset_month" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetMonth"></a>

```python
def reset_month() -> None
```

##### `reset_year` <a name="reset_year" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetYear"></a>

```python
def reset_year() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.dayInput">day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.monthInput">month_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.yearInput">year_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.year">year</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.dayInput"></a>

```python
day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_input`<sup>Optional</sup> <a name="month_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.monthInput"></a>

```python
month_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year_input`<sup>Optional</sup> <a name="year_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.yearInput"></a>

```python
year_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleLookerInstanceDenyMaintenancePeriodStartDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a>

---


### GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference <a name="GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetSeconds">reset_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hours` <a name="reset_hours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```

##### `reset_seconds` <a name="reset_seconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetSeconds"></a>

```python
def reset_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleLookerInstanceDenyMaintenancePeriodTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a>

---


### GoogleLookerInstanceEncryptionConfigOutputReference <a name="GoogleLookerInstanceEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameVersion">kms_key_name_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyState">kms_key_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_version`<sup>Required</sup> <a name="kms_key_name_version" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameVersion"></a>

```python
kms_key_name_version: str
```

- *Type:* str

---

##### `kms_key_state`<sup>Required</sup> <a name="kms_key_state" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyState"></a>

```python
kms_key_state: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleLookerInstanceEncryptionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a>

---


### GoogleLookerInstanceMaintenanceWindowOutputReference <a name="GoogleLookerInstanceMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.putStartTime">put_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_start_time` <a name="put_start_time" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.putStartTime"></a>

```python
def put_start_time(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
) -> None
```

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.putStartTime.parameter.hours"></a>

- *Type:* typing.Union[int, float]

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#hours GoogleLookerInstance#hours}

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.putStartTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#minutes GoogleLookerInstance#minutes}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.putStartTime.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#nanos GoogleLookerInstance#nanos}

---

###### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.putStartTime.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_looker_instance#seconds GoogleLookerInstance#seconds}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.startTime">start_time</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference">GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.startTimeInput">start_time_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.startTime"></a>

```python
start_time: GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference">GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference</a>

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.startTimeInput"></a>

```python
start_time_input: GoogleLookerInstanceMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a>

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: GoogleLookerInstanceMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a>

---


### GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference <a name="GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetSeconds">reset_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hours` <a name="reset_hours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```

##### `reset_seconds` <a name="reset_seconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```python
def reset_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleLookerInstanceMaintenanceWindowStartTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a>

---


### GoogleLookerInstanceOauthConfigOutputReference <a name="GoogleLookerInstanceOauthConfigOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleLookerInstanceOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a>

---


### GoogleLookerInstancePscConfigOutputReference <a name="GoogleLookerInstancePscConfigOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstancePscConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.putServiceAttachments">put_service_attachments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.resetAllowedVpcs">reset_allowed_vpcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.resetServiceAttachments">reset_service_attachments</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_service_attachments` <a name="put_service_attachments" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.putServiceAttachments"></a>

```python
def put_service_attachments(
  value: typing.Union[IResolvable, typing.List[GoogleLookerInstancePscConfigServiceAttachments]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.putServiceAttachments.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments">GoogleLookerInstancePscConfigServiceAttachments</a>]]

---

##### `reset_allowed_vpcs` <a name="reset_allowed_vpcs" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.resetAllowedVpcs"></a>

```python
def reset_allowed_vpcs() -> None
```

##### `reset_service_attachments` <a name="reset_service_attachments" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.resetServiceAttachments"></a>

```python
def reset_service_attachments() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.lookerServiceAttachmentUri">looker_service_attachment_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.serviceAttachments">service_attachments</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList">GoogleLookerInstancePscConfigServiceAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.allowedVpcsInput">allowed_vpcs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.serviceAttachmentsInput">service_attachments_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments">GoogleLookerInstancePscConfigServiceAttachments</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.allowedVpcs">allowed_vpcs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `looker_service_attachment_uri`<sup>Required</sup> <a name="looker_service_attachment_uri" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.lookerServiceAttachmentUri"></a>

```python
looker_service_attachment_uri: str
```

- *Type:* str

---

##### `service_attachments`<sup>Required</sup> <a name="service_attachments" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.serviceAttachments"></a>

```python
service_attachments: GoogleLookerInstancePscConfigServiceAttachmentsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList">GoogleLookerInstancePscConfigServiceAttachmentsList</a>

---

##### `allowed_vpcs_input`<sup>Optional</sup> <a name="allowed_vpcs_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.allowedVpcsInput"></a>

```python
allowed_vpcs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_attachments_input`<sup>Optional</sup> <a name="service_attachments_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.serviceAttachmentsInput"></a>

```python
service_attachments_input: typing.Union[IResolvable, typing.List[GoogleLookerInstancePscConfigServiceAttachments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments">GoogleLookerInstancePscConfigServiceAttachments</a>]]

---

##### `allowed_vpcs`<sup>Required</sup> <a name="allowed_vpcs" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.allowedVpcs"></a>

```python
allowed_vpcs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleLookerInstancePscConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfig">GoogleLookerInstancePscConfig</a>

---


### GoogleLookerInstancePscConfigServiceAttachmentsList <a name="GoogleLookerInstancePscConfigServiceAttachmentsList" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleLookerInstancePscConfigServiceAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments">GoogleLookerInstancePscConfigServiceAttachments</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleLookerInstancePscConfigServiceAttachments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments">GoogleLookerInstancePscConfigServiceAttachments</a>]]

---


### GoogleLookerInstancePscConfigServiceAttachmentsOutputReference <a name="GoogleLookerInstancePscConfigServiceAttachmentsOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.resetLocalFqdn">reset_local_fqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.resetTargetServiceAttachmentUri">reset_target_service_attachment_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_local_fqdn` <a name="reset_local_fqdn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.resetLocalFqdn"></a>

```python
def reset_local_fqdn() -> None
```

##### `reset_target_service_attachment_uri` <a name="reset_target_service_attachment_uri" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.resetTargetServiceAttachmentUri"></a>

```python
def reset_target_service_attachment_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.connectionStatus">connection_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdnInput">local_fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUriInput">target_service_attachment_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdn">local_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUri">target_service_attachment_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments">GoogleLookerInstancePscConfigServiceAttachments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_status`<sup>Required</sup> <a name="connection_status" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.connectionStatus"></a>

```python
connection_status: str
```

- *Type:* str

---

##### `local_fqdn_input`<sup>Optional</sup> <a name="local_fqdn_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdnInput"></a>

```python
local_fqdn_input: str
```

- *Type:* str

---

##### `target_service_attachment_uri_input`<sup>Optional</sup> <a name="target_service_attachment_uri_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUriInput"></a>

```python
target_service_attachment_uri_input: str
```

- *Type:* str

---

##### `local_fqdn`<sup>Required</sup> <a name="local_fqdn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.localFqdn"></a>

```python
local_fqdn: str
```

- *Type:* str

---

##### `target_service_attachment_uri`<sup>Required</sup> <a name="target_service_attachment_uri" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.targetServiceAttachmentUri"></a>

```python
target_service_attachment_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachmentsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleLookerInstancePscConfigServiceAttachments]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstancePscConfigServiceAttachments">GoogleLookerInstancePscConfigServiceAttachments</a>]

---


### GoogleLookerInstanceTimeoutsOutputReference <a name="GoogleLookerInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleLookerInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a>]

---


### GoogleLookerInstanceUserMetadataOutputReference <a name="GoogleLookerInstanceUserMetadataOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_looker_instance

googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalDeveloperUserCount">reset_additional_developer_user_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalStandardUserCount">reset_additional_standard_user_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalViewerUserCount">reset_additional_viewer_user_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_developer_user_count` <a name="reset_additional_developer_user_count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalDeveloperUserCount"></a>

```python
def reset_additional_developer_user_count() -> None
```

##### `reset_additional_standard_user_count` <a name="reset_additional_standard_user_count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalStandardUserCount"></a>

```python
def reset_additional_standard_user_count() -> None
```

##### `reset_additional_viewer_user_count` <a name="reset_additional_viewer_user_count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalViewerUserCount"></a>

```python
def reset_additional_viewer_user_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCountInput">additional_developer_user_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalStandardUserCountInput">additional_standard_user_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalViewerUserCountInput">additional_viewer_user_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCount">additional_developer_user_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalStandardUserCount">additional_standard_user_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalViewerUserCount">additional_viewer_user_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_developer_user_count_input`<sup>Optional</sup> <a name="additional_developer_user_count_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCountInput"></a>

```python
additional_developer_user_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_standard_user_count_input`<sup>Optional</sup> <a name="additional_standard_user_count_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalStandardUserCountInput"></a>

```python
additional_standard_user_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_viewer_user_count_input`<sup>Optional</sup> <a name="additional_viewer_user_count_input" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalViewerUserCountInput"></a>

```python
additional_viewer_user_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_developer_user_count`<sup>Required</sup> <a name="additional_developer_user_count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCount"></a>

```python
additional_developer_user_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_standard_user_count`<sup>Required</sup> <a name="additional_standard_user_count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalStandardUserCount"></a>

```python
additional_standard_user_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_viewer_user_count`<sup>Required</sup> <a name="additional_viewer_user_count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalViewerUserCount"></a>

```python
additional_viewer_user_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.internalValue"></a>

```python
internal_value: GoogleLookerInstanceUserMetadata
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a>

---



