# `googleNetworkConnectivityInternalRange` Submodule <a name="`googleNetworkConnectivityInternalRange` Submodule" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivityInternalRange <a name="GoogleNetworkConnectivityInternalRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range google_network_connectivity_internal_range}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_internal_range.GoogleNetworkConnectivityInternalRange;

GoogleNetworkConnectivityInternalRange.Builder.create(Construct scope, java.lang.String id)
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
    .peering(java.lang.String)
    .usage(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ipCidrRange(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .migration(GoogleNetworkConnectivityInternalRangeMigration)
//  .overlaps(java.util.List<java.lang.String>)
//  .prefixLength(java.lang.Number)
//  .project(java.lang.String)
//  .targetCidrRange(java.util.List<java.lang.String>)
//  .timeouts(GoogleNetworkConnectivityInternalRangeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the policy based route. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.peering">peering</a></code> | <code>java.lang.String</code> | The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.usage">usage</a></code> | <code>java.lang.String</code> | The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC", "FOR_MIGRATION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#id GoogleNetworkConnectivityInternalRange#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The IP range that this internal range defines. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.migration">migration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.overlaps">overlaps</a></code> | <code>java.util.List<java.lang.String></code> | Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.prefixLength">prefixLength</a></code> | <code>java.lang.Number</code> | An alternate to ipCidrRange. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#project GoogleNetworkConnectivityInternalRange#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.targetCidrRange">targetCidrRange</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the policy based route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#name GoogleNetworkConnectivityInternalRange#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.network"></a>

- *Type:* java.lang.String

Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#network GoogleNetworkConnectivityInternalRange#network}

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.peering"></a>

- *Type:* java.lang.String

The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#peering GoogleNetworkConnectivityInternalRange#peering}

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.usage"></a>

- *Type:* java.lang.String

The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC", "FOR_MIGRATION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#usage GoogleNetworkConnectivityInternalRange#usage}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#description GoogleNetworkConnectivityInternalRange#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#id GoogleNetworkConnectivityInternalRange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipCidrRange`<sup>Optional</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.ipCidrRange"></a>

- *Type:* java.lang.String

The IP range that this internal range defines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#ip_cidr_range GoogleNetworkConnectivityInternalRange#ip_cidr_range}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#labels GoogleNetworkConnectivityInternalRange#labels}

---

##### `migration`<sup>Optional</sup> <a name="migration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.migration"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#migration GoogleNetworkConnectivityInternalRange#migration}

---

##### `overlaps`<sup>Optional</sup> <a name="overlaps" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.overlaps"></a>

- *Type:* java.util.List<java.lang.String>

Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#overlaps GoogleNetworkConnectivityInternalRange#overlaps}

---

##### `prefixLength`<sup>Optional</sup> <a name="prefixLength" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.prefixLength"></a>

- *Type:* java.lang.Number

An alternate to ipCidrRange.

Can be set when trying to create a reservation that automatically finds a free range of the given size.
If both ipCidrRange and prefixLength are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#prefix_length GoogleNetworkConnectivityInternalRange#prefix_length}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#project GoogleNetworkConnectivityInternalRange#project}.

---

##### `targetCidrRange`<sup>Optional</sup> <a name="targetCidrRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.targetCidrRange"></a>

- *Type:* java.util.List<java.lang.String>

Optional.

Can be set to narrow down or pick a different address space while searching for a free range.
If not set, defaults to the "10.0.0.0/8" address space. This can be used to search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#target_cidr_range GoogleNetworkConnectivityInternalRange#target_cidr_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#timeouts GoogleNetworkConnectivityInternalRange#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putMigration">putMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetIpCidrRange">resetIpCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetMigration">resetMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetOverlaps">resetOverlaps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetPrefixLength">resetPrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetTargetCidrRange">resetTargetCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMigration` <a name="putMigration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putMigration"></a>

```java
public void putMigration(GoogleNetworkConnectivityInternalRangeMigration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putMigration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkConnectivityInternalRangeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetId"></a>

```java
public void resetId()
```

##### `resetIpCidrRange` <a name="resetIpCidrRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetIpCidrRange"></a>

```java
public void resetIpCidrRange()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMigration` <a name="resetMigration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetMigration"></a>

```java
public void resetMigration()
```

##### `resetOverlaps` <a name="resetOverlaps" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetOverlaps"></a>

```java
public void resetOverlaps()
```

##### `resetPrefixLength` <a name="resetPrefixLength" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetPrefixLength"></a>

```java
public void resetPrefixLength()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetProject"></a>

```java
public void resetProject()
```

##### `resetTargetCidrRange` <a name="resetTargetCidrRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetTargetCidrRange"></a>

```java
public void resetTargetCidrRange()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkConnectivityInternalRange resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_internal_range.GoogleNetworkConnectivityInternalRange;

GoogleNetworkConnectivityInternalRange.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_internal_range.GoogleNetworkConnectivityInternalRange;

GoogleNetworkConnectivityInternalRange.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_internal_range.GoogleNetworkConnectivityInternalRange;

GoogleNetworkConnectivityInternalRange.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_internal_range.GoogleNetworkConnectivityInternalRange;

GoogleNetworkConnectivityInternalRange.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkConnectivityInternalRange.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleNetworkConnectivityInternalRange resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkConnectivityInternalRange to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkConnectivityInternalRange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkConnectivityInternalRange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference">GoogleNetworkConnectivityInternalRangeMigrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference">GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.users">users</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.migrationInput">migrationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.overlapsInput">overlapsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.peeringInput">peeringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.prefixLengthInput">prefixLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.targetCidrRangeInput">targetCidrRangeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.usageInput">usageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.overlaps">overlaps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.peering">peering</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.prefixLength">prefixLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.targetCidrRange">targetCidrRange</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.usage">usage</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `migration`<sup>Required</sup> <a name="migration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.migration"></a>

```java
public GoogleNetworkConnectivityInternalRangeMigrationOutputReference getMigration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference">GoogleNetworkConnectivityInternalRangeMigrationOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.timeouts"></a>

```java
public GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference">GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.users"></a>

```java
public java.util.List<java.lang.String> getUsers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.ipCidrRangeInput"></a>

```java
public java.lang.String getIpCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `migrationInput`<sup>Optional</sup> <a name="migrationInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.migrationInput"></a>

```java
public GoogleNetworkConnectivityInternalRangeMigration getMigrationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `overlapsInput`<sup>Optional</sup> <a name="overlapsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.overlapsInput"></a>

```java
public java.util.List<java.lang.String> getOverlapsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peeringInput`<sup>Optional</sup> <a name="peeringInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.peeringInput"></a>

```java
public java.lang.String getPeeringInput();
```

- *Type:* java.lang.String

---

##### `prefixLengthInput`<sup>Optional</sup> <a name="prefixLengthInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.prefixLengthInput"></a>

```java
public java.lang.Number getPrefixLengthInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `targetCidrRangeInput`<sup>Optional</sup> <a name="targetCidrRangeInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.targetCidrRangeInput"></a>

```java
public java.util.List<java.lang.String> getTargetCidrRangeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a>

---

##### `usageInput`<sup>Optional</sup> <a name="usageInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.usageInput"></a>

```java
public java.lang.String getUsageInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `overlaps`<sup>Required</sup> <a name="overlaps" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.overlaps"></a>

```java
public java.util.List<java.lang.String> getOverlaps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.peering"></a>

```java
public java.lang.String getPeering();
```

- *Type:* java.lang.String

---

##### `prefixLength`<sup>Required</sup> <a name="prefixLength" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.prefixLength"></a>

```java
public java.lang.Number getPrefixLength();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `targetCidrRange`<sup>Required</sup> <a name="targetCidrRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.targetCidrRange"></a>

```java
public java.util.List<java.lang.String> getTargetCidrRange();
```

- *Type:* java.util.List<java.lang.String>

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.usage"></a>

```java
public java.lang.String getUsage();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRange.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivityInternalRangeConfig <a name="GoogleNetworkConnectivityInternalRangeConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_internal_range.GoogleNetworkConnectivityInternalRangeConfig;

GoogleNetworkConnectivityInternalRangeConfig.builder()
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
    .peering(java.lang.String)
    .usage(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ipCidrRange(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .migration(GoogleNetworkConnectivityInternalRangeMigration)
//  .overlaps(java.util.List<java.lang.String>)
//  .prefixLength(java.lang.Number)
//  .project(java.lang.String)
//  .targetCidrRange(java.util.List<java.lang.String>)
//  .timeouts(GoogleNetworkConnectivityInternalRangeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the policy based route. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.network">network</a></code> | <code>java.lang.String</code> | Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.peering">peering</a></code> | <code>java.lang.String</code> | The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.usage">usage</a></code> | <code>java.lang.String</code> | The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC", "FOR_MIGRATION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#id GoogleNetworkConnectivityInternalRange#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The IP range that this internal range defines. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.migration">migration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a></code> | migration block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.overlaps">overlaps</a></code> | <code>java.util.List<java.lang.String></code> | Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.prefixLength">prefixLength</a></code> | <code>java.lang.Number</code> | An alternate to ipCidrRange. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#project GoogleNetworkConnectivityInternalRange#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.targetCidrRange">targetCidrRange</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the policy based route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#name GoogleNetworkConnectivityInternalRange#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#network GoogleNetworkConnectivityInternalRange#network}

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.peering"></a>

```java
public java.lang.String getPeering();
```

- *Type:* java.lang.String

The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#peering GoogleNetworkConnectivityInternalRange#peering}

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.usage"></a>

```java
public java.lang.String getUsage();
```

- *Type:* java.lang.String

The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC", "FOR_MIGRATION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#usage GoogleNetworkConnectivityInternalRange#usage}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#description GoogleNetworkConnectivityInternalRange#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#id GoogleNetworkConnectivityInternalRange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipCidrRange`<sup>Optional</sup> <a name="ipCidrRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

The IP range that this internal range defines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#ip_cidr_range GoogleNetworkConnectivityInternalRange#ip_cidr_range}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#labels GoogleNetworkConnectivityInternalRange#labels}

---

##### `migration`<sup>Optional</sup> <a name="migration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.migration"></a>

```java
public GoogleNetworkConnectivityInternalRangeMigration getMigration();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a>

migration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#migration GoogleNetworkConnectivityInternalRange#migration}

---

##### `overlaps`<sup>Optional</sup> <a name="overlaps" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.overlaps"></a>

```java
public java.util.List<java.lang.String> getOverlaps();
```

- *Type:* java.util.List<java.lang.String>

Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#overlaps GoogleNetworkConnectivityInternalRange#overlaps}

---

##### `prefixLength`<sup>Optional</sup> <a name="prefixLength" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.prefixLength"></a>

```java
public java.lang.Number getPrefixLength();
```

- *Type:* java.lang.Number

An alternate to ipCidrRange.

Can be set when trying to create a reservation that automatically finds a free range of the given size.
If both ipCidrRange and prefixLength are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#prefix_length GoogleNetworkConnectivityInternalRange#prefix_length}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#project GoogleNetworkConnectivityInternalRange#project}.

---

##### `targetCidrRange`<sup>Optional</sup> <a name="targetCidrRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.targetCidrRange"></a>

```java
public java.util.List<java.lang.String> getTargetCidrRange();
```

- *Type:* java.util.List<java.lang.String>

Optional.

Can be set to narrow down or pick a different address space while searching for a free range.
If not set, defaults to the "10.0.0.0/8" address space. This can be used to search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#target_cidr_range GoogleNetworkConnectivityInternalRange#target_cidr_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeConfig.property.timeouts"></a>

```java
public GoogleNetworkConnectivityInternalRangeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#timeouts GoogleNetworkConnectivityInternalRange#timeouts}

---

### GoogleNetworkConnectivityInternalRangeMigration <a name="GoogleNetworkConnectivityInternalRangeMigration" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_internal_range.GoogleNetworkConnectivityInternalRangeMigration;

GoogleNetworkConnectivityInternalRangeMigration.builder()
    .source(java.lang.String)
    .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration.property.source">source</a></code> | <code>java.lang.String</code> | Resource path as an URI of the source resource, for example a subnet. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration.property.target">target</a></code> | <code>java.lang.String</code> | Resource path of the target resource. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Resource path as an URI of the source resource, for example a subnet.

The project for the source resource should match the project for the
InternalRange.
An example /projects/{project}/regions/{region}/subnetworks/{subnet}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#source GoogleNetworkConnectivityInternalRange#source}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Resource path of the target resource.

The target project can be
different, as in the cases when migrating to peer networks. The resource
may not exist yet.
For example /projects/{project}/regions/{region}/subnetworks/{subnet}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#target GoogleNetworkConnectivityInternalRange#target}

---

### GoogleNetworkConnectivityInternalRangeTimeouts <a name="GoogleNetworkConnectivityInternalRangeTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_internal_range.GoogleNetworkConnectivityInternalRangeTimeouts;

GoogleNetworkConnectivityInternalRangeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#create GoogleNetworkConnectivityInternalRange#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#delete GoogleNetworkConnectivityInternalRange#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#update GoogleNetworkConnectivityInternalRange#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#create GoogleNetworkConnectivityInternalRange#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#delete GoogleNetworkConnectivityInternalRange#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_network_connectivity_internal_range#update GoogleNetworkConnectivityInternalRange#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivityInternalRangeMigrationOutputReference <a name="GoogleNetworkConnectivityInternalRangeMigrationOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_internal_range.GoogleNetworkConnectivityInternalRangeMigrationOutputReference;

new GoogleNetworkConnectivityInternalRangeMigrationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigrationOutputReference.property.internalValue"></a>

```java
public GoogleNetworkConnectivityInternalRangeMigration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeMigration">GoogleNetworkConnectivityInternalRangeMigration</a>

---


### GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference <a name="GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_connectivity_internal_range.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference;

new GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityInternalRange.GoogleNetworkConnectivityInternalRangeTimeouts">GoogleNetworkConnectivityInternalRangeTimeouts</a>

---



