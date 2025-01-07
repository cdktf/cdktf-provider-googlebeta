# `googleNetworkConnectivityPolicyBasedRoute` Submodule <a name="`googleNetworkConnectivityPolicyBasedRoute` Submodule" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivityPolicyBasedRoute <a name="GoogleNetworkConnectivityPolicyBasedRoute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route google_network_connectivity_policy_based_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_policy_based_route.GoogleNetworkConnectivityPolicyBasedRoute;

GoogleNetworkConnectivityPolicyBasedRoute.Builder.create(Construct scope, java.lang.String id)
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
    .filter(GoogleNetworkConnectivityPolicyBasedRouteFilter)
    .name(java.lang.String)
    .network(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .interconnectAttachment(GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .nextHopIlbIp(java.lang.String)
//  .nextHopOtherRoutes(java.lang.String)
//  .priority(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkConnectivityPolicyBasedRouteTimeouts)
//  .virtualMachine(GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the policy based route. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#id GoogleNetworkConnectivityPolicyBasedRoute#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.interconnectAttachment">interconnectAttachment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a></code> | interconnect_attachment block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.nextHopIlbIp">nextHopIlbIp</a></code> | <code>java.lang.String</code> | The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.nextHopOtherRoutes">nextHopOtherRoutes</a></code> | <code>java.lang.String</code> | Other routes that will be referenced to determine the next hop of the packet. Possible values: ["DEFAULT_ROUTING"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of this policy-based route. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#project GoogleNetworkConnectivityPolicyBasedRoute#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts">GoogleNetworkConnectivityPolicyBasedRouteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.virtualMachine">virtualMachine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a></code> | virtual_machine block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#filter GoogleNetworkConnectivityPolicyBasedRoute#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the policy based route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#name GoogleNetworkConnectivityPolicyBasedRoute#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.network"></a>

- *Type:* java.lang.String

Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#network GoogleNetworkConnectivityPolicyBasedRoute#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#description GoogleNetworkConnectivityPolicyBasedRoute#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#id GoogleNetworkConnectivityPolicyBasedRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnectAttachment`<sup>Optional</sup> <a name="interconnectAttachment" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.interconnectAttachment"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

interconnect_attachment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#interconnect_attachment GoogleNetworkConnectivityPolicyBasedRoute#interconnect_attachment}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#labels GoogleNetworkConnectivityPolicyBasedRoute#labels}

---

##### `nextHopIlbIp`<sup>Optional</sup> <a name="nextHopIlbIp" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.nextHopIlbIp"></a>

- *Type:* java.lang.String

The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#next_hop_ilb_ip GoogleNetworkConnectivityPolicyBasedRoute#next_hop_ilb_ip}

---

##### `nextHopOtherRoutes`<sup>Optional</sup> <a name="nextHopOtherRoutes" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.nextHopOtherRoutes"></a>

- *Type:* java.lang.String

Other routes that will be referenced to determine the next hop of the packet. Possible values: ["DEFAULT_ROUTING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#next_hop_other_routes GoogleNetworkConnectivityPolicyBasedRoute#next_hop_other_routes}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

The priority of this policy-based route.

Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#priority GoogleNetworkConnectivityPolicyBasedRoute#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#project GoogleNetworkConnectivityPolicyBasedRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts">GoogleNetworkConnectivityPolicyBasedRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#timeouts GoogleNetworkConnectivityPolicyBasedRoute#timeouts}

---

##### `virtualMachine`<sup>Optional</sup> <a name="virtualMachine" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.virtualMachine"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#virtual_machine GoogleNetworkConnectivityPolicyBasedRoute#virtual_machine}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putInterconnectAttachment">putInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putVirtualMachine">putVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetInterconnectAttachment">resetInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetNextHopIlbIp">resetNextHopIlbIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetNextHopOtherRoutes">resetNextHopOtherRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetVirtualMachine">resetVirtualMachine</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putFilter"></a>

```java
public void putFilter(GoogleNetworkConnectivityPolicyBasedRouteFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a>

---

##### `putInterconnectAttachment` <a name="putInterconnectAttachment" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putInterconnectAttachment"></a>

```java
public void putInterconnectAttachment(GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putInterconnectAttachment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkConnectivityPolicyBasedRouteTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts">GoogleNetworkConnectivityPolicyBasedRouteTimeouts</a>

---

##### `putVirtualMachine` <a name="putVirtualMachine" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putVirtualMachine"></a>

```java
public void putVirtualMachine(GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putVirtualMachine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetId"></a>

```java
public void resetId()
```

##### `resetInterconnectAttachment` <a name="resetInterconnectAttachment" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetInterconnectAttachment"></a>

```java
public void resetInterconnectAttachment()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNextHopIlbIp` <a name="resetNextHopIlbIp" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetNextHopIlbIp"></a>

```java
public void resetNextHopIlbIp()
```

##### `resetNextHopOtherRoutes` <a name="resetNextHopOtherRoutes" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetNextHopOtherRoutes"></a>

```java
public void resetNextHopOtherRoutes()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVirtualMachine` <a name="resetVirtualMachine" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetVirtualMachine"></a>

```java
public void resetVirtualMachine()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkConnectivityPolicyBasedRoute resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_policy_based_route.GoogleNetworkConnectivityPolicyBasedRoute;

GoogleNetworkConnectivityPolicyBasedRoute.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_policy_based_route.GoogleNetworkConnectivityPolicyBasedRoute;

GoogleNetworkConnectivityPolicyBasedRoute.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_policy_based_route.GoogleNetworkConnectivityPolicyBasedRoute;

GoogleNetworkConnectivityPolicyBasedRoute.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_policy_based_route.GoogleNetworkConnectivityPolicyBasedRoute;

GoogleNetworkConnectivityPolicyBasedRoute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkConnectivityPolicyBasedRoute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleNetworkConnectivityPolicyBasedRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkConnectivityPolicyBasedRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkConnectivityPolicyBasedRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkConnectivityPolicyBasedRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference">GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.interconnectAttachment">interconnectAttachment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference">GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.virtualMachine">virtualMachine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.warnings">warnings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList">GoogleNetworkConnectivityPolicyBasedRouteWarningsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.interconnectAttachmentInput">interconnectAttachmentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopIlbIpInput">nextHopIlbIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutesInput">nextHopOtherRoutesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts">GoogleNetworkConnectivityPolicyBasedRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.virtualMachineInput">virtualMachineInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopIlbIp">nextHopIlbIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutes">nextHopOtherRoutes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.filter"></a>

```java
public GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference">GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference</a>

---

##### `interconnectAttachment`<sup>Required</sup> <a name="interconnectAttachment" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.interconnectAttachment"></a>

```java
public GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference getInterconnectAttachment();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.timeouts"></a>

```java
public GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference">GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `virtualMachine`<sup>Required</sup> <a name="virtualMachine" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.virtualMachine"></a>

```java
public GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference getVirtualMachine();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference</a>

---

##### `warnings`<sup>Required</sup> <a name="warnings" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.warnings"></a>

```java
public GoogleNetworkConnectivityPolicyBasedRouteWarningsList getWarnings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList">GoogleNetworkConnectivityPolicyBasedRouteWarningsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.filterInput"></a>

```java
public GoogleNetworkConnectivityPolicyBasedRouteFilter getFilterInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `interconnectAttachmentInput`<sup>Optional</sup> <a name="interconnectAttachmentInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.interconnectAttachmentInput"></a>

```java
public GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment getInterconnectAttachmentInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `nextHopIlbIpInput`<sup>Optional</sup> <a name="nextHopIlbIpInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopIlbIpInput"></a>

```java
public java.lang.String getNextHopIlbIpInput();
```

- *Type:* java.lang.String

---

##### `nextHopOtherRoutesInput`<sup>Optional</sup> <a name="nextHopOtherRoutesInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutesInput"></a>

```java
public java.lang.String getNextHopOtherRoutesInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts">GoogleNetworkConnectivityPolicyBasedRouteTimeouts</a>

---

##### `virtualMachineInput`<sup>Optional</sup> <a name="virtualMachineInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.virtualMachineInput"></a>

```java
public GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine getVirtualMachineInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `nextHopIlbIp`<sup>Required</sup> <a name="nextHopIlbIp" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopIlbIp"></a>

```java
public java.lang.String getNextHopIlbIp();
```

- *Type:* java.lang.String

---

##### `nextHopOtherRoutes`<sup>Required</sup> <a name="nextHopOtherRoutes" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutes"></a>

```java
public java.lang.String getNextHopOtherRoutes();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivityPolicyBasedRouteConfig <a name="GoogleNetworkConnectivityPolicyBasedRouteConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_policy_based_route.GoogleNetworkConnectivityPolicyBasedRouteConfig;

GoogleNetworkConnectivityPolicyBasedRouteConfig.builder()
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
    .filter(GoogleNetworkConnectivityPolicyBasedRouteFilter)
    .name(java.lang.String)
    .network(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .interconnectAttachment(GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .nextHopIlbIp(java.lang.String)
//  .nextHopOtherRoutes(java.lang.String)
//  .priority(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkConnectivityPolicyBasedRouteTimeouts)
//  .virtualMachine(GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the policy based route. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.network">network</a></code> | <code>java.lang.String</code> | Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#id GoogleNetworkConnectivityPolicyBasedRoute#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.interconnectAttachment">interconnectAttachment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a></code> | interconnect_attachment block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.nextHopIlbIp">nextHopIlbIp</a></code> | <code>java.lang.String</code> | The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.nextHopOtherRoutes">nextHopOtherRoutes</a></code> | <code>java.lang.String</code> | Other routes that will be referenced to determine the next hop of the packet. Possible values: ["DEFAULT_ROUTING"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of this policy-based route. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#project GoogleNetworkConnectivityPolicyBasedRoute#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts">GoogleNetworkConnectivityPolicyBasedRouteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.virtualMachine">virtualMachine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a></code> | virtual_machine block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.filter"></a>

```java
public GoogleNetworkConnectivityPolicyBasedRouteFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#filter GoogleNetworkConnectivityPolicyBasedRoute#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the policy based route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#name GoogleNetworkConnectivityPolicyBasedRoute#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#network GoogleNetworkConnectivityPolicyBasedRoute#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#description GoogleNetworkConnectivityPolicyBasedRoute#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#id GoogleNetworkConnectivityPolicyBasedRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnectAttachment`<sup>Optional</sup> <a name="interconnectAttachment" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.interconnectAttachment"></a>

```java
public GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment getInterconnectAttachment();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

interconnect_attachment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#interconnect_attachment GoogleNetworkConnectivityPolicyBasedRoute#interconnect_attachment}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#labels GoogleNetworkConnectivityPolicyBasedRoute#labels}

---

##### `nextHopIlbIp`<sup>Optional</sup> <a name="nextHopIlbIp" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.nextHopIlbIp"></a>

```java
public java.lang.String getNextHopIlbIp();
```

- *Type:* java.lang.String

The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#next_hop_ilb_ip GoogleNetworkConnectivityPolicyBasedRoute#next_hop_ilb_ip}

---

##### `nextHopOtherRoutes`<sup>Optional</sup> <a name="nextHopOtherRoutes" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.nextHopOtherRoutes"></a>

```java
public java.lang.String getNextHopOtherRoutes();
```

- *Type:* java.lang.String

Other routes that will be referenced to determine the next hop of the packet. Possible values: ["DEFAULT_ROUTING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#next_hop_other_routes GoogleNetworkConnectivityPolicyBasedRoute#next_hop_other_routes}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

The priority of this policy-based route.

Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#priority GoogleNetworkConnectivityPolicyBasedRoute#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#project GoogleNetworkConnectivityPolicyBasedRoute#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.timeouts"></a>

```java
public GoogleNetworkConnectivityPolicyBasedRouteTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts">GoogleNetworkConnectivityPolicyBasedRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#timeouts GoogleNetworkConnectivityPolicyBasedRoute#timeouts}

---

##### `virtualMachine`<sup>Optional</sup> <a name="virtualMachine" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.virtualMachine"></a>

```java
public GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine getVirtualMachine();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#virtual_machine GoogleNetworkConnectivityPolicyBasedRoute#virtual_machine}

---

### GoogleNetworkConnectivityPolicyBasedRouteFilter <a name="GoogleNetworkConnectivityPolicyBasedRouteFilter" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_policy_based_route.GoogleNetworkConnectivityPolicyBasedRouteFilter;

GoogleNetworkConnectivityPolicyBasedRouteFilter.builder()
    .protocolVersion(java.lang.String)
//  .destRange(java.lang.String)
//  .ipProtocol(java.lang.String)
//  .srcRange(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | Internet protocol versions this policy-based route applies to. Possible values: ["IPV4"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.destRange">destRange</a></code> | <code>java.lang.String</code> | The destination IP range of outgoing packets that this policy-based route applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.srcRange">srcRange</a></code> | <code>java.lang.String</code> | The source IP range of outgoing packets that this policy-based route applies to. |

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.protocolVersion"></a>

```java
public java.lang.String getProtocolVersion();
```

- *Type:* java.lang.String

Internet protocol versions this policy-based route applies to. Possible values: ["IPV4"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#protocol_version GoogleNetworkConnectivityPolicyBasedRoute#protocol_version}

---

##### `destRange`<sup>Optional</sup> <a name="destRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.destRange"></a>

```java
public java.lang.String getDestRange();
```

- *Type:* java.lang.String

The destination IP range of outgoing packets that this policy-based route applies to.

Default is "0.0.0.0/0" if protocol version is IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#dest_range GoogleNetworkConnectivityPolicyBasedRoute#dest_range}

---

##### `ipProtocol`<sup>Optional</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#ip_protocol GoogleNetworkConnectivityPolicyBasedRoute#ip_protocol}

---

##### `srcRange`<sup>Optional</sup> <a name="srcRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.srcRange"></a>

```java
public java.lang.String getSrcRange();
```

- *Type:* java.lang.String

The source IP range of outgoing packets that this policy-based route applies to.

Default is "0.0.0.0/0" if protocol version is IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#src_range GoogleNetworkConnectivityPolicyBasedRoute#src_range}

---

### GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment <a name="GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_policy_based_route.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment;

GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment.builder()
    .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment.property.region">region</a></code> | <code>java.lang.String</code> | Cloud region to install this policy-based route on for Interconnect attachments. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Cloud region to install this policy-based route on for Interconnect attachments.

Use 'all' to install it on all Interconnect attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#region GoogleNetworkConnectivityPolicyBasedRoute#region}

---

### GoogleNetworkConnectivityPolicyBasedRouteTimeouts <a name="GoogleNetworkConnectivityPolicyBasedRouteTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_policy_based_route.GoogleNetworkConnectivityPolicyBasedRouteTimeouts;

GoogleNetworkConnectivityPolicyBasedRouteTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#create GoogleNetworkConnectivityPolicyBasedRoute#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#delete GoogleNetworkConnectivityPolicyBasedRoute#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#update GoogleNetworkConnectivityPolicyBasedRoute#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#create GoogleNetworkConnectivityPolicyBasedRoute#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#delete GoogleNetworkConnectivityPolicyBasedRoute#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#update GoogleNetworkConnectivityPolicyBasedRoute#update}.

---

### GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine <a name="GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_policy_based_route.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine;

GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine.builder()
    .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A list of VM instance tags that this policy-based route applies to. |

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

A list of VM instance tags that this policy-based route applies to.

VM instances that have ANY of tags specified here will install this PBR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_connectivity_policy_based_route#tags GoogleNetworkConnectivityPolicyBasedRoute#tags}

---

### GoogleNetworkConnectivityPolicyBasedRouteWarnings <a name="GoogleNetworkConnectivityPolicyBasedRouteWarnings" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarnings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarnings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_policy_based_route.GoogleNetworkConnectivityPolicyBasedRouteWarnings;

GoogleNetworkConnectivityPolicyBasedRouteWarnings.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference <a name="GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_policy_based_route.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference;

new GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resetDestRange">resetDestRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resetIpProtocol">resetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resetSrcRange">resetSrcRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestRange` <a name="resetDestRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resetDestRange"></a>

```java
public void resetDestRange()
```

##### `resetIpProtocol` <a name="resetIpProtocol" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resetIpProtocol"></a>

```java
public void resetIpProtocol()
```

##### `resetSrcRange` <a name="resetSrcRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resetSrcRange"></a>

```java
public void resetSrcRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRangeInput">destRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersionInput">protocolVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRangeInput">srcRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRange">destRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersion">protocolVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRange">srcRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destRangeInput`<sup>Optional</sup> <a name="destRangeInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRangeInput"></a>

```java
public java.lang.String getDestRangeInput();
```

- *Type:* java.lang.String

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocolInput"></a>

```java
public java.lang.String getIpProtocolInput();
```

- *Type:* java.lang.String

---

##### `protocolVersionInput`<sup>Optional</sup> <a name="protocolVersionInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersionInput"></a>

```java
public java.lang.String getProtocolVersionInput();
```

- *Type:* java.lang.String

---

##### `srcRangeInput`<sup>Optional</sup> <a name="srcRangeInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRangeInput"></a>

```java
public java.lang.String getSrcRangeInput();
```

- *Type:* java.lang.String

---

##### `destRange`<sup>Required</sup> <a name="destRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRange"></a>

```java
public java.lang.String getDestRange();
```

- *Type:* java.lang.String

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersion"></a>

```java
public java.lang.String getProtocolVersion();
```

- *Type:* java.lang.String

---

##### `srcRange`<sup>Required</sup> <a name="srcRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRange"></a>

```java
public java.lang.String getSrcRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.internalValue"></a>

```java
public GoogleNetworkConnectivityPolicyBasedRouteFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a>

---


### GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference <a name="GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_policy_based_route.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference;

new GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.internalValue"></a>

```java
public GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

---


### GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference <a name="GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_policy_based_route.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference;

new GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts">GoogleNetworkConnectivityPolicyBasedRouteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts">GoogleNetworkConnectivityPolicyBasedRouteTimeouts</a>

---


### GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference <a name="GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_policy_based_route.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference;

new GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.internalValue"></a>

```java
public GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a>

---


### GoogleNetworkConnectivityPolicyBasedRouteWarningsList <a name="GoogleNetworkConnectivityPolicyBasedRouteWarningsList" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_policy_based_route.GoogleNetworkConnectivityPolicyBasedRouteWarningsList;

new GoogleNetworkConnectivityPolicyBasedRouteWarningsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.get"></a>

```java
public GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference <a name="GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_policy_based_route.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference;

new GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.data">data</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.warningMessage">warningMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarnings">GoogleNetworkConnectivityPolicyBasedRouteWarnings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.data"></a>

```java
public StringMap getData();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `warningMessage`<sup>Required</sup> <a name="warningMessage" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.warningMessage"></a>

```java
public java.lang.String getWarningMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.internalValue"></a>

```java
public GoogleNetworkConnectivityPolicyBasedRouteWarnings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarnings">GoogleNetworkConnectivityPolicyBasedRouteWarnings</a>

---



