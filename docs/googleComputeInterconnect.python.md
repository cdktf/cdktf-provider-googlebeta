# `googleComputeInterconnect` Submodule <a name="`googleComputeInterconnect` Submodule" id="@cdktf/provider-google-beta.googleComputeInterconnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInterconnect <a name="GoogleComputeInterconnect" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect google_compute_interconnect}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect

googleComputeInterconnect.GoogleComputeInterconnect(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  interconnect_type: str,
  link_type: str,
  name: str,
  requested_link_count: typing.Union[int, float],
  admin_enabled: typing.Union[bool, IResolvable] = None,
  customer_name: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  macsec: GoogleComputeInterconnectMacsec = None,
  macsec_enabled: typing.Union[bool, IResolvable] = None,
  noc_contact_email: str = None,
  project: str = None,
  remote_location: str = None,
  requested_features: typing.List[str] = None,
  timeouts: GoogleComputeInterconnectTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.interconnectType">interconnect_type</a></code> | <code>str</code> | Type of interconnect. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.linkType">link_type</a></code> | <code>str</code> | Type of link requested. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.requestedLinkCount">requested_link_count</a></code> | <code>typing.Union[int, float]</code> | Target number of physical links in the link bundle, as requested by the customer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.adminEnabled">admin_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Administrative status of the interconnect. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.customerName">customer_name</a></code> | <code>str</code> | Customer name, to put in the Letter of Authorization as the party authorized to request a crossconnect. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#id GoogleComputeInterconnect#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.location">location</a></code> | <code>str</code> | URL of the InterconnectLocation object that represents where this connection is to be provisioned. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.macsec">macsec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec">GoogleComputeInterconnectMacsec</a></code> | macsec block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.macsecEnabled">macsec_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or disable MACsec on this Interconnect connection. MACsec enablement fails if the MACsec object is not specified. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.nocContactEmail">noc_contact_email</a></code> | <code>str</code> | Email address to contact the customer NOC for operations and maintenance notifications regarding this Interconnect. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#project GoogleComputeInterconnect#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.remoteLocation">remote_location</a></code> | <code>str</code> | Indicates that this is a Cross-Cloud Interconnect. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.requestedFeatures">requested_features</a></code> | <code>typing.List[str]</code> | interconnects.list of features requested for this Interconnect connection. Options: IF_MACSEC ( If specified then the connection is created on MACsec capable hardware ports. If not specified, the default value is false, which allocates non-MACsec capable ports first if available). Note that MACSEC is still technically allowed for compatibility reasons, but it does not work with the API, and will be removed in an upcoming major version. Possible values: ["MACSEC", "IF_MACSEC"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts">GoogleComputeInterconnectTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `interconnect_type`<sup>Required</sup> <a name="interconnect_type" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.interconnectType"></a>

- *Type:* str

Type of interconnect.

Note that a value IT_PRIVATE has been deprecated in favor of DEDICATED.
Can take one of the following values:

* PARTNER: A partner-managed interconnection shared between customers though a partner.
* DEDICATED: A dedicated physical interconnection with the customer. Possible values: ["DEDICATED", "PARTNER", "IT_PRIVATE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#interconnect_type GoogleComputeInterconnect#interconnect_type}

---

##### `link_type`<sup>Required</sup> <a name="link_type" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.linkType"></a>

- *Type:* str

Type of link requested.

Note that this field indicates the speed of each of the links in the
bundle, not the speed of the entire bundle. Can take one of the following values:

* LINK_TYPE_ETHERNET_10G_LR: A 10G Ethernet with LR optics.
* LINK_TYPE_ETHERNET_100G_LR: A 100G Ethernet with LR optics. Possible values: ["LINK_TYPE_ETHERNET_10G_LR", "LINK_TYPE_ETHERNET_100G_LR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#link_type GoogleComputeInterconnect#link_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#name GoogleComputeInterconnect#name}

---

##### `requested_link_count`<sup>Required</sup> <a name="requested_link_count" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.requestedLinkCount"></a>

- *Type:* typing.Union[int, float]

Target number of physical links in the link bundle, as requested by the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#requested_link_count GoogleComputeInterconnect#requested_link_count}

---

##### `admin_enabled`<sup>Optional</sup> <a name="admin_enabled" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.adminEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Administrative status of the interconnect.

When this is set to true, the Interconnect is
functional and can carry traffic. When set to false, no packets can be carried over the
interconnect and no BGP routes are exchanged over it. By default, the status is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#admin_enabled GoogleComputeInterconnect#admin_enabled}

---

##### `customer_name`<sup>Optional</sup> <a name="customer_name" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.customerName"></a>

- *Type:* str

Customer name, to put in the Letter of Authorization as the party authorized to request a crossconnect.

This field is required for Dedicated and Partner Interconnect, should not be specified
for cross-cloud interconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#customer_name GoogleComputeInterconnect#customer_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#description GoogleComputeInterconnect#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#id GoogleComputeInterconnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels for this resource.

These can only be added or modified by the setLabels
method. Each label key/value pair must comply with RFC1035. Label values may be empty.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#labels GoogleComputeInterconnect#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.location"></a>

- *Type:* str

URL of the InterconnectLocation object that represents where this connection is to be provisioned.

Specifies the location inside Google's Networks, should not be passed in case of cross-cloud interconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#location GoogleComputeInterconnect#location}

---

##### `macsec`<sup>Optional</sup> <a name="macsec" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.macsec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec">GoogleComputeInterconnectMacsec</a>

macsec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#macsec GoogleComputeInterconnect#macsec}

---

##### `macsec_enabled`<sup>Optional</sup> <a name="macsec_enabled" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.macsecEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable MACsec on this Interconnect connection. MACsec enablement fails if the MACsec object is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#macsec_enabled GoogleComputeInterconnect#macsec_enabled}

---

##### `noc_contact_email`<sup>Optional</sup> <a name="noc_contact_email" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.nocContactEmail"></a>

- *Type:* str

Email address to contact the customer NOC for operations and maintenance notifications regarding this Interconnect.

If specified, this will be used for notifications in addition to
all other forms described, such as Cloud Monitoring logs alerting and Cloud Notifications.
This field is required for users who sign up for Cloud Interconnect using workforce identity
federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#noc_contact_email GoogleComputeInterconnect#noc_contact_email}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#project GoogleComputeInterconnect#project}.

---

##### `remote_location`<sup>Optional</sup> <a name="remote_location" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.remoteLocation"></a>

- *Type:* str

Indicates that this is a Cross-Cloud Interconnect.

This field specifies the location outside
of Google's network that the interconnect is connected to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#remote_location GoogleComputeInterconnect#remote_location}

---

##### `requested_features`<sup>Optional</sup> <a name="requested_features" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.requestedFeatures"></a>

- *Type:* typing.List[str]

interconnects.list of features requested for this Interconnect connection. Options: IF_MACSEC ( If specified then the connection is created on MACsec capable hardware ports. If not specified, the default value is false, which allocates non-MACsec capable ports first if available). Note that MACSEC is still technically allowed for compatibility reasons, but it does not work with the API, and will be removed in an upcoming major version. Possible values: ["MACSEC", "IF_MACSEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#requested_features GoogleComputeInterconnect#requested_features}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts">GoogleComputeInterconnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#timeouts GoogleComputeInterconnect#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.putMacsec">put_macsec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetAdminEnabled">reset_admin_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetCustomerName">reset_customer_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetMacsec">reset_macsec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetMacsecEnabled">reset_macsec_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetNocContactEmail">reset_noc_contact_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetRemoteLocation">reset_remote_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetRequestedFeatures">reset_requested_features</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_macsec` <a name="put_macsec" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.putMacsec"></a>

```python
def put_macsec(
  pre_shared_keys: typing.Union[IResolvable, typing.List[GoogleComputeInterconnectMacsecPreSharedKeys]],
  fail_open: typing.Union[bool, IResolvable] = None
) -> None
```

###### `pre_shared_keys`<sup>Required</sup> <a name="pre_shared_keys" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.putMacsec.parameter.preSharedKeys"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys">GoogleComputeInterconnectMacsecPreSharedKeys</a>]]

pre_shared_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#pre_shared_keys GoogleComputeInterconnect#pre_shared_keys}

---

###### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.putMacsec.parameter.failOpen"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the Interconnect connection is configured with a should-secure MACsec security policy, that allows the Google router to fallback to cleartext traffic if the MKA session cannot be established.

By default, the Interconnect
connection is configured with a must-secure security policy that drops all traffic
if the MKA session cannot be established with your router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#fail_open GoogleComputeInterconnect#fail_open}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#create GoogleComputeInterconnect#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#delete GoogleComputeInterconnect#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#update GoogleComputeInterconnect#update}.

---

##### `reset_admin_enabled` <a name="reset_admin_enabled" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetAdminEnabled"></a>

```python
def reset_admin_enabled() -> None
```

##### `reset_customer_name` <a name="reset_customer_name" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetCustomerName"></a>

```python
def reset_customer_name() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_macsec` <a name="reset_macsec" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetMacsec"></a>

```python
def reset_macsec() -> None
```

##### `reset_macsec_enabled` <a name="reset_macsec_enabled" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetMacsecEnabled"></a>

```python
def reset_macsec_enabled() -> None
```

##### `reset_noc_contact_email` <a name="reset_noc_contact_email" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetNocContactEmail"></a>

```python
def reset_noc_contact_email() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_remote_location` <a name="reset_remote_location" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetRemoteLocation"></a>

```python
def reset_remote_location() -> None
```

##### `reset_requested_features` <a name="reset_requested_features" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetRequestedFeatures"></a>

```python
def reset_requested_features() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeInterconnect resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect

googleComputeInterconnect.GoogleComputeInterconnect.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect

googleComputeInterconnect.GoogleComputeInterconnect.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect

googleComputeInterconnect.GoogleComputeInterconnect.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect

googleComputeInterconnect.GoogleComputeInterconnect.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeInterconnect resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeInterconnect to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeInterconnect that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInterconnect to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.availableFeatures">available_features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.circuitInfos">circuit_infos</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList">GoogleComputeInterconnectCircuitInfosList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.expectedOutages">expected_outages</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList">GoogleComputeInterconnectExpectedOutagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.googleIpAddress">google_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.googleReferenceId">google_reference_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.interconnectAttachments">interconnect_attachments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.labelFingerprint">label_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.macsec">macsec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference">GoogleComputeInterconnectMacsecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.operationalStatus">operational_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.peerIpAddress">peer_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.provisionedLinkCount">provisioned_link_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.satisfiesPzs">satisfies_pzs</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference">GoogleComputeInterconnectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.adminEnabledInput">admin_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.customerNameInput">customer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.interconnectTypeInput">interconnect_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.linkTypeInput">link_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.macsecEnabledInput">macsec_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.macsecInput">macsec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec">GoogleComputeInterconnectMacsec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.nocContactEmailInput">noc_contact_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.remoteLocationInput">remote_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.requestedFeaturesInput">requested_features_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.requestedLinkCountInput">requested_link_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts">GoogleComputeInterconnectTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.adminEnabled">admin_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.customerName">customer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.interconnectType">interconnect_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.linkType">link_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.macsecEnabled">macsec_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.nocContactEmail">noc_contact_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.remoteLocation">remote_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.requestedFeatures">requested_features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.requestedLinkCount">requested_link_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `available_features`<sup>Required</sup> <a name="available_features" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.availableFeatures"></a>

```python
available_features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `circuit_infos`<sup>Required</sup> <a name="circuit_infos" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.circuitInfos"></a>

```python
circuit_infos: GoogleComputeInterconnectCircuitInfosList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList">GoogleComputeInterconnectCircuitInfosList</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `expected_outages`<sup>Required</sup> <a name="expected_outages" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.expectedOutages"></a>

```python
expected_outages: GoogleComputeInterconnectExpectedOutagesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList">GoogleComputeInterconnectExpectedOutagesList</a>

---

##### `google_ip_address`<sup>Required</sup> <a name="google_ip_address" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.googleIpAddress"></a>

```python
google_ip_address: str
```

- *Type:* str

---

##### `google_reference_id`<sup>Required</sup> <a name="google_reference_id" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.googleReferenceId"></a>

```python
google_reference_id: str
```

- *Type:* str

---

##### `interconnect_attachments`<sup>Required</sup> <a name="interconnect_attachments" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.interconnectAttachments"></a>

```python
interconnect_attachments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `label_fingerprint`<sup>Required</sup> <a name="label_fingerprint" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.labelFingerprint"></a>

```python
label_fingerprint: str
```

- *Type:* str

---

##### `macsec`<sup>Required</sup> <a name="macsec" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.macsec"></a>

```python
macsec: GoogleComputeInterconnectMacsecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference">GoogleComputeInterconnectMacsecOutputReference</a>

---

##### `operational_status`<sup>Required</sup> <a name="operational_status" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.operationalStatus"></a>

```python
operational_status: str
```

- *Type:* str

---

##### `peer_ip_address`<sup>Required</sup> <a name="peer_ip_address" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.peerIpAddress"></a>

```python
peer_ip_address: str
```

- *Type:* str

---

##### `provisioned_link_count`<sup>Required</sup> <a name="provisioned_link_count" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.provisionedLinkCount"></a>

```python
provisioned_link_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `satisfies_pzs`<sup>Required</sup> <a name="satisfies_pzs" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.satisfiesPzs"></a>

```python
satisfies_pzs: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.timeouts"></a>

```python
timeouts: GoogleComputeInterconnectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference">GoogleComputeInterconnectTimeoutsOutputReference</a>

---

##### `admin_enabled_input`<sup>Optional</sup> <a name="admin_enabled_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.adminEnabledInput"></a>

```python
admin_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `customer_name_input`<sup>Optional</sup> <a name="customer_name_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.customerNameInput"></a>

```python
customer_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interconnect_type_input`<sup>Optional</sup> <a name="interconnect_type_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.interconnectTypeInput"></a>

```python
interconnect_type_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `link_type_input`<sup>Optional</sup> <a name="link_type_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.linkTypeInput"></a>

```python
link_type_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `macsec_enabled_input`<sup>Optional</sup> <a name="macsec_enabled_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.macsecEnabledInput"></a>

```python
macsec_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `macsec_input`<sup>Optional</sup> <a name="macsec_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.macsecInput"></a>

```python
macsec_input: GoogleComputeInterconnectMacsec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec">GoogleComputeInterconnectMacsec</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `noc_contact_email_input`<sup>Optional</sup> <a name="noc_contact_email_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.nocContactEmailInput"></a>

```python
noc_contact_email_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `remote_location_input`<sup>Optional</sup> <a name="remote_location_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.remoteLocationInput"></a>

```python
remote_location_input: str
```

- *Type:* str

---

##### `requested_features_input`<sup>Optional</sup> <a name="requested_features_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.requestedFeaturesInput"></a>

```python
requested_features_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `requested_link_count_input`<sup>Optional</sup> <a name="requested_link_count_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.requestedLinkCountInput"></a>

```python
requested_link_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeInterconnectTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts">GoogleComputeInterconnectTimeouts</a>]

---

##### `admin_enabled`<sup>Required</sup> <a name="admin_enabled" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.adminEnabled"></a>

```python
admin_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `customer_name`<sup>Required</sup> <a name="customer_name" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.customerName"></a>

```python
customer_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interconnect_type`<sup>Required</sup> <a name="interconnect_type" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.interconnectType"></a>

```python
interconnect_type: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `link_type`<sup>Required</sup> <a name="link_type" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.linkType"></a>

```python
link_type: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `macsec_enabled`<sup>Required</sup> <a name="macsec_enabled" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.macsecEnabled"></a>

```python
macsec_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `noc_contact_email`<sup>Required</sup> <a name="noc_contact_email" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.nocContactEmail"></a>

```python
noc_contact_email: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `remote_location`<sup>Required</sup> <a name="remote_location" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.remoteLocation"></a>

```python
remote_location: str
```

- *Type:* str

---

##### `requested_features`<sup>Required</sup> <a name="requested_features" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.requestedFeatures"></a>

```python
requested_features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `requested_link_count`<sup>Required</sup> <a name="requested_link_count" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.requestedLinkCount"></a>

```python
requested_link_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnect.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInterconnectCircuitInfos <a name="GoogleComputeInterconnectCircuitInfos" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfos"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfos.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect

googleComputeInterconnect.GoogleComputeInterconnectCircuitInfos()
```


### GoogleComputeInterconnectConfig <a name="GoogleComputeInterconnectConfig" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect

googleComputeInterconnect.GoogleComputeInterconnectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  interconnect_type: str,
  link_type: str,
  name: str,
  requested_link_count: typing.Union[int, float],
  admin_enabled: typing.Union[bool, IResolvable] = None,
  customer_name: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  macsec: GoogleComputeInterconnectMacsec = None,
  macsec_enabled: typing.Union[bool, IResolvable] = None,
  noc_contact_email: str = None,
  project: str = None,
  remote_location: str = None,
  requested_features: typing.List[str] = None,
  timeouts: GoogleComputeInterconnectTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.interconnectType">interconnect_type</a></code> | <code>str</code> | Type of interconnect. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.linkType">link_type</a></code> | <code>str</code> | Type of link requested. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.requestedLinkCount">requested_link_count</a></code> | <code>typing.Union[int, float]</code> | Target number of physical links in the link bundle, as requested by the customer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.adminEnabled">admin_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Administrative status of the interconnect. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.customerName">customer_name</a></code> | <code>str</code> | Customer name, to put in the Letter of Authorization as the party authorized to request a crossconnect. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#id GoogleComputeInterconnect#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.location">location</a></code> | <code>str</code> | URL of the InterconnectLocation object that represents where this connection is to be provisioned. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.macsec">macsec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec">GoogleComputeInterconnectMacsec</a></code> | macsec block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.macsecEnabled">macsec_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or disable MACsec on this Interconnect connection. MACsec enablement fails if the MACsec object is not specified. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.nocContactEmail">noc_contact_email</a></code> | <code>str</code> | Email address to contact the customer NOC for operations and maintenance notifications regarding this Interconnect. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#project GoogleComputeInterconnect#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.remoteLocation">remote_location</a></code> | <code>str</code> | Indicates that this is a Cross-Cloud Interconnect. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.requestedFeatures">requested_features</a></code> | <code>typing.List[str]</code> | interconnects.list of features requested for this Interconnect connection. Options: IF_MACSEC ( If specified then the connection is created on MACsec capable hardware ports. If not specified, the default value is false, which allocates non-MACsec capable ports first if available). Note that MACSEC is still technically allowed for compatibility reasons, but it does not work with the API, and will be removed in an upcoming major version. Possible values: ["MACSEC", "IF_MACSEC"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts">GoogleComputeInterconnectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `interconnect_type`<sup>Required</sup> <a name="interconnect_type" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.interconnectType"></a>

```python
interconnect_type: str
```

- *Type:* str

Type of interconnect.

Note that a value IT_PRIVATE has been deprecated in favor of DEDICATED.
Can take one of the following values:

* PARTNER: A partner-managed interconnection shared between customers though a partner.
* DEDICATED: A dedicated physical interconnection with the customer. Possible values: ["DEDICATED", "PARTNER", "IT_PRIVATE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#interconnect_type GoogleComputeInterconnect#interconnect_type}

---

##### `link_type`<sup>Required</sup> <a name="link_type" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.linkType"></a>

```python
link_type: str
```

- *Type:* str

Type of link requested.

Note that this field indicates the speed of each of the links in the
bundle, not the speed of the entire bundle. Can take one of the following values:

* LINK_TYPE_ETHERNET_10G_LR: A 10G Ethernet with LR optics.
* LINK_TYPE_ETHERNET_100G_LR: A 100G Ethernet with LR optics. Possible values: ["LINK_TYPE_ETHERNET_10G_LR", "LINK_TYPE_ETHERNET_100G_LR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#link_type GoogleComputeInterconnect#link_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#name GoogleComputeInterconnect#name}

---

##### `requested_link_count`<sup>Required</sup> <a name="requested_link_count" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.requestedLinkCount"></a>

```python
requested_link_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target number of physical links in the link bundle, as requested by the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#requested_link_count GoogleComputeInterconnect#requested_link_count}

---

##### `admin_enabled`<sup>Optional</sup> <a name="admin_enabled" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.adminEnabled"></a>

```python
admin_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Administrative status of the interconnect.

When this is set to true, the Interconnect is
functional and can carry traffic. When set to false, no packets can be carried over the
interconnect and no BGP routes are exchanged over it. By default, the status is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#admin_enabled GoogleComputeInterconnect#admin_enabled}

---

##### `customer_name`<sup>Optional</sup> <a name="customer_name" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.customerName"></a>

```python
customer_name: str
```

- *Type:* str

Customer name, to put in the Letter of Authorization as the party authorized to request a crossconnect.

This field is required for Dedicated and Partner Interconnect, should not be specified
for cross-cloud interconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#customer_name GoogleComputeInterconnect#customer_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#description GoogleComputeInterconnect#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#id GoogleComputeInterconnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels for this resource.

These can only be added or modified by the setLabels
method. Each label key/value pair must comply with RFC1035. Label values may be empty.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#labels GoogleComputeInterconnect#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.location"></a>

```python
location: str
```

- *Type:* str

URL of the InterconnectLocation object that represents where this connection is to be provisioned.

Specifies the location inside Google's Networks, should not be passed in case of cross-cloud interconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#location GoogleComputeInterconnect#location}

---

##### `macsec`<sup>Optional</sup> <a name="macsec" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.macsec"></a>

```python
macsec: GoogleComputeInterconnectMacsec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec">GoogleComputeInterconnectMacsec</a>

macsec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#macsec GoogleComputeInterconnect#macsec}

---

##### `macsec_enabled`<sup>Optional</sup> <a name="macsec_enabled" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.macsecEnabled"></a>

```python
macsec_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable MACsec on this Interconnect connection. MACsec enablement fails if the MACsec object is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#macsec_enabled GoogleComputeInterconnect#macsec_enabled}

---

##### `noc_contact_email`<sup>Optional</sup> <a name="noc_contact_email" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.nocContactEmail"></a>

```python
noc_contact_email: str
```

- *Type:* str

Email address to contact the customer NOC for operations and maintenance notifications regarding this Interconnect.

If specified, this will be used for notifications in addition to
all other forms described, such as Cloud Monitoring logs alerting and Cloud Notifications.
This field is required for users who sign up for Cloud Interconnect using workforce identity
federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#noc_contact_email GoogleComputeInterconnect#noc_contact_email}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#project GoogleComputeInterconnect#project}.

---

##### `remote_location`<sup>Optional</sup> <a name="remote_location" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.remoteLocation"></a>

```python
remote_location: str
```

- *Type:* str

Indicates that this is a Cross-Cloud Interconnect.

This field specifies the location outside
of Google's network that the interconnect is connected to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#remote_location GoogleComputeInterconnect#remote_location}

---

##### `requested_features`<sup>Optional</sup> <a name="requested_features" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.requestedFeatures"></a>

```python
requested_features: typing.List[str]
```

- *Type:* typing.List[str]

interconnects.list of features requested for this Interconnect connection. Options: IF_MACSEC ( If specified then the connection is created on MACsec capable hardware ports. If not specified, the default value is false, which allocates non-MACsec capable ports first if available). Note that MACSEC is still technically allowed for compatibility reasons, but it does not work with the API, and will be removed in an upcoming major version. Possible values: ["MACSEC", "IF_MACSEC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#requested_features GoogleComputeInterconnect#requested_features}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeInterconnectTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts">GoogleComputeInterconnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#timeouts GoogleComputeInterconnect#timeouts}

---

### GoogleComputeInterconnectExpectedOutages <a name="GoogleComputeInterconnectExpectedOutages" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutages.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect

googleComputeInterconnect.GoogleComputeInterconnectExpectedOutages()
```


### GoogleComputeInterconnectMacsec <a name="GoogleComputeInterconnectMacsec" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect

googleComputeInterconnect.GoogleComputeInterconnectMacsec(
  pre_shared_keys: typing.Union[IResolvable, typing.List[GoogleComputeInterconnectMacsecPreSharedKeys]],
  fail_open: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec.property.preSharedKeys">pre_shared_keys</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys">GoogleComputeInterconnectMacsecPreSharedKeys</a>]]</code> | pre_shared_keys block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec.property.failOpen">fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the Interconnect connection is configured with a should-secure MACsec security policy, that allows the Google router to fallback to cleartext traffic if the MKA session cannot be established. |

---

##### `pre_shared_keys`<sup>Required</sup> <a name="pre_shared_keys" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec.property.preSharedKeys"></a>

```python
pre_shared_keys: typing.Union[IResolvable, typing.List[GoogleComputeInterconnectMacsecPreSharedKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys">GoogleComputeInterconnectMacsecPreSharedKeys</a>]]

pre_shared_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#pre_shared_keys GoogleComputeInterconnect#pre_shared_keys}

---

##### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec.property.failOpen"></a>

```python
fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the Interconnect connection is configured with a should-secure MACsec security policy, that allows the Google router to fallback to cleartext traffic if the MKA session cannot be established.

By default, the Interconnect
connection is configured with a must-secure security policy that drops all traffic
if the MKA session cannot be established with your router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#fail_open GoogleComputeInterconnect#fail_open}

---

### GoogleComputeInterconnectMacsecPreSharedKeys <a name="GoogleComputeInterconnectMacsecPreSharedKeys" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect

googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys(
  name: str,
  fail_open: typing.Union[bool, IResolvable] = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys.property.name">name</a></code> | <code>str</code> | A name for this pre-shared key. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys.property.failOpen">fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the Interconnect connection is configured with a should-secure MACsec security policy, that allows the Google router to fallback to cleartext traffic if the MKA session cannot be established. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys.property.startTime">start_time</a></code> | <code>str</code> | A RFC3339 timestamp on or after which the key is valid. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys.property.name"></a>

```python
name: str
```

- *Type:* str

A name for this pre-shared key.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character
must be a lowercase letter, and all following characters must be a dash, lowercase
letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#name GoogleComputeInterconnect#name}

---

##### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys.property.failOpen"></a>

```python
fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the Interconnect connection is configured with a should-secure MACsec security policy, that allows the Google router to fallback to cleartext traffic if the MKA session cannot be established.

By default, the Interconnect
connection is configured with a must-secure security policy that drops all traffic
if the MKA session cannot be established with your router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#fail_open GoogleComputeInterconnect#fail_open}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

A RFC3339 timestamp on or after which the key is valid.

startTime can be in the
future. If the keychain has a single key, startTime can be omitted. If the keychain
has multiple keys, startTime is mandatory for each key. The start times of keys must
be in increasing order. The start times of two consecutive keys must be at least 6
hours apart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#start_time GoogleComputeInterconnect#start_time}

---

### GoogleComputeInterconnectTimeouts <a name="GoogleComputeInterconnectTimeouts" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect

googleComputeInterconnect.GoogleComputeInterconnectTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#create GoogleComputeInterconnect#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#delete GoogleComputeInterconnect#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#update GoogleComputeInterconnect#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#create GoogleComputeInterconnect#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#delete GoogleComputeInterconnect#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_interconnect#update GoogleComputeInterconnect#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInterconnectCircuitInfosList <a name="GoogleComputeInterconnectCircuitInfosList" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect

googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInterconnectCircuitInfosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeInterconnectCircuitInfosOutputReference <a name="GoogleComputeInterconnectCircuitInfosOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect

googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.customerDemarcId">customer_demarc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.googleCircuitId">google_circuit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.googleDemarcId">google_demarc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfos">GoogleComputeInterconnectCircuitInfos</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_demarc_id`<sup>Required</sup> <a name="customer_demarc_id" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.customerDemarcId"></a>

```python
customer_demarc_id: str
```

- *Type:* str

---

##### `google_circuit_id`<sup>Required</sup> <a name="google_circuit_id" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.googleCircuitId"></a>

```python
google_circuit_id: str
```

- *Type:* str

---

##### `google_demarc_id`<sup>Required</sup> <a name="google_demarc_id" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.googleDemarcId"></a>

```python
google_demarc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfosOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInterconnectCircuitInfos
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectCircuitInfos">GoogleComputeInterconnectCircuitInfos</a>

---


### GoogleComputeInterconnectExpectedOutagesList <a name="GoogleComputeInterconnectExpectedOutagesList" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect

googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInterconnectExpectedOutagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeInterconnectExpectedOutagesOutputReference <a name="GoogleComputeInterconnectExpectedOutagesOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect

googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.affectedCircuits">affected_circuits</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.issueType">issue_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutages">GoogleComputeInterconnectExpectedOutages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `affected_circuits`<sup>Required</sup> <a name="affected_circuits" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.affectedCircuits"></a>

```python
affected_circuits: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `issue_type`<sup>Required</sup> <a name="issue_type" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.issueType"></a>

```python
issue_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutagesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInterconnectExpectedOutages
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectExpectedOutages">GoogleComputeInterconnectExpectedOutages</a>

---


### GoogleComputeInterconnectMacsecOutputReference <a name="GoogleComputeInterconnectMacsecOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect

googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.putPreSharedKeys">put_pre_shared_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.resetFailOpen">reset_fail_open</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pre_shared_keys` <a name="put_pre_shared_keys" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.putPreSharedKeys"></a>

```python
def put_pre_shared_keys(
  value: typing.Union[IResolvable, typing.List[GoogleComputeInterconnectMacsecPreSharedKeys]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.putPreSharedKeys.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys">GoogleComputeInterconnectMacsecPreSharedKeys</a>]]

---

##### `reset_fail_open` <a name="reset_fail_open" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.resetFailOpen"></a>

```python
def reset_fail_open() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.preSharedKeys">pre_shared_keys</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList">GoogleComputeInterconnectMacsecPreSharedKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.failOpenInput">fail_open_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.preSharedKeysInput">pre_shared_keys_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys">GoogleComputeInterconnectMacsecPreSharedKeys</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.failOpen">fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec">GoogleComputeInterconnectMacsec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pre_shared_keys`<sup>Required</sup> <a name="pre_shared_keys" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.preSharedKeys"></a>

```python
pre_shared_keys: GoogleComputeInterconnectMacsecPreSharedKeysList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList">GoogleComputeInterconnectMacsecPreSharedKeysList</a>

---

##### `fail_open_input`<sup>Optional</sup> <a name="fail_open_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.failOpenInput"></a>

```python
fail_open_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pre_shared_keys_input`<sup>Optional</sup> <a name="pre_shared_keys_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.preSharedKeysInput"></a>

```python
pre_shared_keys_input: typing.Union[IResolvable, typing.List[GoogleComputeInterconnectMacsecPreSharedKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys">GoogleComputeInterconnectMacsecPreSharedKeys</a>]]

---

##### `fail_open`<sup>Required</sup> <a name="fail_open" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.failOpen"></a>

```python
fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInterconnectMacsec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsec">GoogleComputeInterconnectMacsec</a>

---


### GoogleComputeInterconnectMacsecPreSharedKeysList <a name="GoogleComputeInterconnectMacsecPreSharedKeysList" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect

googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInterconnectMacsecPreSharedKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys">GoogleComputeInterconnectMacsecPreSharedKeys</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeInterconnectMacsecPreSharedKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys">GoogleComputeInterconnectMacsecPreSharedKeys</a>]]

---


### GoogleComputeInterconnectMacsecPreSharedKeysOutputReference <a name="GoogleComputeInterconnectMacsecPreSharedKeysOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect

googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.resetFailOpen">reset_fail_open</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fail_open` <a name="reset_fail_open" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.resetFailOpen"></a>

```python
def reset_fail_open() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpenInput">fail_open_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpen">fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys">GoogleComputeInterconnectMacsecPreSharedKeys</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fail_open_input`<sup>Optional</sup> <a name="fail_open_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpenInput"></a>

```python
fail_open_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `fail_open`<sup>Required</sup> <a name="fail_open" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.failOpen"></a>

```python
fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeysOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeInterconnectMacsecPreSharedKeys]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectMacsecPreSharedKeys">GoogleComputeInterconnectMacsecPreSharedKeys</a>]

---


### GoogleComputeInterconnectTimeoutsOutputReference <a name="GoogleComputeInterconnectTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect

googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts">GoogleComputeInterconnectTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeInterconnectTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInterconnect.GoogleComputeInterconnectTimeouts">GoogleComputeInterconnectTimeouts</a>]

---



