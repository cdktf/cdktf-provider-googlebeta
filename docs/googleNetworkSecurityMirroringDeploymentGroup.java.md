# `googleNetworkSecurityMirroringDeploymentGroup` Submodule <a name="`googleNetworkSecurityMirroringDeploymentGroup` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityMirroringDeploymentGroup <a name="GoogleNetworkSecurityMirroringDeploymentGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group google_network_security_mirroring_deployment_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_deployment_group.GoogleNetworkSecurityMirroringDeploymentGroup;

GoogleNetworkSecurityMirroringDeploymentGroup.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .mirroringDeploymentGroupId(java.lang.String)
    .network(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkSecurityMirroringDeploymentGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The cloud location of the deployment group, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.mirroringDeploymentGroupId">mirroringDeploymentGroupId</a></code> | <code>java.lang.String</code> | The ID to use for the new deployment group, which will become the final component of the deployment group's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The network that will be used for all child deployments, for example: 'projects/{project}/global/networks/{network}'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | User-provided description of the deployment group. Used as additional context for the deployment group. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#id GoogleNetworkSecurityMirroringDeploymentGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#project GoogleNetworkSecurityMirroringDeploymentGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeouts">GoogleNetworkSecurityMirroringDeploymentGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The cloud location of the deployment group, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#location GoogleNetworkSecurityMirroringDeploymentGroup#location}

---

##### `mirroringDeploymentGroupId`<sup>Required</sup> <a name="mirroringDeploymentGroupId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.mirroringDeploymentGroupId"></a>

- *Type:* java.lang.String

The ID to use for the new deployment group, which will become the final component of the deployment group's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#mirroring_deployment_group_id GoogleNetworkSecurityMirroringDeploymentGroup#mirroring_deployment_group_id}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The network that will be used for all child deployments, for example: 'projects/{project}/global/networks/{network}'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#network GoogleNetworkSecurityMirroringDeploymentGroup#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

User-provided description of the deployment group. Used as additional context for the deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#description GoogleNetworkSecurityMirroringDeploymentGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#id GoogleNetworkSecurityMirroringDeploymentGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#labels GoogleNetworkSecurityMirroringDeploymentGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#project GoogleNetworkSecurityMirroringDeploymentGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeouts">GoogleNetworkSecurityMirroringDeploymentGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#timeouts GoogleNetworkSecurityMirroringDeploymentGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkSecurityMirroringDeploymentGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeouts">GoogleNetworkSecurityMirroringDeploymentGroupTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityMirroringDeploymentGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_deployment_group.GoogleNetworkSecurityMirroringDeploymentGroup;

GoogleNetworkSecurityMirroringDeploymentGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_deployment_group.GoogleNetworkSecurityMirroringDeploymentGroup;

GoogleNetworkSecurityMirroringDeploymentGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_deployment_group.GoogleNetworkSecurityMirroringDeploymentGroup;

GoogleNetworkSecurityMirroringDeploymentGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_deployment_group.GoogleNetworkSecurityMirroringDeploymentGroup;

GoogleNetworkSecurityMirroringDeploymentGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkSecurityMirroringDeploymentGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleNetworkSecurityMirroringDeploymentGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkSecurityMirroringDeploymentGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkSecurityMirroringDeploymentGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityMirroringDeploymentGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.connectedEndpointGroups">connectedEndpointGroups</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList">GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference">GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.mirroringDeploymentGroupIdInput">mirroringDeploymentGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeouts">GoogleNetworkSecurityMirroringDeploymentGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.mirroringDeploymentGroupId">mirroringDeploymentGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectedEndpointGroups`<sup>Required</sup> <a name="connectedEndpointGroups" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.connectedEndpointGroups"></a>

```java
public GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList getConnectedEndpointGroups();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList">GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.timeouts"></a>

```java
public GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference">GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mirroringDeploymentGroupIdInput`<sup>Optional</sup> <a name="mirroringDeploymentGroupIdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.mirroringDeploymentGroupIdInput"></a>

```java
public java.lang.String getMirroringDeploymentGroupIdInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeouts">GoogleNetworkSecurityMirroringDeploymentGroupTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `mirroringDeploymentGroupId`<sup>Required</sup> <a name="mirroringDeploymentGroupId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.mirroringDeploymentGroupId"></a>

```java
public java.lang.String getMirroringDeploymentGroupId();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityMirroringDeploymentGroupConfig <a name="GoogleNetworkSecurityMirroringDeploymentGroupConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_deployment_group.GoogleNetworkSecurityMirroringDeploymentGroupConfig;

GoogleNetworkSecurityMirroringDeploymentGroupConfig.builder()
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
    .location(java.lang.String)
    .mirroringDeploymentGroupId(java.lang.String)
    .network(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkSecurityMirroringDeploymentGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.location">location</a></code> | <code>java.lang.String</code> | The cloud location of the deployment group, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.mirroringDeploymentGroupId">mirroringDeploymentGroupId</a></code> | <code>java.lang.String</code> | The ID to use for the new deployment group, which will become the final component of the deployment group's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.network">network</a></code> | <code>java.lang.String</code> | The network that will be used for all child deployments, for example: 'projects/{project}/global/networks/{network}'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | User-provided description of the deployment group. Used as additional context for the deployment group. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#id GoogleNetworkSecurityMirroringDeploymentGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#project GoogleNetworkSecurityMirroringDeploymentGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeouts">GoogleNetworkSecurityMirroringDeploymentGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The cloud location of the deployment group, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#location GoogleNetworkSecurityMirroringDeploymentGroup#location}

---

##### `mirroringDeploymentGroupId`<sup>Required</sup> <a name="mirroringDeploymentGroupId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.mirroringDeploymentGroupId"></a>

```java
public java.lang.String getMirroringDeploymentGroupId();
```

- *Type:* java.lang.String

The ID to use for the new deployment group, which will become the final component of the deployment group's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#mirroring_deployment_group_id GoogleNetworkSecurityMirroringDeploymentGroup#mirroring_deployment_group_id}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The network that will be used for all child deployments, for example: 'projects/{project}/global/networks/{network}'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#network GoogleNetworkSecurityMirroringDeploymentGroup#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User-provided description of the deployment group. Used as additional context for the deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#description GoogleNetworkSecurityMirroringDeploymentGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#id GoogleNetworkSecurityMirroringDeploymentGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#labels GoogleNetworkSecurityMirroringDeploymentGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#project GoogleNetworkSecurityMirroringDeploymentGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConfig.property.timeouts"></a>

```java
public GoogleNetworkSecurityMirroringDeploymentGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeouts">GoogleNetworkSecurityMirroringDeploymentGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#timeouts GoogleNetworkSecurityMirroringDeploymentGroup#timeouts}

---

### GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroups <a name="GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroups" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_deployment_group.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroups;

GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroups.builder()
    .build();
```


### GoogleNetworkSecurityMirroringDeploymentGroupTimeouts <a name="GoogleNetworkSecurityMirroringDeploymentGroupTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_deployment_group.GoogleNetworkSecurityMirroringDeploymentGroupTimeouts;

GoogleNetworkSecurityMirroringDeploymentGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#create GoogleNetworkSecurityMirroringDeploymentGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#delete GoogleNetworkSecurityMirroringDeploymentGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#update GoogleNetworkSecurityMirroringDeploymentGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#create GoogleNetworkSecurityMirroringDeploymentGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#delete GoogleNetworkSecurityMirroringDeploymentGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_network_security_mirroring_deployment_group#update GoogleNetworkSecurityMirroringDeploymentGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList <a name="GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_deployment_group.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList;

new GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.get"></a>

```java
public GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference <a name="GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_deployment_group.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference;

new GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroups">GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroupsOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroups getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroups">GoogleNetworkSecurityMirroringDeploymentGroupConnectedEndpointGroups</a>

---


### GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference <a name="GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_network_security_mirroring_deployment_group.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference;

new GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeouts">GoogleNetworkSecurityMirroringDeploymentGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringDeploymentGroup.GoogleNetworkSecurityMirroringDeploymentGroupTimeouts">GoogleNetworkSecurityMirroringDeploymentGroupTimeouts</a>

---



