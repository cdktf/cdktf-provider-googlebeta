# `googleComputeSubnetwork` Submodule <a name="`googleComputeSubnetwork` Submodule" id="@cdktf/provider-google-beta.googleComputeSubnetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeSubnetwork <a name="GoogleComputeSubnetwork" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork google_compute_subnetwork}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_subnetwork.GoogleComputeSubnetwork;

GoogleComputeSubnetwork.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .network(java.lang.String)
//  .allowSubnetCidrRoutesOverlap(java.lang.Boolean)
//  .allowSubnetCidrRoutesOverlap(IResolvable)
//  .description(java.lang.String)
//  .externalIpv6Prefix(java.lang.String)
//  .id(java.lang.String)
//  .ipCidrRange(java.lang.String)
//  .ipv6AccessType(java.lang.String)
//  .logConfig(GoogleComputeSubnetworkLogConfig)
//  .privateIpGoogleAccess(java.lang.Boolean)
//  .privateIpGoogleAccess(IResolvable)
//  .privateIpv6GoogleAccess(java.lang.String)
//  .project(java.lang.String)
//  .purpose(java.lang.String)
//  .region(java.lang.String)
//  .reservedInternalRange(java.lang.String)
//  .role(java.lang.String)
//  .secondaryIpRange(IResolvable)
//  .secondaryIpRange(java.util.List<GoogleComputeSubnetworkSecondaryIpRange>)
//  .sendSecondaryIpRangeIfEmpty(java.lang.Boolean)
//  .sendSecondaryIpRangeIfEmpty(IResolvable)
//  .stackType(java.lang.String)
//  .timeouts(GoogleComputeSubnetworkTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the resource, provided by the client when initially creating the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The network this subnet belongs to. Only networks that are in the distributed mode can have subnetworks. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.allowSubnetCidrRoutesOverlap">allowSubnetCidrRoutesOverlap</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Typically packets destined to IPs within the subnetwork range that do not match existing resources are dropped and prevented from leaving the VPC. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.externalIpv6Prefix">externalIpv6Prefix</a></code> | <code>java.lang.String</code> | The range of external IPv6 addresses that are owned by this subnetwork. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#id GoogleComputeSubnetwork#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The range of internal addresses that are owned by this subnetwork. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.ipv6AccessType">ipv6AccessType</a></code> | <code>java.lang.String</code> | The access type of IPv6 address this subnet holds. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfig">GoogleComputeSubnetworkLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.privateIpGoogleAccess">privateIpGoogleAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled, VMs in this subnetwork without external IP addresses can access Google APIs and services by using Private Google Access. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.privateIpv6GoogleAccess">privateIpv6GoogleAccess</a></code> | <code>java.lang.String</code> | The private IPv6 google access type for the VMs in this subnet. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#project GoogleComputeSubnetwork#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.purpose">purpose</a></code> | <code>java.lang.String</code> | The purpose of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The GCP region for this subnetwork. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.reservedInternalRange">reservedInternalRange</a></code> | <code>java.lang.String</code> | The ID of the reserved internal range. Must be prefixed with 'networkconnectivity.googleapis.com' E.g. 'networkconnectivity.googleapis.com/projects/{project}/locations/global/internalRanges/{rangeId}'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | The role of subnetwork. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.secondaryIpRange">secondaryIpRange</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRange">GoogleComputeSubnetworkSecondaryIpRange</a>></code> | secondary_ip_range block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.sendSecondaryIpRangeIfEmpty">sendSecondaryIpRangeIfEmpty</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls the removal behavior of secondary_ip_range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.stackType">stackType</a></code> | <code>java.lang.String</code> | The stack type for this subnet to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeouts">GoogleComputeSubnetworkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the resource, provided by the client when initially creating the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#name GoogleComputeSubnetwork#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The network this subnet belongs to. Only networks that are in the distributed mode can have subnetworks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#network GoogleComputeSubnetwork#network}

---

##### `allowSubnetCidrRoutesOverlap`<sup>Optional</sup> <a name="allowSubnetCidrRoutesOverlap" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.allowSubnetCidrRoutesOverlap"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Typically packets destined to IPs within the subnetwork range that do not match existing resources are dropped and prevented from leaving the VPC.

Setting this field to true will allow these packets to match dynamic routes injected
via BGP even if their destinations match existing subnet ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#allow_subnet_cidr_routes_overlap GoogleComputeSubnetwork#allow_subnet_cidr_routes_overlap}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Provide this property when
you create the resource. This field can be set only at resource
creation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#description GoogleComputeSubnetwork#description}

---

##### `externalIpv6Prefix`<sup>Optional</sup> <a name="externalIpv6Prefix" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.externalIpv6Prefix"></a>

- *Type:* java.lang.String

The range of external IPv6 addresses that are owned by this subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#external_ipv6_prefix GoogleComputeSubnetwork#external_ipv6_prefix}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#id GoogleComputeSubnetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipCidrRange`<sup>Optional</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.ipCidrRange"></a>

- *Type:* java.lang.String

The range of internal addresses that are owned by this subnetwork.

Provide this property when you create the subnetwork. For example,
10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and
non-overlapping within a network. Only IPv4 is supported.
Field is optional when 'reserved_internal_range' is defined, otherwise required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#ip_cidr_range GoogleComputeSubnetwork#ip_cidr_range}

---

##### `ipv6AccessType`<sup>Optional</sup> <a name="ipv6AccessType" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.ipv6AccessType"></a>

- *Type:* java.lang.String

The access type of IPv6 address this subnet holds.

It's immutable and can only be specified during creation
or the first time the subnet is updated into IPV4_IPV6 dual stack. If the ipv6_type is EXTERNAL then this subnet
cannot enable direct path. Possible values: ["EXTERNAL", "INTERNAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#ipv6_access_type GoogleComputeSubnetwork#ipv6_access_type}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfig">GoogleComputeSubnetworkLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#log_config GoogleComputeSubnetwork#log_config}

---

##### `privateIpGoogleAccess`<sup>Optional</sup> <a name="privateIpGoogleAccess" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.privateIpGoogleAccess"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled, VMs in this subnetwork without external IP addresses can access Google APIs and services by using Private Google Access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#private_ip_google_access GoogleComputeSubnetwork#private_ip_google_access}

---

##### `privateIpv6GoogleAccess`<sup>Optional</sup> <a name="privateIpv6GoogleAccess" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.privateIpv6GoogleAccess"></a>

- *Type:* java.lang.String

The private IPv6 google access type for the VMs in this subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#private_ipv6_google_access GoogleComputeSubnetwork#private_ipv6_google_access}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#project GoogleComputeSubnetwork#project}.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.purpose"></a>

- *Type:* java.lang.String

The purpose of the resource.

This field can be either 'PRIVATE', 'REGIONAL_MANAGED_PROXY', 'GLOBAL_MANAGED_PROXY', 'PRIVATE_SERVICE_CONNECT' or 'PRIVATE_NAT'([Beta](https://terraform.io/docs/providers/google/guides/provider_versions.html)).
A subnet with purpose set to 'REGIONAL_MANAGED_PROXY' is a user-created subnetwork that is reserved for regional Envoy-based load balancers.
A subnetwork in a given region with purpose set to 'GLOBAL_MANAGED_PROXY' is a proxy-only subnet and is shared between all the cross-regional Envoy-based load balancers.
A subnetwork with purpose set to 'PRIVATE_SERVICE_CONNECT' reserves the subnet for hosting a Private Service Connect published service.
A subnetwork with purpose set to 'PRIVATE_NAT' is used as source range for Private NAT gateways.
Note that 'REGIONAL_MANAGED_PROXY' is the preferred setting for all regional Envoy load balancers.
If unspecified, the purpose defaults to 'PRIVATE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#purpose GoogleComputeSubnetwork#purpose}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The GCP region for this subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#region GoogleComputeSubnetwork#region}

---

##### `reservedInternalRange`<sup>Optional</sup> <a name="reservedInternalRange" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.reservedInternalRange"></a>

- *Type:* java.lang.String

The ID of the reserved internal range. Must be prefixed with 'networkconnectivity.googleapis.com' E.g. 'networkconnectivity.googleapis.com/projects/{project}/locations/global/internalRanges/{rangeId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#reserved_internal_range GoogleComputeSubnetwork#reserved_internal_range}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.role"></a>

- *Type:* java.lang.String

The role of subnetwork.

Currently, this field is only used when 'purpose' is 'REGIONAL_MANAGED_PROXY'.
The value can be set to 'ACTIVE' or 'BACKUP'.
An 'ACTIVE' subnetwork is one that is currently being used for Envoy-based load balancers in a region.
A 'BACKUP' subnetwork is one that is ready to be promoted to 'ACTIVE' or is currently draining. Possible values: ["ACTIVE", "BACKUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#role GoogleComputeSubnetwork#role}

---

##### `secondaryIpRange`<sup>Optional</sup> <a name="secondaryIpRange" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.secondaryIpRange"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRange">GoogleComputeSubnetworkSecondaryIpRange</a>>

secondary_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#secondary_ip_range GoogleComputeSubnetwork#secondary_ip_range}

---

##### `sendSecondaryIpRangeIfEmpty`<sup>Optional</sup> <a name="sendSecondaryIpRangeIfEmpty" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.sendSecondaryIpRangeIfEmpty"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls the removal behavior of secondary_ip_range.

When false, removing secondary_ip_range from config will not produce a diff as
the provider will default to the API's value.
When true, the provider will treat removing secondary_ip_range as sending an
empty list of secondary IP ranges to the API.
Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#send_secondary_ip_range_if_empty GoogleComputeSubnetwork#send_secondary_ip_range_if_empty}

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.stackType"></a>

- *Type:* java.lang.String

The stack type for this subnet to identify whether the IPv6 feature is enabled or not.

If not specified IPV4_ONLY will be used. Possible values: ["IPV4_ONLY", "IPV4_IPV6"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#stack_type GoogleComputeSubnetwork#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeouts">GoogleComputeSubnetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#timeouts GoogleComputeSubnetwork#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.putSecondaryIpRange">putSecondaryIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetAllowSubnetCidrRoutesOverlap">resetAllowSubnetCidrRoutesOverlap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetExternalIpv6Prefix">resetExternalIpv6Prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetIpCidrRange">resetIpCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetIpv6AccessType">resetIpv6AccessType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetPrivateIpGoogleAccess">resetPrivateIpGoogleAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetPrivateIpv6GoogleAccess">resetPrivateIpv6GoogleAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetPurpose">resetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetReservedInternalRange">resetReservedInternalRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetSecondaryIpRange">resetSecondaryIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetSendSecondaryIpRangeIfEmpty">resetSendSecondaryIpRangeIfEmpty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetStackType">resetStackType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.putLogConfig"></a>

```java
public void putLogConfig(GoogleComputeSubnetworkLogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfig">GoogleComputeSubnetworkLogConfig</a>

---

##### `putSecondaryIpRange` <a name="putSecondaryIpRange" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.putSecondaryIpRange"></a>

```java
public void putSecondaryIpRange(IResolvable OR java.util.List<GoogleComputeSubnetworkSecondaryIpRange> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.putSecondaryIpRange.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRange">GoogleComputeSubnetworkSecondaryIpRange</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeSubnetworkTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeouts">GoogleComputeSubnetworkTimeouts</a>

---

##### `resetAllowSubnetCidrRoutesOverlap` <a name="resetAllowSubnetCidrRoutesOverlap" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetAllowSubnetCidrRoutesOverlap"></a>

```java
public void resetAllowSubnetCidrRoutesOverlap()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExternalIpv6Prefix` <a name="resetExternalIpv6Prefix" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetExternalIpv6Prefix"></a>

```java
public void resetExternalIpv6Prefix()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetId"></a>

```java
public void resetId()
```

##### `resetIpCidrRange` <a name="resetIpCidrRange" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetIpCidrRange"></a>

```java
public void resetIpCidrRange()
```

##### `resetIpv6AccessType` <a name="resetIpv6AccessType" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetIpv6AccessType"></a>

```java
public void resetIpv6AccessType()
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetLogConfig"></a>

```java
public void resetLogConfig()
```

##### `resetPrivateIpGoogleAccess` <a name="resetPrivateIpGoogleAccess" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetPrivateIpGoogleAccess"></a>

```java
public void resetPrivateIpGoogleAccess()
```

##### `resetPrivateIpv6GoogleAccess` <a name="resetPrivateIpv6GoogleAccess" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetPrivateIpv6GoogleAccess"></a>

```java
public void resetPrivateIpv6GoogleAccess()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetProject"></a>

```java
public void resetProject()
```

##### `resetPurpose` <a name="resetPurpose" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetPurpose"></a>

```java
public void resetPurpose()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetReservedInternalRange` <a name="resetReservedInternalRange" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetReservedInternalRange"></a>

```java
public void resetReservedInternalRange()
```

##### `resetRole` <a name="resetRole" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetRole"></a>

```java
public void resetRole()
```

##### `resetSecondaryIpRange` <a name="resetSecondaryIpRange" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetSecondaryIpRange"></a>

```java
public void resetSecondaryIpRange()
```

##### `resetSendSecondaryIpRangeIfEmpty` <a name="resetSendSecondaryIpRangeIfEmpty" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetSendSecondaryIpRangeIfEmpty"></a>

```java
public void resetSendSecondaryIpRangeIfEmpty()
```

##### `resetStackType` <a name="resetStackType" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetStackType"></a>

```java
public void resetStackType()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeSubnetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_subnetwork.GoogleComputeSubnetwork;

GoogleComputeSubnetwork.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_subnetwork.GoogleComputeSubnetwork;

GoogleComputeSubnetwork.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_subnetwork.GoogleComputeSubnetwork;

GoogleComputeSubnetwork.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_subnetwork.GoogleComputeSubnetwork;

GoogleComputeSubnetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeSubnetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeSubnetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeSubnetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeSubnetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeSubnetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.gatewayAddress">gatewayAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.internalIpv6Prefix">internalIpv6Prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.ipv6CidrRange">ipv6CidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference">GoogleComputeSubnetworkLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.secondaryIpRange">secondaryIpRange</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList">GoogleComputeSubnetworkSecondaryIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.subnetworkId">subnetworkId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference">GoogleComputeSubnetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.allowSubnetCidrRoutesOverlapInput">allowSubnetCidrRoutesOverlapInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.externalIpv6PrefixInput">externalIpv6PrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.ipv6AccessTypeInput">ipv6AccessTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfig">GoogleComputeSubnetworkLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.privateIpGoogleAccessInput">privateIpGoogleAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.privateIpv6GoogleAccessInput">privateIpv6GoogleAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.purposeInput">purposeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.reservedInternalRangeInput">reservedInternalRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.secondaryIpRangeInput">secondaryIpRangeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRange">GoogleComputeSubnetworkSecondaryIpRange</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.sendSecondaryIpRangeIfEmptyInput">sendSecondaryIpRangeIfEmptyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.stackTypeInput">stackTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeouts">GoogleComputeSubnetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.allowSubnetCidrRoutesOverlap">allowSubnetCidrRoutesOverlap</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.externalIpv6Prefix">externalIpv6Prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.ipv6AccessType">ipv6AccessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.privateIpGoogleAccess">privateIpGoogleAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.privateIpv6GoogleAccess">privateIpv6GoogleAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.purpose">purpose</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.reservedInternalRange">reservedInternalRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.sendSecondaryIpRangeIfEmpty">sendSecondaryIpRangeIfEmpty</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.stackType">stackType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `gatewayAddress`<sup>Required</sup> <a name="gatewayAddress" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.gatewayAddress"></a>

```java
public java.lang.String getGatewayAddress();
```

- *Type:* java.lang.String

---

##### `internalIpv6Prefix`<sup>Required</sup> <a name="internalIpv6Prefix" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.internalIpv6Prefix"></a>

```java
public java.lang.String getInternalIpv6Prefix();
```

- *Type:* java.lang.String

---

##### `ipv6CidrRange`<sup>Required</sup> <a name="ipv6CidrRange" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.ipv6CidrRange"></a>

```java
public java.lang.String getIpv6CidrRange();
```

- *Type:* java.lang.String

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.logConfig"></a>

```java
public GoogleComputeSubnetworkLogConfigOutputReference getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference">GoogleComputeSubnetworkLogConfigOutputReference</a>

---

##### `secondaryIpRange`<sup>Required</sup> <a name="secondaryIpRange" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.secondaryIpRange"></a>

```java
public GoogleComputeSubnetworkSecondaryIpRangeList getSecondaryIpRange();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList">GoogleComputeSubnetworkSecondaryIpRangeList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `subnetworkId`<sup>Required</sup> <a name="subnetworkId" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.subnetworkId"></a>

```java
public java.lang.Number getSubnetworkId();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.timeouts"></a>

```java
public GoogleComputeSubnetworkTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference">GoogleComputeSubnetworkTimeoutsOutputReference</a>

---

##### `allowSubnetCidrRoutesOverlapInput`<sup>Optional</sup> <a name="allowSubnetCidrRoutesOverlapInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.allowSubnetCidrRoutesOverlapInput"></a>

```java
public java.lang.Object getAllowSubnetCidrRoutesOverlapInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `externalIpv6PrefixInput`<sup>Optional</sup> <a name="externalIpv6PrefixInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.externalIpv6PrefixInput"></a>

```java
public java.lang.String getExternalIpv6PrefixInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.ipCidrRangeInput"></a>

```java
public java.lang.String getIpCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `ipv6AccessTypeInput`<sup>Optional</sup> <a name="ipv6AccessTypeInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.ipv6AccessTypeInput"></a>

```java
public java.lang.String getIpv6AccessTypeInput();
```

- *Type:* java.lang.String

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.logConfigInput"></a>

```java
public GoogleComputeSubnetworkLogConfig getLogConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfig">GoogleComputeSubnetworkLogConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `privateIpGoogleAccessInput`<sup>Optional</sup> <a name="privateIpGoogleAccessInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.privateIpGoogleAccessInput"></a>

```java
public java.lang.Object getPrivateIpGoogleAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privateIpv6GoogleAccessInput`<sup>Optional</sup> <a name="privateIpv6GoogleAccessInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.privateIpv6GoogleAccessInput"></a>

```java
public java.lang.String getPrivateIpv6GoogleAccessInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.purposeInput"></a>

```java
public java.lang.String getPurposeInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `reservedInternalRangeInput`<sup>Optional</sup> <a name="reservedInternalRangeInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.reservedInternalRangeInput"></a>

```java
public java.lang.String getReservedInternalRangeInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `secondaryIpRangeInput`<sup>Optional</sup> <a name="secondaryIpRangeInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.secondaryIpRangeInput"></a>

```java
public java.lang.Object getSecondaryIpRangeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRange">GoogleComputeSubnetworkSecondaryIpRange</a>>

---

##### `sendSecondaryIpRangeIfEmptyInput`<sup>Optional</sup> <a name="sendSecondaryIpRangeIfEmptyInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.sendSecondaryIpRangeIfEmptyInput"></a>

```java
public java.lang.Object getSendSecondaryIpRangeIfEmptyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stackTypeInput`<sup>Optional</sup> <a name="stackTypeInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.stackTypeInput"></a>

```java
public java.lang.String getStackTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeouts">GoogleComputeSubnetworkTimeouts</a>

---

##### `allowSubnetCidrRoutesOverlap`<sup>Required</sup> <a name="allowSubnetCidrRoutesOverlap" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.allowSubnetCidrRoutesOverlap"></a>

```java
public java.lang.Object getAllowSubnetCidrRoutesOverlap();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `externalIpv6Prefix`<sup>Required</sup> <a name="externalIpv6Prefix" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.externalIpv6Prefix"></a>

```java
public java.lang.String getExternalIpv6Prefix();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

---

##### `ipv6AccessType`<sup>Required</sup> <a name="ipv6AccessType" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.ipv6AccessType"></a>

```java
public java.lang.String getIpv6AccessType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `privateIpGoogleAccess`<sup>Required</sup> <a name="privateIpGoogleAccess" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.privateIpGoogleAccess"></a>

```java
public java.lang.Object getPrivateIpGoogleAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `privateIpv6GoogleAccess`<sup>Required</sup> <a name="privateIpv6GoogleAccess" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.privateIpv6GoogleAccess"></a>

```java
public java.lang.String getPrivateIpv6GoogleAccess();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.purpose"></a>

```java
public java.lang.String getPurpose();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `reservedInternalRange`<sup>Required</sup> <a name="reservedInternalRange" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.reservedInternalRange"></a>

```java
public java.lang.String getReservedInternalRange();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `sendSecondaryIpRangeIfEmpty`<sup>Required</sup> <a name="sendSecondaryIpRangeIfEmpty" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.sendSecondaryIpRangeIfEmpty"></a>

```java
public java.lang.Object getSendSecondaryIpRangeIfEmpty();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stackType`<sup>Required</sup> <a name="stackType" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetwork.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeSubnetworkConfig <a name="GoogleComputeSubnetworkConfig" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_subnetwork.GoogleComputeSubnetworkConfig;

GoogleComputeSubnetworkConfig.builder()
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
    .name(java.lang.String)
    .network(java.lang.String)
//  .allowSubnetCidrRoutesOverlap(java.lang.Boolean)
//  .allowSubnetCidrRoutesOverlap(IResolvable)
//  .description(java.lang.String)
//  .externalIpv6Prefix(java.lang.String)
//  .id(java.lang.String)
//  .ipCidrRange(java.lang.String)
//  .ipv6AccessType(java.lang.String)
//  .logConfig(GoogleComputeSubnetworkLogConfig)
//  .privateIpGoogleAccess(java.lang.Boolean)
//  .privateIpGoogleAccess(IResolvable)
//  .privateIpv6GoogleAccess(java.lang.String)
//  .project(java.lang.String)
//  .purpose(java.lang.String)
//  .region(java.lang.String)
//  .reservedInternalRange(java.lang.String)
//  .role(java.lang.String)
//  .secondaryIpRange(IResolvable)
//  .secondaryIpRange(java.util.List<GoogleComputeSubnetworkSecondaryIpRange>)
//  .sendSecondaryIpRangeIfEmpty(java.lang.Boolean)
//  .sendSecondaryIpRangeIfEmpty(IResolvable)
//  .stackType(java.lang.String)
//  .timeouts(GoogleComputeSubnetworkTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the resource, provided by the client when initially creating the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.network">network</a></code> | <code>java.lang.String</code> | The network this subnet belongs to. Only networks that are in the distributed mode can have subnetworks. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.allowSubnetCidrRoutesOverlap">allowSubnetCidrRoutesOverlap</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Typically packets destined to IPs within the subnetwork range that do not match existing resources are dropped and prevented from leaving the VPC. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.externalIpv6Prefix">externalIpv6Prefix</a></code> | <code>java.lang.String</code> | The range of external IPv6 addresses that are owned by this subnetwork. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#id GoogleComputeSubnetwork#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The range of internal addresses that are owned by this subnetwork. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.ipv6AccessType">ipv6AccessType</a></code> | <code>java.lang.String</code> | The access type of IPv6 address this subnet holds. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfig">GoogleComputeSubnetworkLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.privateIpGoogleAccess">privateIpGoogleAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled, VMs in this subnetwork without external IP addresses can access Google APIs and services by using Private Google Access. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.privateIpv6GoogleAccess">privateIpv6GoogleAccess</a></code> | <code>java.lang.String</code> | The private IPv6 google access type for the VMs in this subnet. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#project GoogleComputeSubnetwork#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.purpose">purpose</a></code> | <code>java.lang.String</code> | The purpose of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.region">region</a></code> | <code>java.lang.String</code> | The GCP region for this subnetwork. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.reservedInternalRange">reservedInternalRange</a></code> | <code>java.lang.String</code> | The ID of the reserved internal range. Must be prefixed with 'networkconnectivity.googleapis.com' E.g. 'networkconnectivity.googleapis.com/projects/{project}/locations/global/internalRanges/{rangeId}'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.role">role</a></code> | <code>java.lang.String</code> | The role of subnetwork. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.secondaryIpRange">secondaryIpRange</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRange">GoogleComputeSubnetworkSecondaryIpRange</a>></code> | secondary_ip_range block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.sendSecondaryIpRangeIfEmpty">sendSecondaryIpRangeIfEmpty</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls the removal behavior of secondary_ip_range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.stackType">stackType</a></code> | <code>java.lang.String</code> | The stack type for this subnet to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeouts">GoogleComputeSubnetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the resource, provided by the client when initially creating the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#name GoogleComputeSubnetwork#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The network this subnet belongs to. Only networks that are in the distributed mode can have subnetworks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#network GoogleComputeSubnetwork#network}

---

##### `allowSubnetCidrRoutesOverlap`<sup>Optional</sup> <a name="allowSubnetCidrRoutesOverlap" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.allowSubnetCidrRoutesOverlap"></a>

```java
public java.lang.Object getAllowSubnetCidrRoutesOverlap();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Typically packets destined to IPs within the subnetwork range that do not match existing resources are dropped and prevented from leaving the VPC.

Setting this field to true will allow these packets to match dynamic routes injected
via BGP even if their destinations match existing subnet ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#allow_subnet_cidr_routes_overlap GoogleComputeSubnetwork#allow_subnet_cidr_routes_overlap}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Provide this property when
you create the resource. This field can be set only at resource
creation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#description GoogleComputeSubnetwork#description}

---

##### `externalIpv6Prefix`<sup>Optional</sup> <a name="externalIpv6Prefix" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.externalIpv6Prefix"></a>

```java
public java.lang.String getExternalIpv6Prefix();
```

- *Type:* java.lang.String

The range of external IPv6 addresses that are owned by this subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#external_ipv6_prefix GoogleComputeSubnetwork#external_ipv6_prefix}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#id GoogleComputeSubnetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipCidrRange`<sup>Optional</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

The range of internal addresses that are owned by this subnetwork.

Provide this property when you create the subnetwork. For example,
10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and
non-overlapping within a network. Only IPv4 is supported.
Field is optional when 'reserved_internal_range' is defined, otherwise required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#ip_cidr_range GoogleComputeSubnetwork#ip_cidr_range}

---

##### `ipv6AccessType`<sup>Optional</sup> <a name="ipv6AccessType" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.ipv6AccessType"></a>

```java
public java.lang.String getIpv6AccessType();
```

- *Type:* java.lang.String

The access type of IPv6 address this subnet holds.

It's immutable and can only be specified during creation
or the first time the subnet is updated into IPV4_IPV6 dual stack. If the ipv6_type is EXTERNAL then this subnet
cannot enable direct path. Possible values: ["EXTERNAL", "INTERNAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#ipv6_access_type GoogleComputeSubnetwork#ipv6_access_type}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.logConfig"></a>

```java
public GoogleComputeSubnetworkLogConfig getLogConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfig">GoogleComputeSubnetworkLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#log_config GoogleComputeSubnetwork#log_config}

---

##### `privateIpGoogleAccess`<sup>Optional</sup> <a name="privateIpGoogleAccess" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.privateIpGoogleAccess"></a>

```java
public java.lang.Object getPrivateIpGoogleAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled, VMs in this subnetwork without external IP addresses can access Google APIs and services by using Private Google Access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#private_ip_google_access GoogleComputeSubnetwork#private_ip_google_access}

---

##### `privateIpv6GoogleAccess`<sup>Optional</sup> <a name="privateIpv6GoogleAccess" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.privateIpv6GoogleAccess"></a>

```java
public java.lang.String getPrivateIpv6GoogleAccess();
```

- *Type:* java.lang.String

The private IPv6 google access type for the VMs in this subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#private_ipv6_google_access GoogleComputeSubnetwork#private_ipv6_google_access}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#project GoogleComputeSubnetwork#project}.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.purpose"></a>

```java
public java.lang.String getPurpose();
```

- *Type:* java.lang.String

The purpose of the resource.

This field can be either 'PRIVATE', 'REGIONAL_MANAGED_PROXY', 'GLOBAL_MANAGED_PROXY', 'PRIVATE_SERVICE_CONNECT' or 'PRIVATE_NAT'([Beta](https://terraform.io/docs/providers/google/guides/provider_versions.html)).
A subnet with purpose set to 'REGIONAL_MANAGED_PROXY' is a user-created subnetwork that is reserved for regional Envoy-based load balancers.
A subnetwork in a given region with purpose set to 'GLOBAL_MANAGED_PROXY' is a proxy-only subnet and is shared between all the cross-regional Envoy-based load balancers.
A subnetwork with purpose set to 'PRIVATE_SERVICE_CONNECT' reserves the subnet for hosting a Private Service Connect published service.
A subnetwork with purpose set to 'PRIVATE_NAT' is used as source range for Private NAT gateways.
Note that 'REGIONAL_MANAGED_PROXY' is the preferred setting for all regional Envoy load balancers.
If unspecified, the purpose defaults to 'PRIVATE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#purpose GoogleComputeSubnetwork#purpose}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The GCP region for this subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#region GoogleComputeSubnetwork#region}

---

##### `reservedInternalRange`<sup>Optional</sup> <a name="reservedInternalRange" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.reservedInternalRange"></a>

```java
public java.lang.String getReservedInternalRange();
```

- *Type:* java.lang.String

The ID of the reserved internal range. Must be prefixed with 'networkconnectivity.googleapis.com' E.g. 'networkconnectivity.googleapis.com/projects/{project}/locations/global/internalRanges/{rangeId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#reserved_internal_range GoogleComputeSubnetwork#reserved_internal_range}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

The role of subnetwork.

Currently, this field is only used when 'purpose' is 'REGIONAL_MANAGED_PROXY'.
The value can be set to 'ACTIVE' or 'BACKUP'.
An 'ACTIVE' subnetwork is one that is currently being used for Envoy-based load balancers in a region.
A 'BACKUP' subnetwork is one that is ready to be promoted to 'ACTIVE' or is currently draining. Possible values: ["ACTIVE", "BACKUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#role GoogleComputeSubnetwork#role}

---

##### `secondaryIpRange`<sup>Optional</sup> <a name="secondaryIpRange" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.secondaryIpRange"></a>

```java
public java.lang.Object getSecondaryIpRange();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRange">GoogleComputeSubnetworkSecondaryIpRange</a>>

secondary_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#secondary_ip_range GoogleComputeSubnetwork#secondary_ip_range}

---

##### `sendSecondaryIpRangeIfEmpty`<sup>Optional</sup> <a name="sendSecondaryIpRangeIfEmpty" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.sendSecondaryIpRangeIfEmpty"></a>

```java
public java.lang.Object getSendSecondaryIpRangeIfEmpty();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls the removal behavior of secondary_ip_range.

When false, removing secondary_ip_range from config will not produce a diff as
the provider will default to the API's value.
When true, the provider will treat removing secondary_ip_range as sending an
empty list of secondary IP ranges to the API.
Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#send_secondary_ip_range_if_empty GoogleComputeSubnetwork#send_secondary_ip_range_if_empty}

---

##### `stackType`<sup>Optional</sup> <a name="stackType" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.stackType"></a>

```java
public java.lang.String getStackType();
```

- *Type:* java.lang.String

The stack type for this subnet to identify whether the IPv6 feature is enabled or not.

If not specified IPV4_ONLY will be used. Possible values: ["IPV4_ONLY", "IPV4_IPV6"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#stack_type GoogleComputeSubnetwork#stack_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkConfig.property.timeouts"></a>

```java
public GoogleComputeSubnetworkTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeouts">GoogleComputeSubnetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#timeouts GoogleComputeSubnetwork#timeouts}

---

### GoogleComputeSubnetworkLogConfig <a name="GoogleComputeSubnetworkLogConfig" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_subnetwork.GoogleComputeSubnetworkLogConfig;

GoogleComputeSubnetworkLogConfig.builder()
//  .aggregationInterval(java.lang.String)
//  .filterExpr(java.lang.String)
//  .flowSampling(java.lang.Number)
//  .metadata(java.lang.String)
//  .metadataFields(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfig.property.aggregationInterval">aggregationInterval</a></code> | <code>java.lang.String</code> | Can only be specified if VPC flow logging for this subnetwork is enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfig.property.filterExpr">filterExpr</a></code> | <code>java.lang.String</code> | Export filter used to define which VPC flow logs should be logged, as as CEL expression. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfig.property.flowSampling">flowSampling</a></code> | <code>java.lang.Number</code> | Can only be specified if VPC flow logging for this subnetwork is enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | Can only be specified if VPC flow logging for this subnetwork is enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfig.property.metadataFields">metadataFields</a></code> | <code>java.util.List<java.lang.String></code> | List of metadata fields that should be added to reported logs. |

---

##### `aggregationInterval`<sup>Optional</sup> <a name="aggregationInterval" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfig.property.aggregationInterval"></a>

```java
public java.lang.String getAggregationInterval();
```

- *Type:* java.lang.String

Can only be specified if VPC flow logging for this subnetwork is enabled.

Toggles the aggregation interval for collecting flow logs. Increasing the
interval time will reduce the amount of generated flow logs for long
lasting connections. Default is an interval of 5 seconds per connection. Default value: "INTERVAL_5_SEC" Possible values: ["INTERVAL_5_SEC", "INTERVAL_30_SEC", "INTERVAL_1_MIN", "INTERVAL_5_MIN", "INTERVAL_10_MIN", "INTERVAL_15_MIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#aggregation_interval GoogleComputeSubnetwork#aggregation_interval}

---

##### `filterExpr`<sup>Optional</sup> <a name="filterExpr" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfig.property.filterExpr"></a>

```java
public java.lang.String getFilterExpr();
```

- *Type:* java.lang.String

Export filter used to define which VPC flow logs should be logged, as as CEL expression.

See
https://cloud.google.com/vpc/docs/flow-logs#filtering for details on how to format this field.
The default value is 'true', which evaluates to include everything.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#filter_expr GoogleComputeSubnetwork#filter_expr}

---

##### `flowSampling`<sup>Optional</sup> <a name="flowSampling" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfig.property.flowSampling"></a>

```java
public java.lang.Number getFlowSampling();
```

- *Type:* java.lang.Number

Can only be specified if VPC flow logging for this subnetwork is enabled.

The value of the field must be in [0, 1]. Set the sampling rate of VPC
flow logs within the subnetwork where 1.0 means all collected logs are
reported and 0.0 means no logs are reported. Default is 0.5 which means
half of all collected logs are reported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#flow_sampling GoogleComputeSubnetwork#flow_sampling}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

Can only be specified if VPC flow logging for this subnetwork is enabled.

Configures whether metadata fields should be added to the reported VPC
flow logs. Default value: "INCLUDE_ALL_METADATA" Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA", "CUSTOM_METADATA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#metadata GoogleComputeSubnetwork#metadata}

---

##### `metadataFields`<sup>Optional</sup> <a name="metadataFields" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfig.property.metadataFields"></a>

```java
public java.util.List<java.lang.String> getMetadataFields();
```

- *Type:* java.util.List<java.lang.String>

List of metadata fields that should be added to reported logs.

Can only be specified if VPC flow logs for this subnetwork is enabled and "metadata" is set to CUSTOM_METADATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#metadata_fields GoogleComputeSubnetwork#metadata_fields}

---

### GoogleComputeSubnetworkSecondaryIpRange <a name="GoogleComputeSubnetworkSecondaryIpRange" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_subnetwork.GoogleComputeSubnetworkSecondaryIpRange;

GoogleComputeSubnetworkSecondaryIpRange.builder()
    .rangeName(java.lang.String)
//  .ipCidrRange(java.lang.String)
//  .reservedInternalRange(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRange.property.rangeName">rangeName</a></code> | <code>java.lang.String</code> | The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRange.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The range of IP addresses belonging to this subnetwork secondary range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRange.property.reservedInternalRange">reservedInternalRange</a></code> | <code>java.lang.String</code> | The ID of the reserved internal range. Must be prefixed with 'networkconnectivity.googleapis.com' E.g. 'networkconnectivity.googleapis.com/projects/{project}/locations/global/internalRanges/{rangeId}'. |

---

##### `rangeName`<sup>Required</sup> <a name="rangeName" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRange.property.rangeName"></a>

```java
public java.lang.String getRangeName();
```

- *Type:* java.lang.String

The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance.

The name must
be 1-63 characters long, and comply with RFC1035. The name
must be unique within the subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#range_name GoogleComputeSubnetwork#range_name}

---

##### `ipCidrRange`<sup>Optional</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRange.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

The range of IP addresses belonging to this subnetwork secondary range.

Provide this property when you create the subnetwork.
Ranges must be unique and non-overlapping with all primary and
secondary IP ranges within a network. Only IPv4 is supported.
Field is optional when 'reserved_internal_range' is defined, otherwise required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#ip_cidr_range GoogleComputeSubnetwork#ip_cidr_range}

---

##### `reservedInternalRange`<sup>Optional</sup> <a name="reservedInternalRange" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRange.property.reservedInternalRange"></a>

```java
public java.lang.String getReservedInternalRange();
```

- *Type:* java.lang.String

The ID of the reserved internal range. Must be prefixed with 'networkconnectivity.googleapis.com' E.g. 'networkconnectivity.googleapis.com/projects/{project}/locations/global/internalRanges/{rangeId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#reserved_internal_range GoogleComputeSubnetwork#reserved_internal_range}

---

### GoogleComputeSubnetworkTimeouts <a name="GoogleComputeSubnetworkTimeouts" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_subnetwork.GoogleComputeSubnetworkTimeouts;

GoogleComputeSubnetworkTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#create GoogleComputeSubnetwork#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#delete GoogleComputeSubnetwork#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#update GoogleComputeSubnetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#create GoogleComputeSubnetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#delete GoogleComputeSubnetwork#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_compute_subnetwork#update GoogleComputeSubnetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeSubnetworkLogConfigOutputReference <a name="GoogleComputeSubnetworkLogConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_subnetwork.GoogleComputeSubnetworkLogConfigOutputReference;

new GoogleComputeSubnetworkLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.resetAggregationInterval">resetAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.resetFilterExpr">resetFilterExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.resetFlowSampling">resetFlowSampling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.resetMetadataFields">resetMetadataFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregationInterval` <a name="resetAggregationInterval" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.resetAggregationInterval"></a>

```java
public void resetAggregationInterval()
```

##### `resetFilterExpr` <a name="resetFilterExpr" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.resetFilterExpr"></a>

```java
public void resetFilterExpr()
```

##### `resetFlowSampling` <a name="resetFlowSampling" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.resetFlowSampling"></a>

```java
public void resetFlowSampling()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetMetadataFields` <a name="resetMetadataFields" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.resetMetadataFields"></a>

```java
public void resetMetadataFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.aggregationIntervalInput">aggregationIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.filterExprInput">filterExprInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.flowSamplingInput">flowSamplingInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.metadataFieldsInput">metadataFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.aggregationInterval">aggregationInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.filterExpr">filterExpr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.flowSampling">flowSampling</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.metadataFields">metadataFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfig">GoogleComputeSubnetworkLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregationIntervalInput`<sup>Optional</sup> <a name="aggregationIntervalInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.aggregationIntervalInput"></a>

```java
public java.lang.String getAggregationIntervalInput();
```

- *Type:* java.lang.String

---

##### `filterExprInput`<sup>Optional</sup> <a name="filterExprInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.filterExprInput"></a>

```java
public java.lang.String getFilterExprInput();
```

- *Type:* java.lang.String

---

##### `flowSamplingInput`<sup>Optional</sup> <a name="flowSamplingInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.flowSamplingInput"></a>

```java
public java.lang.Number getFlowSamplingInput();
```

- *Type:* java.lang.Number

---

##### `metadataFieldsInput`<sup>Optional</sup> <a name="metadataFieldsInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.metadataFieldsInput"></a>

```java
public java.util.List<java.lang.String> getMetadataFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `aggregationInterval`<sup>Required</sup> <a name="aggregationInterval" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.aggregationInterval"></a>

```java
public java.lang.String getAggregationInterval();
```

- *Type:* java.lang.String

---

##### `filterExpr`<sup>Required</sup> <a name="filterExpr" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.filterExpr"></a>

```java
public java.lang.String getFilterExpr();
```

- *Type:* java.lang.String

---

##### `flowSampling`<sup>Required</sup> <a name="flowSampling" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.flowSampling"></a>

```java
public java.lang.Number getFlowSampling();
```

- *Type:* java.lang.Number

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `metadataFields`<sup>Required</sup> <a name="metadataFields" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.metadataFields"></a>

```java
public java.util.List<java.lang.String> getMetadataFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfigOutputReference.property.internalValue"></a>

```java
public GoogleComputeSubnetworkLogConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkLogConfig">GoogleComputeSubnetworkLogConfig</a>

---


### GoogleComputeSubnetworkSecondaryIpRangeList <a name="GoogleComputeSubnetworkSecondaryIpRangeList" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_subnetwork.GoogleComputeSubnetworkSecondaryIpRangeList;

new GoogleComputeSubnetworkSecondaryIpRangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.get"></a>

```java
public GoogleComputeSubnetworkSecondaryIpRangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRange">GoogleComputeSubnetworkSecondaryIpRange</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRange">GoogleComputeSubnetworkSecondaryIpRange</a>>

---


### GoogleComputeSubnetworkSecondaryIpRangeOutputReference <a name="GoogleComputeSubnetworkSecondaryIpRangeOutputReference" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_subnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference;

new GoogleComputeSubnetworkSecondaryIpRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.resetIpCidrRange">resetIpCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.resetReservedInternalRange">resetReservedInternalRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpCidrRange` <a name="resetIpCidrRange" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.resetIpCidrRange"></a>

```java
public void resetIpCidrRange()
```

##### `resetReservedInternalRange` <a name="resetReservedInternalRange" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.resetReservedInternalRange"></a>

```java
public void resetReservedInternalRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeNameInput">rangeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.property.reservedInternalRangeInput">reservedInternalRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeName">rangeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.property.reservedInternalRange">reservedInternalRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRange">GoogleComputeSubnetworkSecondaryIpRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRangeInput"></a>

```java
public java.lang.String getIpCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `rangeNameInput`<sup>Optional</sup> <a name="rangeNameInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeNameInput"></a>

```java
public java.lang.String getRangeNameInput();
```

- *Type:* java.lang.String

---

##### `reservedInternalRangeInput`<sup>Optional</sup> <a name="reservedInternalRangeInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.property.reservedInternalRangeInput"></a>

```java
public java.lang.String getReservedInternalRangeInput();
```

- *Type:* java.lang.String

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

---

##### `rangeName`<sup>Required</sup> <a name="rangeName" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.property.rangeName"></a>

```java
public java.lang.String getRangeName();
```

- *Type:* java.lang.String

---

##### `reservedInternalRange`<sup>Required</sup> <a name="reservedInternalRange" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.property.reservedInternalRange"></a>

```java
public java.lang.String getReservedInternalRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRangeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkSecondaryIpRange">GoogleComputeSubnetworkSecondaryIpRange</a>

---


### GoogleComputeSubnetworkTimeoutsOutputReference <a name="GoogleComputeSubnetworkTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_subnetwork.GoogleComputeSubnetworkTimeoutsOutputReference;

new GoogleComputeSubnetworkTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeouts">GoogleComputeSubnetworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeSubnetwork.GoogleComputeSubnetworkTimeouts">GoogleComputeSubnetworkTimeouts</a>

---



