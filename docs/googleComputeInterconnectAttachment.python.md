# `googleComputeInterconnectAttachment` Submodule <a name="`googleComputeInterconnectAttachment` Submodule" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInterconnectAttachment <a name="GoogleComputeInterconnectAttachment" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment google_compute_interconnect_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment

googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment(
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
  router: str,
  admin_enabled: typing.Union[bool, IResolvable] = None,
  bandwidth: str = None,
  candidate_subnets: typing.List[str] = None,
  description: str = None,
  edge_availability_domain: str = None,
  encryption: str = None,
  id: str = None,
  interconnect: str = None,
  ipsec_internal_addresses: typing.List[str] = None,
  mtu: str = None,
  project: str = None,
  region: str = None,
  stack_type: str = None,
  subnet_length: typing.Union[int, float] = None,
  timeouts: GoogleComputeInterconnectAttachmentTimeouts = None,
  type: str = None,
  vlan_tag8021_q: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.router">router</a></code> | <code>str</code> | URL of the cloud router to be used for dynamic routing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.adminEnabled">admin_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the VLAN attachment is enabled or disabled.  When using PARTNER type this will Pre-Activate the interconnect attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.bandwidth">bandwidth</a></code> | <code>str</code> | Provisioned bandwidth capacity for the interconnect attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.candidateSubnets">candidate_subnets</a></code> | <code>typing.List[str]</code> | Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and customerRouterIpAddress for this attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.edgeAvailabilityDomain">edge_availability_domain</a></code> | <code>str</code> | Desired availability domain for the attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.encryption">encryption</a></code> | <code>str</code> | Indicates the user-supplied encryption option of this interconnect attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#id GoogleComputeInterconnectAttachment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.interconnect">interconnect</a></code> | <code>str</code> | URL of the underlying Interconnect object that this attachment's traffic will traverse through. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.ipsecInternalAddresses">ipsec_internal_addresses</a></code> | <code>typing.List[str]</code> | URL of addresses that have been reserved for the interconnect attachment, Used only for interconnect attachment that has the encryption option as IPSEC. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.mtu">mtu</a></code> | <code>str</code> | Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#project GoogleComputeInterconnectAttachment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where the regional interconnect attachment resides. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.stackType">stack_type</a></code> | <code>str</code> | The stack type for this interconnect attachment to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.subnetLength">subnet_length</a></code> | <code>typing.Union[int, float]</code> | Length of the IPv4 subnet mask. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts">GoogleComputeInterconnectAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of InterconnectAttachment you wish to create. Defaults to DEDICATED. Possible values: ["DEDICATED", "PARTNER", "PARTNER_PROVIDER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.vlanTag8021Q">vlan_tag8021_q</a></code> | <code>typing.Union[int, float]</code> | The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When using PARTNER type this will be managed upstream. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is created. The
name must be 1-63 characters long, and comply with RFC1035. Specifically, the
name must be 1-63 characters long and match the regular expression
'[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character must be a
lowercase letter, and all following characters must be a dash, lowercase
letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#name GoogleComputeInterconnectAttachment#name}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.router"></a>

- *Type:* str

URL of the cloud router to be used for dynamic routing.

This router must be in
the same region as this InterconnectAttachment. The InterconnectAttachment will
automatically connect the Interconnect to the network & region within which the
Cloud Router is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#router GoogleComputeInterconnectAttachment#router}

---

##### `admin_enabled`<sup>Optional</sup> <a name="admin_enabled" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.adminEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the VLAN attachment is enabled or disabled.  When using PARTNER type this will Pre-Activate the interconnect attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#admin_enabled GoogleComputeInterconnectAttachment#admin_enabled}

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.bandwidth"></a>

- *Type:* str

Provisioned bandwidth capacity for the interconnect attachment.

For attachments of type DEDICATED, the user can set the bandwidth.
For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth.
Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED,
Defaults to BPS_10G Possible values: ["BPS_50M", "BPS_100M", "BPS_200M", "BPS_300M", "BPS_400M", "BPS_500M", "BPS_1G", "BPS_2G", "BPS_5G", "BPS_10G", "BPS_20G", "BPS_50G", "BPS_100G"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#bandwidth GoogleComputeInterconnectAttachment#bandwidth}

---

##### `candidate_subnets`<sup>Optional</sup> <a name="candidate_subnets" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.candidateSubnets"></a>

- *Type:* typing.List[str]

Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and customerRouterIpAddress for this attachment.

All prefixes must be within link-local address space (169.254.0.0/16)
and must be /29 or shorter (/28, /27, etc). Google will attempt to select
an unused /29 from the supplied candidate prefix(es). The request will
fail if all possible /29s are in use on Google's edge. If not supplied,
Google will randomly select an unused /29 from all of link-local space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#candidate_subnets GoogleComputeInterconnectAttachment#candidate_subnets}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#description GoogleComputeInterconnectAttachment#description}

---

##### `edge_availability_domain`<sup>Optional</sup> <a name="edge_availability_domain" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.edgeAvailabilityDomain"></a>

- *Type:* str

Desired availability domain for the attachment.

Only available for type
PARTNER, at creation time. For improved reliability, customers should
configure a pair of attachments with one per availability domain. The
selected availability domain will be provided to the Partner via the
pairing key so that the provisioned circuit will lie in the specified
domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#edge_availability_domain GoogleComputeInterconnectAttachment#edge_availability_domain}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.encryption"></a>

- *Type:* str

Indicates the user-supplied encryption option of this interconnect attachment.

Can only be specified at attachment creation for PARTNER or
DEDICATED attachments.

* NONE - This is the default value, which means that the VLAN attachment
  carries unencrypted traffic. VMs are able to send traffic to, or receive
  traffic from, such a VLAN attachment.
* IPSEC - The VLAN attachment carries only encrypted traffic that is
  encrypted by an IPsec device, such as an HA VPN gateway or third-party
  IPsec VPN. VMs cannot directly send traffic to, or receive traffic from,
  such a VLAN attachment. To use HA VPN over Cloud Interconnect, the VLAN
  attachment must be created with this option. Default value: "NONE" Possible values: ["NONE", "IPSEC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#encryption GoogleComputeInterconnectAttachment#encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#id GoogleComputeInterconnectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnect`<sup>Optional</sup> <a name="interconnect" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.interconnect"></a>

- *Type:* str

URL of the underlying Interconnect object that this attachment's traffic will traverse through.

Required if type is DEDICATED, must not
be set if type is PARTNER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#interconnect GoogleComputeInterconnectAttachment#interconnect}

---

##### `ipsec_internal_addresses`<sup>Optional</sup> <a name="ipsec_internal_addresses" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.ipsecInternalAddresses"></a>

- *Type:* typing.List[str]

URL of addresses that have been reserved for the interconnect attachment, Used only for interconnect attachment that has the encryption option as IPSEC.

The addresses must be RFC 1918 IP address ranges. When creating HA VPN
gateway over the interconnect attachment, if the attachment is configured
to use an RFC 1918 IP address, then the VPN gateway's IP address will be
allocated from the IP address range specified here.
For example, if the HA VPN gateway's interface 0 is paired to this
interconnect attachment, then an RFC 1918 IP address for the VPN gateway
interface 0 will be allocated from the IP address specified for this
interconnect attachment.
If this field is not specified for interconnect attachment that has
encryption option as IPSEC, later on when creating HA VPN gateway on this
interconnect attachment, the HA VPN gateway's IP address will be
allocated from regional external IP address pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#ipsec_internal_addresses GoogleComputeInterconnectAttachment#ipsec_internal_addresses}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.mtu"></a>

- *Type:* str

Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment.

Currently, only 1440 and 1500 are allowed. If not specified, the value will default to 1440.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#mtu GoogleComputeInterconnectAttachment#mtu}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#project GoogleComputeInterconnectAttachment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.region"></a>

- *Type:* str

Region where the regional interconnect attachment resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#region GoogleComputeInterconnectAttachment#region}

---

##### `stack_type`<sup>Optional</sup> <a name="stack_type" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.stackType"></a>

- *Type:* str

The stack type for this interconnect attachment to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.
This field can be both set at interconnect attachments creation and update
interconnect attachment operations. Possible values: ["IPV4_IPV6", "IPV4_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#stack_type GoogleComputeInterconnectAttachment#stack_type}

---

##### `subnet_length`<sup>Optional</sup> <a name="subnet_length" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.subnetLength"></a>

- *Type:* typing.Union[int, float]

Length of the IPv4 subnet mask.

Allowed values: 29 (default), 30. The default value is 29,
except for Cross-Cloud Interconnect connections that use an InterconnectRemoteLocation with a
constraints.subnetLengthRange.min equal to 30. For example, connections that use an Azure
remote location fall into this category. In these cases, the default value is 30, and
requesting 29 returns an error. Where both 29 and 30 are allowed, 29 is preferred, because it
gives Google Cloud Support more debugging visibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#subnet_length GoogleComputeInterconnectAttachment#subnet_length}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts">GoogleComputeInterconnectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#timeouts GoogleComputeInterconnectAttachment#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.type"></a>

- *Type:* str

The type of InterconnectAttachment you wish to create. Defaults to DEDICATED. Possible values: ["DEDICATED", "PARTNER", "PARTNER_PROVIDER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#type GoogleComputeInterconnectAttachment#type}

---

##### `vlan_tag8021_q`<sup>Optional</sup> <a name="vlan_tag8021_q" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.vlanTag8021Q"></a>

- *Type:* typing.Union[int, float]

The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When using PARTNER type this will be managed upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#vlan_tag8021q GoogleComputeInterconnectAttachment#vlan_tag8021q}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetAdminEnabled">reset_admin_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetBandwidth">reset_bandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateSubnets">reset_candidate_subnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetEdgeAvailabilityDomain">reset_edge_availability_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetEncryption">reset_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetInterconnect">reset_interconnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetIpsecInternalAddresses">reset_ipsec_internal_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetMtu">reset_mtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetStackType">reset_stack_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetSubnetLength">reset_subnet_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetVlanTag8021Q">reset_vlan_tag8021_q</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#create GoogleComputeInterconnectAttachment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#delete GoogleComputeInterconnectAttachment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#update GoogleComputeInterconnectAttachment#update}.

---

##### `reset_admin_enabled` <a name="reset_admin_enabled" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetAdminEnabled"></a>

```python
def reset_admin_enabled() -> None
```

##### `reset_bandwidth` <a name="reset_bandwidth" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetBandwidth"></a>

```python
def reset_bandwidth() -> None
```

##### `reset_candidate_subnets` <a name="reset_candidate_subnets" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateSubnets"></a>

```python
def reset_candidate_subnets() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_edge_availability_domain` <a name="reset_edge_availability_domain" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetEdgeAvailabilityDomain"></a>

```python
def reset_edge_availability_domain() -> None
```

##### `reset_encryption` <a name="reset_encryption" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetEncryption"></a>

```python
def reset_encryption() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_interconnect` <a name="reset_interconnect" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetInterconnect"></a>

```python
def reset_interconnect() -> None
```

##### `reset_ipsec_internal_addresses` <a name="reset_ipsec_internal_addresses" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetIpsecInternalAddresses"></a>

```python
def reset_ipsec_internal_addresses() -> None
```

##### `reset_mtu` <a name="reset_mtu" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetMtu"></a>

```python
def reset_mtu() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_stack_type` <a name="reset_stack_type" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetStackType"></a>

```python
def reset_stack_type() -> None
```

##### `reset_subnet_length` <a name="reset_subnet_length" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetSubnetLength"></a>

```python
def reset_subnet_length() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_vlan_tag8021_q` <a name="reset_vlan_tag8021_q" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetVlanTag8021Q"></a>

```python
def reset_vlan_tag8021_q() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeInterconnectAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment

googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment

googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment

googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment

googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeInterconnectAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeInterconnectAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeInterconnectAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInterconnectAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.cloudRouterIpAddress">cloud_router_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.cloudRouterIpv6Address">cloud_router_ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.customerRouterIpAddress">customer_router_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.customerRouterIpv6Address">customer_router_ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.googleReferenceId">google_reference_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.pairingKey">pairing_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.partnerAsn">partner_asn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.privateInterconnectInfo">private_interconnect_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList">GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference">GoogleComputeInterconnectAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.adminEnabledInput">admin_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.bandwidthInput">bandwidth_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateSubnetsInput">candidate_subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.edgeAvailabilityDomainInput">edge_availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.encryptionInput">encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.interconnectInput">interconnect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.ipsecInternalAddressesInput">ipsec_internal_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.mtuInput">mtu_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.routerInput">router_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.stackTypeInput">stack_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.subnetLengthInput">subnet_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts">GoogleComputeInterconnectAttachmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.vlanTag8021QInput">vlan_tag8021_q_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.adminEnabled">admin_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.bandwidth">bandwidth</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateSubnets">candidate_subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.edgeAvailabilityDomain">edge_availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.encryption">encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.interconnect">interconnect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.ipsecInternalAddresses">ipsec_internal_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.mtu">mtu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.router">router</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.stackType">stack_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.subnetLength">subnet_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.vlanTag8021Q">vlan_tag8021_q</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_router_ip_address`<sup>Required</sup> <a name="cloud_router_ip_address" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.cloudRouterIpAddress"></a>

```python
cloud_router_ip_address: str
```

- *Type:* str

---

##### `cloud_router_ipv6_address`<sup>Required</sup> <a name="cloud_router_ipv6_address" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.cloudRouterIpv6Address"></a>

```python
cloud_router_ipv6_address: str
```

- *Type:* str

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `customer_router_ip_address`<sup>Required</sup> <a name="customer_router_ip_address" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.customerRouterIpAddress"></a>

```python
customer_router_ip_address: str
```

- *Type:* str

---

##### `customer_router_ipv6_address`<sup>Required</sup> <a name="customer_router_ipv6_address" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.customerRouterIpv6Address"></a>

```python
customer_router_ipv6_address: str
```

- *Type:* str

---

##### `google_reference_id`<sup>Required</sup> <a name="google_reference_id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.googleReferenceId"></a>

```python
google_reference_id: str
```

- *Type:* str

---

##### `pairing_key`<sup>Required</sup> <a name="pairing_key" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.pairingKey"></a>

```python
pairing_key: str
```

- *Type:* str

---

##### `partner_asn`<sup>Required</sup> <a name="partner_asn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.partnerAsn"></a>

```python
partner_asn: str
```

- *Type:* str

---

##### `private_interconnect_info`<sup>Required</sup> <a name="private_interconnect_info" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.privateInterconnectInfo"></a>

```python
private_interconnect_info: GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList">GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.timeouts"></a>

```python
timeouts: GoogleComputeInterconnectAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference">GoogleComputeInterconnectAttachmentTimeoutsOutputReference</a>

---

##### `admin_enabled_input`<sup>Optional</sup> <a name="admin_enabled_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.adminEnabledInput"></a>

```python
admin_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bandwidth_input`<sup>Optional</sup> <a name="bandwidth_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.bandwidthInput"></a>

```python
bandwidth_input: str
```

- *Type:* str

---

##### `candidate_subnets_input`<sup>Optional</sup> <a name="candidate_subnets_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateSubnetsInput"></a>

```python
candidate_subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `edge_availability_domain_input`<sup>Optional</sup> <a name="edge_availability_domain_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.edgeAvailabilityDomainInput"></a>

```python
edge_availability_domain_input: str
```

- *Type:* str

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.encryptionInput"></a>

```python
encryption_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interconnect_input`<sup>Optional</sup> <a name="interconnect_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.interconnectInput"></a>

```python
interconnect_input: str
```

- *Type:* str

---

##### `ipsec_internal_addresses_input`<sup>Optional</sup> <a name="ipsec_internal_addresses_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.ipsecInternalAddressesInput"></a>

```python
ipsec_internal_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mtu_input`<sup>Optional</sup> <a name="mtu_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.mtuInput"></a>

```python
mtu_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `router_input`<sup>Optional</sup> <a name="router_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.routerInput"></a>

```python
router_input: str
```

- *Type:* str

---

##### `stack_type_input`<sup>Optional</sup> <a name="stack_type_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.stackTypeInput"></a>

```python
stack_type_input: str
```

- *Type:* str

---

##### `subnet_length_input`<sup>Optional</sup> <a name="subnet_length_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.subnetLengthInput"></a>

```python
subnet_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeInterconnectAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts">GoogleComputeInterconnectAttachmentTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vlan_tag8021_q_input`<sup>Optional</sup> <a name="vlan_tag8021_q_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.vlanTag8021QInput"></a>

```python
vlan_tag8021_q_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `admin_enabled`<sup>Required</sup> <a name="admin_enabled" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.adminEnabled"></a>

```python
admin_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.bandwidth"></a>

```python
bandwidth: str
```

- *Type:* str

---

##### `candidate_subnets`<sup>Required</sup> <a name="candidate_subnets" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateSubnets"></a>

```python
candidate_subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `edge_availability_domain`<sup>Required</sup> <a name="edge_availability_domain" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.edgeAvailabilityDomain"></a>

```python
edge_availability_domain: str
```

- *Type:* str

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.encryption"></a>

```python
encryption: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interconnect`<sup>Required</sup> <a name="interconnect" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.interconnect"></a>

```python
interconnect: str
```

- *Type:* str

---

##### `ipsec_internal_addresses`<sup>Required</sup> <a name="ipsec_internal_addresses" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.ipsecInternalAddresses"></a>

```python
ipsec_internal_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.mtu"></a>

```python
mtu: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.router"></a>

```python
router: str
```

- *Type:* str

---

##### `stack_type`<sup>Required</sup> <a name="stack_type" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.stackType"></a>

```python
stack_type: str
```

- *Type:* str

---

##### `subnet_length`<sup>Required</sup> <a name="subnet_length" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.subnetLength"></a>

```python
subnet_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vlan_tag8021_q`<sup>Required</sup> <a name="vlan_tag8021_q" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.vlanTag8021Q"></a>

```python
vlan_tag8021_q: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInterconnectAttachmentConfig <a name="GoogleComputeInterconnectAttachmentConfig" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment

googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  router: str,
  admin_enabled: typing.Union[bool, IResolvable] = None,
  bandwidth: str = None,
  candidate_subnets: typing.List[str] = None,
  description: str = None,
  edge_availability_domain: str = None,
  encryption: str = None,
  id: str = None,
  interconnect: str = None,
  ipsec_internal_addresses: typing.List[str] = None,
  mtu: str = None,
  project: str = None,
  region: str = None,
  stack_type: str = None,
  subnet_length: typing.Union[int, float] = None,
  timeouts: GoogleComputeInterconnectAttachmentTimeouts = None,
  type: str = None,
  vlan_tag8021_q: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.router">router</a></code> | <code>str</code> | URL of the cloud router to be used for dynamic routing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.adminEnabled">admin_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the VLAN attachment is enabled or disabled.  When using PARTNER type this will Pre-Activate the interconnect attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.bandwidth">bandwidth</a></code> | <code>str</code> | Provisioned bandwidth capacity for the interconnect attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateSubnets">candidate_subnets</a></code> | <code>typing.List[str]</code> | Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and customerRouterIpAddress for this attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.edgeAvailabilityDomain">edge_availability_domain</a></code> | <code>str</code> | Desired availability domain for the attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.encryption">encryption</a></code> | <code>str</code> | Indicates the user-supplied encryption option of this interconnect attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#id GoogleComputeInterconnectAttachment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.interconnect">interconnect</a></code> | <code>str</code> | URL of the underlying Interconnect object that this attachment's traffic will traverse through. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.ipsecInternalAddresses">ipsec_internal_addresses</a></code> | <code>typing.List[str]</code> | URL of addresses that have been reserved for the interconnect attachment, Used only for interconnect attachment that has the encryption option as IPSEC. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.mtu">mtu</a></code> | <code>str</code> | Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#project GoogleComputeInterconnectAttachment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.region">region</a></code> | <code>str</code> | Region where the regional interconnect attachment resides. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.stackType">stack_type</a></code> | <code>str</code> | The stack type for this interconnect attachment to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.subnetLength">subnet_length</a></code> | <code>typing.Union[int, float]</code> | Length of the IPv4 subnet mask. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts">GoogleComputeInterconnectAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.type">type</a></code> | <code>str</code> | The type of InterconnectAttachment you wish to create. Defaults to DEDICATED. Possible values: ["DEDICATED", "PARTNER", "PARTNER_PROVIDER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.vlanTag8021Q">vlan_tag8021_q</a></code> | <code>typing.Union[int, float]</code> | The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When using PARTNER type this will be managed upstream. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is created. The
name must be 1-63 characters long, and comply with RFC1035. Specifically, the
name must be 1-63 characters long and match the regular expression
'[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character must be a
lowercase letter, and all following characters must be a dash, lowercase
letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#name GoogleComputeInterconnectAttachment#name}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.router"></a>

```python
router: str
```

- *Type:* str

URL of the cloud router to be used for dynamic routing.

This router must be in
the same region as this InterconnectAttachment. The InterconnectAttachment will
automatically connect the Interconnect to the network & region within which the
Cloud Router is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#router GoogleComputeInterconnectAttachment#router}

---

##### `admin_enabled`<sup>Optional</sup> <a name="admin_enabled" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.adminEnabled"></a>

```python
admin_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the VLAN attachment is enabled or disabled.  When using PARTNER type this will Pre-Activate the interconnect attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#admin_enabled GoogleComputeInterconnectAttachment#admin_enabled}

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.bandwidth"></a>

```python
bandwidth: str
```

- *Type:* str

Provisioned bandwidth capacity for the interconnect attachment.

For attachments of type DEDICATED, the user can set the bandwidth.
For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth.
Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED,
Defaults to BPS_10G Possible values: ["BPS_50M", "BPS_100M", "BPS_200M", "BPS_300M", "BPS_400M", "BPS_500M", "BPS_1G", "BPS_2G", "BPS_5G", "BPS_10G", "BPS_20G", "BPS_50G", "BPS_100G"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#bandwidth GoogleComputeInterconnectAttachment#bandwidth}

---

##### `candidate_subnets`<sup>Optional</sup> <a name="candidate_subnets" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateSubnets"></a>

```python
candidate_subnets: typing.List[str]
```

- *Type:* typing.List[str]

Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and customerRouterIpAddress for this attachment.

All prefixes must be within link-local address space (169.254.0.0/16)
and must be /29 or shorter (/28, /27, etc). Google will attempt to select
an unused /29 from the supplied candidate prefix(es). The request will
fail if all possible /29s are in use on Google's edge. If not supplied,
Google will randomly select an unused /29 from all of link-local space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#candidate_subnets GoogleComputeInterconnectAttachment#candidate_subnets}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#description GoogleComputeInterconnectAttachment#description}

---

##### `edge_availability_domain`<sup>Optional</sup> <a name="edge_availability_domain" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.edgeAvailabilityDomain"></a>

```python
edge_availability_domain: str
```

- *Type:* str

Desired availability domain for the attachment.

Only available for type
PARTNER, at creation time. For improved reliability, customers should
configure a pair of attachments with one per availability domain. The
selected availability domain will be provided to the Partner via the
pairing key so that the provisioned circuit will lie in the specified
domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#edge_availability_domain GoogleComputeInterconnectAttachment#edge_availability_domain}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.encryption"></a>

```python
encryption: str
```

- *Type:* str

Indicates the user-supplied encryption option of this interconnect attachment.

Can only be specified at attachment creation for PARTNER or
DEDICATED attachments.

* NONE - This is the default value, which means that the VLAN attachment
  carries unencrypted traffic. VMs are able to send traffic to, or receive
  traffic from, such a VLAN attachment.
* IPSEC - The VLAN attachment carries only encrypted traffic that is
  encrypted by an IPsec device, such as an HA VPN gateway or third-party
  IPsec VPN. VMs cannot directly send traffic to, or receive traffic from,
  such a VLAN attachment. To use HA VPN over Cloud Interconnect, the VLAN
  attachment must be created with this option. Default value: "NONE" Possible values: ["NONE", "IPSEC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#encryption GoogleComputeInterconnectAttachment#encryption}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#id GoogleComputeInterconnectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnect`<sup>Optional</sup> <a name="interconnect" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.interconnect"></a>

```python
interconnect: str
```

- *Type:* str

URL of the underlying Interconnect object that this attachment's traffic will traverse through.

Required if type is DEDICATED, must not
be set if type is PARTNER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#interconnect GoogleComputeInterconnectAttachment#interconnect}

---

##### `ipsec_internal_addresses`<sup>Optional</sup> <a name="ipsec_internal_addresses" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.ipsecInternalAddresses"></a>

```python
ipsec_internal_addresses: typing.List[str]
```

- *Type:* typing.List[str]

URL of addresses that have been reserved for the interconnect attachment, Used only for interconnect attachment that has the encryption option as IPSEC.

The addresses must be RFC 1918 IP address ranges. When creating HA VPN
gateway over the interconnect attachment, if the attachment is configured
to use an RFC 1918 IP address, then the VPN gateway's IP address will be
allocated from the IP address range specified here.
For example, if the HA VPN gateway's interface 0 is paired to this
interconnect attachment, then an RFC 1918 IP address for the VPN gateway
interface 0 will be allocated from the IP address specified for this
interconnect attachment.
If this field is not specified for interconnect attachment that has
encryption option as IPSEC, later on when creating HA VPN gateway on this
interconnect attachment, the HA VPN gateway's IP address will be
allocated from regional external IP address pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#ipsec_internal_addresses GoogleComputeInterconnectAttachment#ipsec_internal_addresses}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.mtu"></a>

```python
mtu: str
```

- *Type:* str

Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment.

Currently, only 1440 and 1500 are allowed. If not specified, the value will default to 1440.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#mtu GoogleComputeInterconnectAttachment#mtu}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#project GoogleComputeInterconnectAttachment#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where the regional interconnect attachment resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#region GoogleComputeInterconnectAttachment#region}

---

##### `stack_type`<sup>Optional</sup> <a name="stack_type" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.stackType"></a>

```python
stack_type: str
```

- *Type:* str

The stack type for this interconnect attachment to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.
This field can be both set at interconnect attachments creation and update
interconnect attachment operations. Possible values: ["IPV4_IPV6", "IPV4_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#stack_type GoogleComputeInterconnectAttachment#stack_type}

---

##### `subnet_length`<sup>Optional</sup> <a name="subnet_length" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.subnetLength"></a>

```python
subnet_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Length of the IPv4 subnet mask.

Allowed values: 29 (default), 30. The default value is 29,
except for Cross-Cloud Interconnect connections that use an InterconnectRemoteLocation with a
constraints.subnetLengthRange.min equal to 30. For example, connections that use an Azure
remote location fall into this category. In these cases, the default value is 30, and
requesting 29 returns an error. Where both 29 and 30 are allowed, 29 is preferred, because it
gives Google Cloud Support more debugging visibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#subnet_length GoogleComputeInterconnectAttachment#subnet_length}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeInterconnectAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts">GoogleComputeInterconnectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#timeouts GoogleComputeInterconnectAttachment#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of InterconnectAttachment you wish to create. Defaults to DEDICATED. Possible values: ["DEDICATED", "PARTNER", "PARTNER_PROVIDER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#type GoogleComputeInterconnectAttachment#type}

---

##### `vlan_tag8021_q`<sup>Optional</sup> <a name="vlan_tag8021_q" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.vlanTag8021Q"></a>

```python
vlan_tag8021_q: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When using PARTNER type this will be managed upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#vlan_tag8021q GoogleComputeInterconnectAttachment#vlan_tag8021q}

---

### GoogleComputeInterconnectAttachmentPrivateInterconnectInfo <a name="GoogleComputeInterconnectAttachmentPrivateInterconnectInfo" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment

googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfo()
```


### GoogleComputeInterconnectAttachmentTimeouts <a name="GoogleComputeInterconnectAttachmentTimeouts" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment

googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#create GoogleComputeInterconnectAttachment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#delete GoogleComputeInterconnectAttachment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#update GoogleComputeInterconnectAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#create GoogleComputeInterconnectAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#delete GoogleComputeInterconnectAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_interconnect_attachment#update GoogleComputeInterconnectAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList <a name="GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment

googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference <a name="GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment

googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.tag8021Q">tag8021_q</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfo">GoogleComputeInterconnectAttachmentPrivateInterconnectInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tag8021_q`<sup>Required</sup> <a name="tag8021_q" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.tag8021Q"></a>

```python
tag8021_q: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeInterconnectAttachmentPrivateInterconnectInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfo">GoogleComputeInterconnectAttachmentPrivateInterconnectInfo</a>

---


### GoogleComputeInterconnectAttachmentTimeoutsOutputReference <a name="GoogleComputeInterconnectAttachmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_interconnect_attachment

googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts">GoogleComputeInterconnectAttachmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeInterconnectAttachmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts">GoogleComputeInterconnectAttachmentTimeouts</a>]

---



