# `googleComputeNetwork` Submodule <a name="`googleComputeNetwork` Submodule" id="@cdktf/provider-google-beta.googleComputeNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNetwork <a name="GoogleComputeNetwork" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network google_compute_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network.GoogleComputeNetwork;

GoogleComputeNetwork.Builder.create(Construct scope, java.lang.String id)
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
//  .autoCreateSubnetworks(java.lang.Boolean)
//  .autoCreateSubnetworks(IResolvable)
//  .bgpAlwaysCompareMed(java.lang.Boolean)
//  .bgpAlwaysCompareMed(IResolvable)
//  .bgpBestPathSelectionMode(java.lang.String)
//  .bgpInterRegionCost(java.lang.String)
//  .deleteDefaultRoutesOnCreate(java.lang.Boolean)
//  .deleteDefaultRoutesOnCreate(IResolvable)
//  .description(java.lang.String)
//  .enableUlaInternalIpv6(java.lang.Boolean)
//  .enableUlaInternalIpv6(IResolvable)
//  .id(java.lang.String)
//  .internalIpv6Range(java.lang.String)
//  .mtu(java.lang.Number)
//  .networkFirewallPolicyEnforcementOrder(java.lang.String)
//  .networkProfile(java.lang.String)
//  .project(java.lang.String)
//  .routingMode(java.lang.String)
//  .timeouts(GoogleComputeNetworkTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.autoCreateSubnetworks">autoCreateSubnetworks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to 'true', the network is created in "auto subnet mode" and it will create a subnet for each region automatically across the '10.128.0.0/9' address range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.bgpAlwaysCompareMed">bgpAlwaysCompareMed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables/disables the comparison of MED across routes with different Neighbor ASNs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.bgpBestPathSelectionMode">bgpBestPathSelectionMode</a></code> | <code>java.lang.String</code> | The BGP best selection algorithm to be employed. MODE can be LEGACY or STANDARD. Possible values: ["LEGACY", "STANDARD"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.bgpInterRegionCost">bgpInterRegionCost</a></code> | <code>java.lang.String</code> | Choice of the behavior of inter-regional cost and MED in the BPS algorithm. Possible values: ["DEFAULT", "ADD_COST_TO_MED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.deleteDefaultRoutesOnCreate">deleteDefaultRoutesOnCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to 'true', default routes ('0.0.0.0/0') will be deleted immediately after network creation. Defaults to 'false'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. The resource must be recreated to modify this field. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.enableUlaInternalIpv6">enableUlaInternalIpv6</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable ULA internal ipv6 on this network. Enabling this feature will assign a /48 from google defined ULA prefix fd20::/20. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#id GoogleComputeNetwork#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.internalIpv6Range">internalIpv6Range</a></code> | <code>java.lang.String</code> | When enabling ula internal ipv6, caller optionally can specify the /48 range they want from the google defined ULA prefix fd20::/20. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.mtu">mtu</a></code> | <code>java.lang.Number</code> | Maximum Transmission Unit in bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.networkFirewallPolicyEnforcementOrder">networkFirewallPolicyEnforcementOrder</a></code> | <code>java.lang.String</code> | Set the order that Firewall Rules and Firewall Policies are evaluated. Default value: "AFTER_CLASSIC_FIREWALL" Possible values: ["BEFORE_CLASSIC_FIREWALL", "AFTER_CLASSIC_FIREWALL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.networkProfile">networkProfile</a></code> | <code>java.lang.String</code> | A full or partial URL of the network profile to apply to this network. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#project GoogleComputeNetwork#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.routingMode">routingMode</a></code> | <code>java.lang.String</code> | The network-wide routing mode to use. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts">GoogleComputeNetworkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#name GoogleComputeNetwork#name}

---

##### `autoCreateSubnetworks`<sup>Optional</sup> <a name="autoCreateSubnetworks" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.autoCreateSubnetworks"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to 'true', the network is created in "auto subnet mode" and it will create a subnet for each region automatically across the '10.128.0.0/9' address range.

When set to 'false', the network is created in "custom subnet mode" so
the user can explicitly connect subnetwork resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#auto_create_subnetworks GoogleComputeNetwork#auto_create_subnetworks}

---

##### `bgpAlwaysCompareMed`<sup>Optional</sup> <a name="bgpAlwaysCompareMed" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.bgpAlwaysCompareMed"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables/disables the comparison of MED across routes with different Neighbor ASNs.

This value can only be set if the --bgp-best-path-selection-mode is STANDARD

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#bgp_always_compare_med GoogleComputeNetwork#bgp_always_compare_med}

---

##### `bgpBestPathSelectionMode`<sup>Optional</sup> <a name="bgpBestPathSelectionMode" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.bgpBestPathSelectionMode"></a>

- *Type:* java.lang.String

The BGP best selection algorithm to be employed. MODE can be LEGACY or STANDARD. Possible values: ["LEGACY", "STANDARD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#bgp_best_path_selection_mode GoogleComputeNetwork#bgp_best_path_selection_mode}

---

##### `bgpInterRegionCost`<sup>Optional</sup> <a name="bgpInterRegionCost" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.bgpInterRegionCost"></a>

- *Type:* java.lang.String

Choice of the behavior of inter-regional cost and MED in the BPS algorithm. Possible values: ["DEFAULT", "ADD_COST_TO_MED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#bgp_inter_region_cost GoogleComputeNetwork#bgp_inter_region_cost}

---

##### `deleteDefaultRoutesOnCreate`<sup>Optional</sup> <a name="deleteDefaultRoutesOnCreate" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.deleteDefaultRoutesOnCreate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to 'true', default routes ('0.0.0.0/0') will be deleted immediately after network creation. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#delete_default_routes_on_create GoogleComputeNetwork#delete_default_routes_on_create}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource. The resource must be recreated to modify this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#description GoogleComputeNetwork#description}

---

##### `enableUlaInternalIpv6`<sup>Optional</sup> <a name="enableUlaInternalIpv6" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.enableUlaInternalIpv6"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable ULA internal ipv6 on this network. Enabling this feature will assign a /48 from google defined ULA prefix fd20::/20.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#enable_ula_internal_ipv6 GoogleComputeNetwork#enable_ula_internal_ipv6}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#id GoogleComputeNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internalIpv6Range`<sup>Optional</sup> <a name="internalIpv6Range" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.internalIpv6Range"></a>

- *Type:* java.lang.String

When enabling ula internal ipv6, caller optionally can specify the /48 range they want from the google defined ULA prefix fd20::/20.

The input must be a
valid /48 ULA IPv6 address and must be within the fd20::/20. Operation will
fail if the speficied /48 is already in used by another resource.
If the field is not speficied, then a /48 range will be randomly allocated from fd20::/20 and returned via this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#internal_ipv6_range GoogleComputeNetwork#internal_ipv6_range}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.mtu"></a>

- *Type:* java.lang.Number

Maximum Transmission Unit in bytes.

The default value is 1460 bytes.
The minimum value for this field is 1300 and the maximum value is 8896 bytes (jumbo frames).
Note that packets larger than 1500 bytes (standard Ethernet) can be subject to TCP-MSS clamping or dropped
with an ICMP 'Fragmentation-Needed' message if the packets are routed to the Internet or other VPCs
with varying MTUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#mtu GoogleComputeNetwork#mtu}

---

##### `networkFirewallPolicyEnforcementOrder`<sup>Optional</sup> <a name="networkFirewallPolicyEnforcementOrder" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.networkFirewallPolicyEnforcementOrder"></a>

- *Type:* java.lang.String

Set the order that Firewall Rules and Firewall Policies are evaluated. Default value: "AFTER_CLASSIC_FIREWALL" Possible values: ["BEFORE_CLASSIC_FIREWALL", "AFTER_CLASSIC_FIREWALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#network_firewall_policy_enforcement_order GoogleComputeNetwork#network_firewall_policy_enforcement_order}

---

##### `networkProfile`<sup>Optional</sup> <a name="networkProfile" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.networkProfile"></a>

- *Type:* java.lang.String

A full or partial URL of the network profile to apply to this network.

This field can be set only at resource creation time. For example, the
following are valid URLs:

* https://www.googleapis.com/compute/beta/projects/{projectId}/global/networkProfiles/{network_profile_name}
* projects/{projectId}/global/networkProfiles/{network_profile_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#network_profile GoogleComputeNetwork#network_profile}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#project GoogleComputeNetwork#project}.

---

##### `routingMode`<sup>Optional</sup> <a name="routingMode" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.routingMode"></a>

- *Type:* java.lang.String

The network-wide routing mode to use.

If set to 'REGIONAL', this
network's cloud routers will only advertise routes with subnetworks
of this network in the same region as the router. If set to 'GLOBAL',
this network's cloud routers will advertise routes with all
subnetworks of this network, across regions. Possible values: ["REGIONAL", "GLOBAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#routing_mode GoogleComputeNetwork#routing_mode}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts">GoogleComputeNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#timeouts GoogleComputeNetwork#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetAutoCreateSubnetworks">resetAutoCreateSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetBgpAlwaysCompareMed">resetBgpAlwaysCompareMed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetBgpBestPathSelectionMode">resetBgpBestPathSelectionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetBgpInterRegionCost">resetBgpInterRegionCost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetDeleteDefaultRoutesOnCreate">resetDeleteDefaultRoutesOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetEnableUlaInternalIpv6">resetEnableUlaInternalIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetInternalIpv6Range">resetInternalIpv6Range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetNetworkFirewallPolicyEnforcementOrder">resetNetworkFirewallPolicyEnforcementOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetNetworkProfile">resetNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetRoutingMode">resetRoutingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeNetworkTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts">GoogleComputeNetworkTimeouts</a>

---

##### `resetAutoCreateSubnetworks` <a name="resetAutoCreateSubnetworks" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetAutoCreateSubnetworks"></a>

```java
public void resetAutoCreateSubnetworks()
```

##### `resetBgpAlwaysCompareMed` <a name="resetBgpAlwaysCompareMed" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetBgpAlwaysCompareMed"></a>

```java
public void resetBgpAlwaysCompareMed()
```

##### `resetBgpBestPathSelectionMode` <a name="resetBgpBestPathSelectionMode" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetBgpBestPathSelectionMode"></a>

```java
public void resetBgpBestPathSelectionMode()
```

##### `resetBgpInterRegionCost` <a name="resetBgpInterRegionCost" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetBgpInterRegionCost"></a>

```java
public void resetBgpInterRegionCost()
```

##### `resetDeleteDefaultRoutesOnCreate` <a name="resetDeleteDefaultRoutesOnCreate" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetDeleteDefaultRoutesOnCreate"></a>

```java
public void resetDeleteDefaultRoutesOnCreate()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnableUlaInternalIpv6` <a name="resetEnableUlaInternalIpv6" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetEnableUlaInternalIpv6"></a>

```java
public void resetEnableUlaInternalIpv6()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetId"></a>

```java
public void resetId()
```

##### `resetInternalIpv6Range` <a name="resetInternalIpv6Range" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetInternalIpv6Range"></a>

```java
public void resetInternalIpv6Range()
```

##### `resetMtu` <a name="resetMtu" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetMtu"></a>

```java
public void resetMtu()
```

##### `resetNetworkFirewallPolicyEnforcementOrder` <a name="resetNetworkFirewallPolicyEnforcementOrder" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetNetworkFirewallPolicyEnforcementOrder"></a>

```java
public void resetNetworkFirewallPolicyEnforcementOrder()
```

##### `resetNetworkProfile` <a name="resetNetworkProfile" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetNetworkProfile"></a>

```java
public void resetNetworkProfile()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetProject"></a>

```java
public void resetProject()
```

##### `resetRoutingMode` <a name="resetRoutingMode" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetRoutingMode"></a>

```java
public void resetRoutingMode()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network.GoogleComputeNetwork;

GoogleComputeNetwork.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network.GoogleComputeNetwork;

GoogleComputeNetwork.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network.GoogleComputeNetwork;

GoogleComputeNetwork.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network.GoogleComputeNetwork;

GoogleComputeNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeNetwork.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.gatewayIpv4">gatewayIpv4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.networkId">networkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.numericId">numericId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference">GoogleComputeNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.autoCreateSubnetworksInput">autoCreateSubnetworksInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpAlwaysCompareMedInput">bgpAlwaysCompareMedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpBestPathSelectionModeInput">bgpBestPathSelectionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpInterRegionCostInput">bgpInterRegionCostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.deleteDefaultRoutesOnCreateInput">deleteDefaultRoutesOnCreateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.enableUlaInternalIpv6Input">enableUlaInternalIpv6Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.internalIpv6RangeInput">internalIpv6RangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.mtuInput">mtuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.networkFirewallPolicyEnforcementOrderInput">networkFirewallPolicyEnforcementOrderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.networkProfileInput">networkProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.routingModeInput">routingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts">GoogleComputeNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.autoCreateSubnetworks">autoCreateSubnetworks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpAlwaysCompareMed">bgpAlwaysCompareMed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpBestPathSelectionMode">bgpBestPathSelectionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpInterRegionCost">bgpInterRegionCost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.deleteDefaultRoutesOnCreate">deleteDefaultRoutesOnCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.enableUlaInternalIpv6">enableUlaInternalIpv6</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.internalIpv6Range">internalIpv6Range</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.networkFirewallPolicyEnforcementOrder">networkFirewallPolicyEnforcementOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.networkProfile">networkProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.routingMode">routingMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gatewayIpv4`<sup>Required</sup> <a name="gatewayIpv4" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.gatewayIpv4"></a>

```java
public java.lang.String getGatewayIpv4();
```

- *Type:* java.lang.String

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.networkId"></a>

```java
public java.lang.String getNetworkId();
```

- *Type:* java.lang.String

---

##### `numericId`<sup>Required</sup> <a name="numericId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.numericId"></a>

```java
public java.lang.String getNumericId();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.timeouts"></a>

```java
public GoogleComputeNetworkTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference">GoogleComputeNetworkTimeoutsOutputReference</a>

---

##### `autoCreateSubnetworksInput`<sup>Optional</sup> <a name="autoCreateSubnetworksInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.autoCreateSubnetworksInput"></a>

```java
public java.lang.Object getAutoCreateSubnetworksInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bgpAlwaysCompareMedInput`<sup>Optional</sup> <a name="bgpAlwaysCompareMedInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpAlwaysCompareMedInput"></a>

```java
public java.lang.Object getBgpAlwaysCompareMedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bgpBestPathSelectionModeInput`<sup>Optional</sup> <a name="bgpBestPathSelectionModeInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpBestPathSelectionModeInput"></a>

```java
public java.lang.String getBgpBestPathSelectionModeInput();
```

- *Type:* java.lang.String

---

##### `bgpInterRegionCostInput`<sup>Optional</sup> <a name="bgpInterRegionCostInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpInterRegionCostInput"></a>

```java
public java.lang.String getBgpInterRegionCostInput();
```

- *Type:* java.lang.String

---

##### `deleteDefaultRoutesOnCreateInput`<sup>Optional</sup> <a name="deleteDefaultRoutesOnCreateInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.deleteDefaultRoutesOnCreateInput"></a>

```java
public java.lang.Object getDeleteDefaultRoutesOnCreateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enableUlaInternalIpv6Input`<sup>Optional</sup> <a name="enableUlaInternalIpv6Input" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.enableUlaInternalIpv6Input"></a>

```java
public java.lang.Object getEnableUlaInternalIpv6Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `internalIpv6RangeInput`<sup>Optional</sup> <a name="internalIpv6RangeInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.internalIpv6RangeInput"></a>

```java
public java.lang.String getInternalIpv6RangeInput();
```

- *Type:* java.lang.String

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.mtuInput"></a>

```java
public java.lang.Number getMtuInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkFirewallPolicyEnforcementOrderInput`<sup>Optional</sup> <a name="networkFirewallPolicyEnforcementOrderInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.networkFirewallPolicyEnforcementOrderInput"></a>

```java
public java.lang.String getNetworkFirewallPolicyEnforcementOrderInput();
```

- *Type:* java.lang.String

---

##### `networkProfileInput`<sup>Optional</sup> <a name="networkProfileInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.networkProfileInput"></a>

```java
public java.lang.String getNetworkProfileInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `routingModeInput`<sup>Optional</sup> <a name="routingModeInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.routingModeInput"></a>

```java
public java.lang.String getRoutingModeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts">GoogleComputeNetworkTimeouts</a>

---

##### `autoCreateSubnetworks`<sup>Required</sup> <a name="autoCreateSubnetworks" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.autoCreateSubnetworks"></a>

```java
public java.lang.Object getAutoCreateSubnetworks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bgpAlwaysCompareMed`<sup>Required</sup> <a name="bgpAlwaysCompareMed" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpAlwaysCompareMed"></a>

```java
public java.lang.Object getBgpAlwaysCompareMed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `bgpBestPathSelectionMode`<sup>Required</sup> <a name="bgpBestPathSelectionMode" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpBestPathSelectionMode"></a>

```java
public java.lang.String getBgpBestPathSelectionMode();
```

- *Type:* java.lang.String

---

##### `bgpInterRegionCost`<sup>Required</sup> <a name="bgpInterRegionCost" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpInterRegionCost"></a>

```java
public java.lang.String getBgpInterRegionCost();
```

- *Type:* java.lang.String

---

##### `deleteDefaultRoutesOnCreate`<sup>Required</sup> <a name="deleteDefaultRoutesOnCreate" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.deleteDefaultRoutesOnCreate"></a>

```java
public java.lang.Object getDeleteDefaultRoutesOnCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enableUlaInternalIpv6`<sup>Required</sup> <a name="enableUlaInternalIpv6" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.enableUlaInternalIpv6"></a>

```java
public java.lang.Object getEnableUlaInternalIpv6();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalIpv6Range`<sup>Required</sup> <a name="internalIpv6Range" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.internalIpv6Range"></a>

```java
public java.lang.String getInternalIpv6Range();
```

- *Type:* java.lang.String

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkFirewallPolicyEnforcementOrder`<sup>Required</sup> <a name="networkFirewallPolicyEnforcementOrder" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.networkFirewallPolicyEnforcementOrder"></a>

```java
public java.lang.String getNetworkFirewallPolicyEnforcementOrder();
```

- *Type:* java.lang.String

---

##### `networkProfile`<sup>Required</sup> <a name="networkProfile" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.networkProfile"></a>

```java
public java.lang.String getNetworkProfile();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `routingMode`<sup>Required</sup> <a name="routingMode" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.routingMode"></a>

```java
public java.lang.String getRoutingMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNetworkConfig <a name="GoogleComputeNetworkConfig" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network.GoogleComputeNetworkConfig;

GoogleComputeNetworkConfig.builder()
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
//  .autoCreateSubnetworks(java.lang.Boolean)
//  .autoCreateSubnetworks(IResolvable)
//  .bgpAlwaysCompareMed(java.lang.Boolean)
//  .bgpAlwaysCompareMed(IResolvable)
//  .bgpBestPathSelectionMode(java.lang.String)
//  .bgpInterRegionCost(java.lang.String)
//  .deleteDefaultRoutesOnCreate(java.lang.Boolean)
//  .deleteDefaultRoutesOnCreate(IResolvable)
//  .description(java.lang.String)
//  .enableUlaInternalIpv6(java.lang.Boolean)
//  .enableUlaInternalIpv6(IResolvable)
//  .id(java.lang.String)
//  .internalIpv6Range(java.lang.String)
//  .mtu(java.lang.Number)
//  .networkFirewallPolicyEnforcementOrder(java.lang.String)
//  .networkProfile(java.lang.String)
//  .project(java.lang.String)
//  .routingMode(java.lang.String)
//  .timeouts(GoogleComputeNetworkTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.autoCreateSubnetworks">autoCreateSubnetworks</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to 'true', the network is created in "auto subnet mode" and it will create a subnet for each region automatically across the '10.128.0.0/9' address range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.bgpAlwaysCompareMed">bgpAlwaysCompareMed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables/disables the comparison of MED across routes with different Neighbor ASNs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.bgpBestPathSelectionMode">bgpBestPathSelectionMode</a></code> | <code>java.lang.String</code> | The BGP best selection algorithm to be employed. MODE can be LEGACY or STANDARD. Possible values: ["LEGACY", "STANDARD"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.bgpInterRegionCost">bgpInterRegionCost</a></code> | <code>java.lang.String</code> | Choice of the behavior of inter-regional cost and MED in the BPS algorithm. Possible values: ["DEFAULT", "ADD_COST_TO_MED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.deleteDefaultRoutesOnCreate">deleteDefaultRoutesOnCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to 'true', default routes ('0.0.0.0/0') will be deleted immediately after network creation. Defaults to 'false'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. The resource must be recreated to modify this field. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.enableUlaInternalIpv6">enableUlaInternalIpv6</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable ULA internal ipv6 on this network. Enabling this feature will assign a /48 from google defined ULA prefix fd20::/20. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#id GoogleComputeNetwork#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.internalIpv6Range">internalIpv6Range</a></code> | <code>java.lang.String</code> | When enabling ula internal ipv6, caller optionally can specify the /48 range they want from the google defined ULA prefix fd20::/20. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.mtu">mtu</a></code> | <code>java.lang.Number</code> | Maximum Transmission Unit in bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.networkFirewallPolicyEnforcementOrder">networkFirewallPolicyEnforcementOrder</a></code> | <code>java.lang.String</code> | Set the order that Firewall Rules and Firewall Policies are evaluated. Default value: "AFTER_CLASSIC_FIREWALL" Possible values: ["BEFORE_CLASSIC_FIREWALL", "AFTER_CLASSIC_FIREWALL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.networkProfile">networkProfile</a></code> | <code>java.lang.String</code> | A full or partial URL of the network profile to apply to this network. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#project GoogleComputeNetwork#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.routingMode">routingMode</a></code> | <code>java.lang.String</code> | The network-wide routing mode to use. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts">GoogleComputeNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#name GoogleComputeNetwork#name}

---

##### `autoCreateSubnetworks`<sup>Optional</sup> <a name="autoCreateSubnetworks" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.autoCreateSubnetworks"></a>

```java
public java.lang.Object getAutoCreateSubnetworks();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to 'true', the network is created in "auto subnet mode" and it will create a subnet for each region automatically across the '10.128.0.0/9' address range.

When set to 'false', the network is created in "custom subnet mode" so
the user can explicitly connect subnetwork resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#auto_create_subnetworks GoogleComputeNetwork#auto_create_subnetworks}

---

##### `bgpAlwaysCompareMed`<sup>Optional</sup> <a name="bgpAlwaysCompareMed" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.bgpAlwaysCompareMed"></a>

```java
public java.lang.Object getBgpAlwaysCompareMed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables/disables the comparison of MED across routes with different Neighbor ASNs.

This value can only be set if the --bgp-best-path-selection-mode is STANDARD

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#bgp_always_compare_med GoogleComputeNetwork#bgp_always_compare_med}

---

##### `bgpBestPathSelectionMode`<sup>Optional</sup> <a name="bgpBestPathSelectionMode" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.bgpBestPathSelectionMode"></a>

```java
public java.lang.String getBgpBestPathSelectionMode();
```

- *Type:* java.lang.String

The BGP best selection algorithm to be employed. MODE can be LEGACY or STANDARD. Possible values: ["LEGACY", "STANDARD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#bgp_best_path_selection_mode GoogleComputeNetwork#bgp_best_path_selection_mode}

---

##### `bgpInterRegionCost`<sup>Optional</sup> <a name="bgpInterRegionCost" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.bgpInterRegionCost"></a>

```java
public java.lang.String getBgpInterRegionCost();
```

- *Type:* java.lang.String

Choice of the behavior of inter-regional cost and MED in the BPS algorithm. Possible values: ["DEFAULT", "ADD_COST_TO_MED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#bgp_inter_region_cost GoogleComputeNetwork#bgp_inter_region_cost}

---

##### `deleteDefaultRoutesOnCreate`<sup>Optional</sup> <a name="deleteDefaultRoutesOnCreate" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.deleteDefaultRoutesOnCreate"></a>

```java
public java.lang.Object getDeleteDefaultRoutesOnCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to 'true', default routes ('0.0.0.0/0') will be deleted immediately after network creation. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#delete_default_routes_on_create GoogleComputeNetwork#delete_default_routes_on_create}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. The resource must be recreated to modify this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#description GoogleComputeNetwork#description}

---

##### `enableUlaInternalIpv6`<sup>Optional</sup> <a name="enableUlaInternalIpv6" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.enableUlaInternalIpv6"></a>

```java
public java.lang.Object getEnableUlaInternalIpv6();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable ULA internal ipv6 on this network. Enabling this feature will assign a /48 from google defined ULA prefix fd20::/20.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#enable_ula_internal_ipv6 GoogleComputeNetwork#enable_ula_internal_ipv6}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#id GoogleComputeNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internalIpv6Range`<sup>Optional</sup> <a name="internalIpv6Range" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.internalIpv6Range"></a>

```java
public java.lang.String getInternalIpv6Range();
```

- *Type:* java.lang.String

When enabling ula internal ipv6, caller optionally can specify the /48 range they want from the google defined ULA prefix fd20::/20.

The input must be a
valid /48 ULA IPv6 address and must be within the fd20::/20. Operation will
fail if the speficied /48 is already in used by another resource.
If the field is not speficied, then a /48 range will be randomly allocated from fd20::/20 and returned via this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#internal_ipv6_range GoogleComputeNetwork#internal_ipv6_range}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.mtu"></a>

```java
public java.lang.Number getMtu();
```

- *Type:* java.lang.Number

Maximum Transmission Unit in bytes.

The default value is 1460 bytes.
The minimum value for this field is 1300 and the maximum value is 8896 bytes (jumbo frames).
Note that packets larger than 1500 bytes (standard Ethernet) can be subject to TCP-MSS clamping or dropped
with an ICMP 'Fragmentation-Needed' message if the packets are routed to the Internet or other VPCs
with varying MTUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#mtu GoogleComputeNetwork#mtu}

---

##### `networkFirewallPolicyEnforcementOrder`<sup>Optional</sup> <a name="networkFirewallPolicyEnforcementOrder" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.networkFirewallPolicyEnforcementOrder"></a>

```java
public java.lang.String getNetworkFirewallPolicyEnforcementOrder();
```

- *Type:* java.lang.String

Set the order that Firewall Rules and Firewall Policies are evaluated. Default value: "AFTER_CLASSIC_FIREWALL" Possible values: ["BEFORE_CLASSIC_FIREWALL", "AFTER_CLASSIC_FIREWALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#network_firewall_policy_enforcement_order GoogleComputeNetwork#network_firewall_policy_enforcement_order}

---

##### `networkProfile`<sup>Optional</sup> <a name="networkProfile" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.networkProfile"></a>

```java
public java.lang.String getNetworkProfile();
```

- *Type:* java.lang.String

A full or partial URL of the network profile to apply to this network.

This field can be set only at resource creation time. For example, the
following are valid URLs:

* https://www.googleapis.com/compute/beta/projects/{projectId}/global/networkProfiles/{network_profile_name}
* projects/{projectId}/global/networkProfiles/{network_profile_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#network_profile GoogleComputeNetwork#network_profile}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#project GoogleComputeNetwork#project}.

---

##### `routingMode`<sup>Optional</sup> <a name="routingMode" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.routingMode"></a>

```java
public java.lang.String getRoutingMode();
```

- *Type:* java.lang.String

The network-wide routing mode to use.

If set to 'REGIONAL', this
network's cloud routers will only advertise routes with subnetworks
of this network in the same region as the router. If set to 'GLOBAL',
this network's cloud routers will advertise routes with all
subnetworks of this network, across regions. Possible values: ["REGIONAL", "GLOBAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#routing_mode GoogleComputeNetwork#routing_mode}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.timeouts"></a>

```java
public GoogleComputeNetworkTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts">GoogleComputeNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#timeouts GoogleComputeNetwork#timeouts}

---

### GoogleComputeNetworkTimeouts <a name="GoogleComputeNetworkTimeouts" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network.GoogleComputeNetworkTimeouts;

GoogleComputeNetworkTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#create GoogleComputeNetwork#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#delete GoogleComputeNetwork#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#update GoogleComputeNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#create GoogleComputeNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#delete GoogleComputeNetwork#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_network#update GoogleComputeNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNetworkTimeoutsOutputReference <a name="GoogleComputeNetworkTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_network.GoogleComputeNetworkTimeoutsOutputReference;

new GoogleComputeNetworkTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts">GoogleComputeNetworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts">GoogleComputeNetworkTimeouts</a>

---



