# `googleWorkbenchInstance` Submodule <a name="`googleWorkbenchInstance` Submodule" id="@cdktf/provider-google-beta.googleWorkbenchInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleWorkbenchInstance <a name="GoogleWorkbenchInstance" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance google_workbench_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstance;

GoogleWorkbenchInstance.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .desiredState(java.lang.String)
//  .disableProxyAccess(java.lang.Boolean)
//  .disableProxyAccess(IResolvable)
//  .gceSetup(GoogleWorkbenchInstanceGceSetup)
//  .id(java.lang.String)
//  .instanceId(java.lang.String)
//  .instanceOwners(java.util.List<java.lang.String>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleWorkbenchInstanceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of this workbench instance. Format: 'projects/{project_id}/locations/{location}/instances/{instance_id}'. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Desired state of the Workbench Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.disableProxyAccess">disableProxyAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. If true, the workbench instance will not register with the proxy. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.gceSetup">gceSetup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a></code> | gce_setup block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#id GoogleWorkbenchInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Required. User-defined unique ID of this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.instanceOwners">instanceOwners</a></code> | <code>java.util.List<java.lang.String></code> | 'Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#project GoogleWorkbenchInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#location GoogleWorkbenchInstance#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of this workbench instance. Format: 'projects/{project_id}/locations/{location}/instances/{instance_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#name GoogleWorkbenchInstance#name}

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.desiredState"></a>

- *Type:* java.lang.String

Desired state of the Workbench Instance.

Set this field to 'ACTIVE' to start the Instance, and 'STOPPED' to stop the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#desired_state GoogleWorkbenchInstance#desired_state}

---

##### `disableProxyAccess`<sup>Optional</sup> <a name="disableProxyAccess" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.disableProxyAccess"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. If true, the workbench instance will not register with the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#disable_proxy_access GoogleWorkbenchInstance#disable_proxy_access}

---

##### `gceSetup`<sup>Optional</sup> <a name="gceSetup" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.gceSetup"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a>

gce_setup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#gce_setup GoogleWorkbenchInstance#gce_setup}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#id GoogleWorkbenchInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

Required. User-defined unique ID of this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#instance_id GoogleWorkbenchInstance#instance_id}

---

##### `instanceOwners`<sup>Optional</sup> <a name="instanceOwners" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.instanceOwners"></a>

- *Type:* java.util.List<java.lang.String>

'Optional.

Input only. The owner of this instance after creation. Format:
'alias@example.com' Currently supports one owner only. If not specified, all of
the service account users of your VM instance''s service account can use the instance.
If specified, sets the access mode to 'Single user'. For more details, see
https://cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#instance_owners GoogleWorkbenchInstance#instance_owners}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#labels GoogleWorkbenchInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#project GoogleWorkbenchInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#timeouts GoogleWorkbenchInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putGceSetup">putGceSetup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetDisableProxyAccess">resetDisableProxyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetGceSetup">resetGceSetup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetInstanceOwners">resetInstanceOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGceSetup` <a name="putGceSetup" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putGceSetup"></a>

```java
public void putGceSetup(GoogleWorkbenchInstanceGceSetup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putGceSetup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putTimeouts"></a>

```java
public void putTimeouts(GoogleWorkbenchInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a>

---

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetDesiredState"></a>

```java
public void resetDesiredState()
```

##### `resetDisableProxyAccess` <a name="resetDisableProxyAccess" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetDisableProxyAccess"></a>

```java
public void resetDisableProxyAccess()
```

##### `resetGceSetup` <a name="resetGceSetup" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetGceSetup"></a>

```java
public void resetGceSetup()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetInstanceId"></a>

```java
public void resetInstanceId()
```

##### `resetInstanceOwners` <a name="resetInstanceOwners" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetInstanceOwners"></a>

```java
public void resetInstanceOwners()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleWorkbenchInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstance;

GoogleWorkbenchInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstance;

GoogleWorkbenchInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstance;

GoogleWorkbenchInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstance;

GoogleWorkbenchInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleWorkbenchInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleWorkbenchInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleWorkbenchInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleWorkbenchInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleWorkbenchInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.creator">creator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.gceSetup">gceSetup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference">GoogleWorkbenchInstanceGceSetupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.healthInfo">healthInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList">GoogleWorkbenchInstanceHealthInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.healthState">healthState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.proxyUri">proxyUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference">GoogleWorkbenchInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.upgradeHistory">upgradeHistory</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList">GoogleWorkbenchInstanceUpgradeHistoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.desiredStateInput">desiredStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.disableProxyAccessInput">disableProxyAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.gceSetupInput">gceSetupInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceOwnersInput">instanceOwnersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.disableProxyAccess">disableProxyAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceOwners">instanceOwners</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.creator"></a>

```java
public java.lang.String getCreator();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `gceSetup`<sup>Required</sup> <a name="gceSetup" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.gceSetup"></a>

```java
public GoogleWorkbenchInstanceGceSetupOutputReference getGceSetup();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference">GoogleWorkbenchInstanceGceSetupOutputReference</a>

---

##### `healthInfo`<sup>Required</sup> <a name="healthInfo" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.healthInfo"></a>

```java
public GoogleWorkbenchInstanceHealthInfoList getHealthInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList">GoogleWorkbenchInstanceHealthInfoList</a>

---

##### `healthState`<sup>Required</sup> <a name="healthState" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.healthState"></a>

```java
public java.lang.String getHealthState();
```

- *Type:* java.lang.String

---

##### `proxyUri`<sup>Required</sup> <a name="proxyUri" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.proxyUri"></a>

```java
public java.lang.String getProxyUri();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.timeouts"></a>

```java
public GoogleWorkbenchInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference">GoogleWorkbenchInstanceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `upgradeHistory`<sup>Required</sup> <a name="upgradeHistory" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.upgradeHistory"></a>

```java
public GoogleWorkbenchInstanceUpgradeHistoryList getUpgradeHistory();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList">GoogleWorkbenchInstanceUpgradeHistoryList</a>

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.desiredStateInput"></a>

```java
public java.lang.String getDesiredStateInput();
```

- *Type:* java.lang.String

---

##### `disableProxyAccessInput`<sup>Optional</sup> <a name="disableProxyAccessInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.disableProxyAccessInput"></a>

```java
public java.lang.Object getDisableProxyAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `gceSetupInput`<sup>Optional</sup> <a name="gceSetupInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.gceSetupInput"></a>

```java
public GoogleWorkbenchInstanceGceSetup getGceSetupInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `instanceOwnersInput`<sup>Optional</sup> <a name="instanceOwnersInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceOwnersInput"></a>

```java
public java.util.List<java.lang.String> getInstanceOwnersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a>

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

---

##### `disableProxyAccess`<sup>Required</sup> <a name="disableProxyAccess" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.disableProxyAccess"></a>

```java
public java.lang.Object getDisableProxyAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `instanceOwners`<sup>Required</sup> <a name="instanceOwners" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.instanceOwners"></a>

```java
public java.util.List<java.lang.String> getInstanceOwners();
```

- *Type:* java.util.List<java.lang.String>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleWorkbenchInstanceConfig <a name="GoogleWorkbenchInstanceConfig" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceConfig;

GoogleWorkbenchInstanceConfig.builder()
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
    .name(java.lang.String)
//  .desiredState(java.lang.String)
//  .disableProxyAccess(java.lang.Boolean)
//  .disableProxyAccess(IResolvable)
//  .gceSetup(GoogleWorkbenchInstanceGceSetup)
//  .id(java.lang.String)
//  .instanceId(java.lang.String)
//  .instanceOwners(java.util.List<java.lang.String>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleWorkbenchInstanceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of this workbench instance. Format: 'projects/{project_id}/locations/{location}/instances/{instance_id}'. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Desired state of the Workbench Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.disableProxyAccess">disableProxyAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. If true, the workbench instance will not register with the proxy. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.gceSetup">gceSetup</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a></code> | gce_setup block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#id GoogleWorkbenchInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Required. User-defined unique ID of this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.instanceOwners">instanceOwners</a></code> | <code>java.util.List<java.lang.String></code> | 'Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#project GoogleWorkbenchInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#location GoogleWorkbenchInstance#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of this workbench instance. Format: 'projects/{project_id}/locations/{location}/instances/{instance_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#name GoogleWorkbenchInstance#name}

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

Desired state of the Workbench Instance.

Set this field to 'ACTIVE' to start the Instance, and 'STOPPED' to stop the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#desired_state GoogleWorkbenchInstance#desired_state}

---

##### `disableProxyAccess`<sup>Optional</sup> <a name="disableProxyAccess" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.disableProxyAccess"></a>

```java
public java.lang.Object getDisableProxyAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. If true, the workbench instance will not register with the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#disable_proxy_access GoogleWorkbenchInstance#disable_proxy_access}

---

##### `gceSetup`<sup>Optional</sup> <a name="gceSetup" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.gceSetup"></a>

```java
public GoogleWorkbenchInstanceGceSetup getGceSetup();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a>

gce_setup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#gce_setup GoogleWorkbenchInstance#gce_setup}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#id GoogleWorkbenchInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Required. User-defined unique ID of this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#instance_id GoogleWorkbenchInstance#instance_id}

---

##### `instanceOwners`<sup>Optional</sup> <a name="instanceOwners" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.instanceOwners"></a>

```java
public java.util.List<java.lang.String> getInstanceOwners();
```

- *Type:* java.util.List<java.lang.String>

'Optional.

Input only. The owner of this instance after creation. Format:
'alias@example.com' Currently supports one owner only. If not specified, all of
the service account users of your VM instance''s service account can use the instance.
If specified, sets the access mode to 'Single user'. For more details, see
https://cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#instance_owners GoogleWorkbenchInstance#instance_owners}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#labels GoogleWorkbenchInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#project GoogleWorkbenchInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceConfig.property.timeouts"></a>

```java
public GoogleWorkbenchInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#timeouts GoogleWorkbenchInstance#timeouts}

---

### GoogleWorkbenchInstanceGceSetup <a name="GoogleWorkbenchInstanceGceSetup" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetup;

GoogleWorkbenchInstanceGceSetup.builder()
//  .acceleratorConfigs(IResolvable)
//  .acceleratorConfigs(java.util.List<GoogleWorkbenchInstanceGceSetupAcceleratorConfigs>)
//  .bootDisk(GoogleWorkbenchInstanceGceSetupBootDisk)
//  .containerImage(GoogleWorkbenchInstanceGceSetupContainerImage)
//  .dataDisks(GoogleWorkbenchInstanceGceSetupDataDisks)
//  .disablePublicIp(java.lang.Boolean)
//  .disablePublicIp(IResolvable)
//  .enableIpForwarding(java.lang.Boolean)
//  .enableIpForwarding(IResolvable)
//  .machineType(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .networkInterfaces(IResolvable)
//  .networkInterfaces(java.util.List<GoogleWorkbenchInstanceGceSetupNetworkInterfaces>)
//  .serviceAccounts(IResolvable)
//  .serviceAccounts(java.util.List<GoogleWorkbenchInstanceGceSetupServiceAccounts>)
//  .shieldedInstanceConfig(GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig)
//  .tags(java.util.List<java.lang.String>)
//  .vmImage(GoogleWorkbenchInstanceGceSetupVmImage)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.acceleratorConfigs">acceleratorConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>></code> | accelerator_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.bootDisk">bootDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk">GoogleWorkbenchInstanceGceSetupBootDisk</a></code> | boot_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage">GoogleWorkbenchInstanceGceSetupContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.dataDisks">dataDisks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks">GoogleWorkbenchInstanceGceSetupDataDisks</a></code> | data_disks block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.disablePublicIp">disablePublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. If true, no external IP will be assigned to this VM instance. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.enableIpForwarding">enableIpForwarding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.machineType">machineType</a></code> | <code>java.lang.String</code> | Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Custom metadata to apply to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.networkInterfaces">networkInterfaces</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>></code> | network_interfaces block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.serviceAccounts">serviceAccounts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>></code> | service_accounts block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Optional. The Compute Engine tags to add to instance (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)). |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.vmImage">vmImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage">GoogleWorkbenchInstanceGceSetupVmImage</a></code> | vm_image block. |

---

##### `acceleratorConfigs`<sup>Optional</sup> <a name="acceleratorConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.acceleratorConfigs"></a>

```java
public java.lang.Object getAcceleratorConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>>

accelerator_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#accelerator_configs GoogleWorkbenchInstance#accelerator_configs}

---

##### `bootDisk`<sup>Optional</sup> <a name="bootDisk" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.bootDisk"></a>

```java
public GoogleWorkbenchInstanceGceSetupBootDisk getBootDisk();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk">GoogleWorkbenchInstanceGceSetupBootDisk</a>

boot_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#boot_disk GoogleWorkbenchInstance#boot_disk}

---

##### `containerImage`<sup>Optional</sup> <a name="containerImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.containerImage"></a>

```java
public GoogleWorkbenchInstanceGceSetupContainerImage getContainerImage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage">GoogleWorkbenchInstanceGceSetupContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#container_image GoogleWorkbenchInstance#container_image}

---

##### `dataDisks`<sup>Optional</sup> <a name="dataDisks" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.dataDisks"></a>

```java
public GoogleWorkbenchInstanceGceSetupDataDisks getDataDisks();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks">GoogleWorkbenchInstanceGceSetupDataDisks</a>

data_disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#data_disks GoogleWorkbenchInstance#data_disks}

---

##### `disablePublicIp`<sup>Optional</sup> <a name="disablePublicIp" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.disablePublicIp"></a>

```java
public java.lang.Object getDisablePublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. If true, no external IP will be assigned to this VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#disable_public_ip GoogleWorkbenchInstance#disable_public_ip}

---

##### `enableIpForwarding`<sup>Optional</sup> <a name="enableIpForwarding" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.enableIpForwarding"></a>

```java
public java.lang.Object getEnableIpForwarding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#enable_ip_forwarding GoogleWorkbenchInstance#enable_ip_forwarding}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#machine_type GoogleWorkbenchInstance#machine_type}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Custom metadata to apply to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#metadata GoogleWorkbenchInstance#metadata}

---

##### `networkInterfaces`<sup>Optional</sup> <a name="networkInterfaces" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.networkInterfaces"></a>

```java
public java.lang.Object getNetworkInterfaces();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>>

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#network_interfaces GoogleWorkbenchInstance#network_interfaces}

---

##### `serviceAccounts`<sup>Optional</sup> <a name="serviceAccounts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.serviceAccounts"></a>

```java
public java.lang.Object getServiceAccounts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>>

service_accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#service_accounts GoogleWorkbenchInstance#service_accounts}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.shieldedInstanceConfig"></a>

```java
public GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#shielded_instance_config GoogleWorkbenchInstance#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Optional. The Compute Engine tags to add to instance (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#tags GoogleWorkbenchInstance#tags}

---

##### `vmImage`<sup>Optional</sup> <a name="vmImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup.property.vmImage"></a>

```java
public GoogleWorkbenchInstanceGceSetupVmImage getVmImage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage">GoogleWorkbenchInstanceGceSetupVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#vm_image GoogleWorkbenchInstance#vm_image}

---

### GoogleWorkbenchInstanceGceSetupAcceleratorConfigs <a name="GoogleWorkbenchInstanceGceSetupAcceleratorConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs;

GoogleWorkbenchInstanceGceSetupAcceleratorConfigs.builder()
//  .coreCount(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs.property.coreCount">coreCount</a></code> | <code>java.lang.String</code> | Optional. Count of cores of this accelerator. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs.property.type">type</a></code> | <code>java.lang.String</code> | Optional. Type of this accelerator. Possible values: ["NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_A100", "NVIDIA_A100_80GB", "NVIDIA_L4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS"]. |

---

##### `coreCount`<sup>Optional</sup> <a name="coreCount" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs.property.coreCount"></a>

```java
public java.lang.String getCoreCount();
```

- *Type:* java.lang.String

Optional. Count of cores of this accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#core_count GoogleWorkbenchInstance#core_count}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Optional. Type of this accelerator. Possible values: ["NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_A100", "NVIDIA_A100_80GB", "NVIDIA_L4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#type GoogleWorkbenchInstance#type}

---

### GoogleWorkbenchInstanceGceSetupBootDisk <a name="GoogleWorkbenchInstanceGceSetupBootDisk" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupBootDisk;

GoogleWorkbenchInstanceGceSetupBootDisk.builder()
//  .diskEncryption(java.lang.String)
//  .diskSizeGb(java.lang.String)
//  .diskType(java.lang.String)
//  .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.diskEncryption">diskEncryption</a></code> | <code>java.lang.String</code> | Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.diskType">diskType</a></code> | <code>java.lang.String</code> | Optional. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | 'Optional. |

---

##### `diskEncryption`<sup>Optional</sup> <a name="diskEncryption" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.diskEncryption"></a>

```java
public java.lang.String getDiskEncryption();
```

- *Type:* java.lang.String

Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#disk_encryption GoogleWorkbenchInstance#disk_encryption}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.diskSizeGb"></a>

```java
public java.lang.String getDiskSizeGb();
```

- *Type:* java.lang.String

Optional.

The size of the boot disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB). If not specified, this defaults to the
recommended value of 150GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#disk_size_gb GoogleWorkbenchInstance#disk_size_gb}

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

Optional. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#disk_type GoogleWorkbenchInstance#disk_type}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

'Optional.

The KMS key used to encrypt the disks, only
applicable if disk_encryption is CMEK. Format: 'projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}'
Learn more about using your own encryption keys.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#kms_key GoogleWorkbenchInstance#kms_key}

---

### GoogleWorkbenchInstanceGceSetupContainerImage <a name="GoogleWorkbenchInstanceGceSetupContainerImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupContainerImage;

GoogleWorkbenchInstanceGceSetupContainerImage.builder()
    .repository(java.lang.String)
//  .tag(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage.property.repository">repository</a></code> | <code>java.lang.String</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage.property.tag">tag</a></code> | <code>java.lang.String</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#repository GoogleWorkbenchInstance#repository}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#tag GoogleWorkbenchInstance#tag}

---

### GoogleWorkbenchInstanceGceSetupDataDisks <a name="GoogleWorkbenchInstanceGceSetupDataDisks" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupDataDisks;

GoogleWorkbenchInstanceGceSetupDataDisks.builder()
//  .diskEncryption(java.lang.String)
//  .diskSizeGb(java.lang.String)
//  .diskType(java.lang.String)
//  .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.diskEncryption">diskEncryption</a></code> | <code>java.lang.String</code> | Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.diskType">diskType</a></code> | <code>java.lang.String</code> | Optional. Input only. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | 'Optional. |

---

##### `diskEncryption`<sup>Optional</sup> <a name="diskEncryption" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.diskEncryption"></a>

```java
public java.lang.String getDiskEncryption();
```

- *Type:* java.lang.String

Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#disk_encryption GoogleWorkbenchInstance#disk_encryption}

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.diskSizeGb"></a>

```java
public java.lang.String getDiskSizeGb();
```

- *Type:* java.lang.String

Optional.

The size of the disk in GB attached to this VM instance,
up to a maximum of 64000 GB (64 TB). If not specified, this defaults to
100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#disk_size_gb GoogleWorkbenchInstance#disk_size_gb}

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

Optional. Input only. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#disk_type GoogleWorkbenchInstance#disk_type}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

'Optional.

The KMS key used to encrypt the disks,
only applicable if disk_encryption is CMEK. Format: 'projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}'
Learn more about using your own encryption keys.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#kms_key GoogleWorkbenchInstance#kms_key}

---

### GoogleWorkbenchInstanceGceSetupNetworkInterfaces <a name="GoogleWorkbenchInstanceGceSetupNetworkInterfaces" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces;

GoogleWorkbenchInstanceGceSetupNetworkInterfaces.builder()
//  .accessConfigs(IResolvable)
//  .accessConfigs(java.util.List<GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs>)
//  .network(java.lang.String)
//  .nicType(java.lang.String)
//  .subnet(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.accessConfigs">accessConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>></code> | access_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.network">network</a></code> | <code>java.lang.String</code> | Optional. The name of the VPC that this VM instance is in. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.nicType">nicType</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.subnet">subnet</a></code> | <code>java.lang.String</code> | Optional. The name of the subnet that this VM instance is in. |

---

##### `accessConfigs`<sup>Optional</sup> <a name="accessConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.accessConfigs"></a>

```java
public java.lang.Object getAccessConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>>

access_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#access_configs GoogleWorkbenchInstance#access_configs}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Optional. The name of the VPC that this VM instance is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#network GoogleWorkbenchInstance#network}

---

##### `nicType`<sup>Optional</sup> <a name="nicType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.nicType"></a>

```java
public java.lang.String getNicType();
```

- *Type:* java.lang.String

Optional.

The type of vNIC to be used on this interface. This
may be gVNIC or VirtioNet. Possible values: ["VIRTIO_NET", "GVNIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#nic_type GoogleWorkbenchInstance#nic_type}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces.property.subnet"></a>

```java
public java.lang.String getSubnet();
```

- *Type:* java.lang.String

Optional. The name of the subnet that this VM instance is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#subnet GoogleWorkbenchInstance#subnet}

---

### GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs <a name="GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs;

GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs.builder()
    .externalIp(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs.property.externalIp">externalIp</a></code> | <code>java.lang.String</code> | An external IP address associated with this instance. |

---

##### `externalIp`<sup>Required</sup> <a name="externalIp" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs.property.externalIp"></a>

```java
public java.lang.String getExternalIp();
```

- *Type:* java.lang.String

An external IP address associated with this instance.

Specify an unused
static external IP address available to the project or leave this field
undefined to use an IP from a shared ephemeral IP address pool. If you
specify a static external IP address, it must live in the same region as
the zone of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#external_ip GoogleWorkbenchInstance#external_ip}

---

### GoogleWorkbenchInstanceGceSetupServiceAccounts <a name="GoogleWorkbenchInstanceGceSetupServiceAccounts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupServiceAccounts;

GoogleWorkbenchInstanceGceSetupServiceAccounts.builder()
//  .email(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts.property.email">email</a></code> | <code>java.lang.String</code> | Optional. Email address of the service account. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Optional. Email address of the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#email GoogleWorkbenchInstance#email}

---

### GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig <a name="GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig;

GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.builder()
//  .enableIntegrityMonitoring(java.lang.Boolean)
//  .enableIntegrityMonitoring(IResolvable)
//  .enableSecureBoot(java.lang.Boolean)
//  .enableSecureBoot(IResolvable)
//  .enableVtpm(java.lang.Boolean)
//  .enableVtpm(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableVtpm">enableVtpm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. Defines whether the VM instance has the vTPM enabled. Enabled by default. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Object getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional.

Defines whether the VM instance has integrity monitoring
enabled. Enables monitoring and attestation of the boot integrity of the VM
instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image
when the VM instance is created. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#enable_integrity_monitoring GoogleWorkbenchInstance#enable_integrity_monitoring}

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional.

Defines whether the VM instance has Secure Boot enabled.
Secure Boot helps ensure that the system only runs authentic software by verifying
the digital signature of all boot components, and halting the boot process
if signature verification fails. Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#enable_secure_boot GoogleWorkbenchInstance#enable_secure_boot}

---

##### `enableVtpm`<sup>Optional</sup> <a name="enableVtpm" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableVtpm"></a>

```java
public java.lang.Object getEnableVtpm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. Defines whether the VM instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#enable_vtpm GoogleWorkbenchInstance#enable_vtpm}

---

### GoogleWorkbenchInstanceGceSetupVmImage <a name="GoogleWorkbenchInstanceGceSetupVmImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupVmImage;

GoogleWorkbenchInstanceGceSetupVmImage.builder()
//  .family(java.lang.String)
//  .name(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage.property.family">family</a></code> | <code>java.lang.String</code> | Optional. Use this VM image family to find the image; the newest image in this family will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage.property.name">name</a></code> | <code>java.lang.String</code> | Optional. Use VM image name to find the image. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage.property.project">project</a></code> | <code>java.lang.String</code> | The name of the Google Cloud project that this VM image belongs to. Format: {project_id}. |

---

##### `family`<sup>Optional</sup> <a name="family" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

Optional. Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#family GoogleWorkbenchInstance#family}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Optional. Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#name GoogleWorkbenchInstance#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The name of the Google Cloud project that this VM image belongs to. Format: {project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#project GoogleWorkbenchInstance#project}

---

### GoogleWorkbenchInstanceHealthInfo <a name="GoogleWorkbenchInstanceHealthInfo" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceHealthInfo;

GoogleWorkbenchInstanceHealthInfo.builder()
    .build();
```


### GoogleWorkbenchInstanceTimeouts <a name="GoogleWorkbenchInstanceTimeouts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceTimeouts;

GoogleWorkbenchInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#create GoogleWorkbenchInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#delete GoogleWorkbenchInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#update GoogleWorkbenchInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#create GoogleWorkbenchInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#delete GoogleWorkbenchInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_workbench_instance#update GoogleWorkbenchInstance#update}.

---

### GoogleWorkbenchInstanceUpgradeHistory <a name="GoogleWorkbenchInstanceUpgradeHistory" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceUpgradeHistory;

GoogleWorkbenchInstanceUpgradeHistory.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList <a name="GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList;

new GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.get"></a>

```java
public GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>>

---


### GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference <a name="GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference;

new GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetCoreCount">resetCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCoreCount` <a name="resetCoreCount" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetCoreCount"></a>

```java
public void resetCoreCount()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCountInput">coreCountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCount">coreCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coreCountInput`<sup>Optional</sup> <a name="coreCountInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCountInput"></a>

```java
public java.lang.String getCoreCountInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `coreCount`<sup>Required</sup> <a name="coreCount" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCount"></a>

```java
public java.lang.String getCoreCount();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>

---


### GoogleWorkbenchInstanceGceSetupBootDiskOutputReference <a name="GoogleWorkbenchInstanceGceSetupBootDiskOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference;

new GoogleWorkbenchInstanceGceSetupBootDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskEncryption">resetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskEncryption` <a name="resetDiskEncryption" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskEncryption"></a>

```java
public void resetDiskEncryption()
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskType"></a>

```java
public void resetDiskType()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryptionInput">diskEncryptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryption">diskEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskType">diskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk">GoogleWorkbenchInstanceGceSetupBootDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskEncryptionInput`<sup>Optional</sup> <a name="diskEncryptionInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryptionInput"></a>

```java
public java.lang.String getDiskEncryptionInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.String getDiskSizeGbInput();
```

- *Type:* java.lang.String

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskTypeInput"></a>

```java
public java.lang.String getDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `diskEncryption`<sup>Required</sup> <a name="diskEncryption" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryption"></a>

```java
public java.lang.String getDiskEncryption();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGb"></a>

```java
public java.lang.String getDiskSizeGb();
```

- *Type:* java.lang.String

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference.property.internalValue"></a>

```java
public GoogleWorkbenchInstanceGceSetupBootDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk">GoogleWorkbenchInstanceGceSetupBootDisk</a>

---


### GoogleWorkbenchInstanceGceSetupContainerImageOutputReference <a name="GoogleWorkbenchInstanceGceSetupContainerImageOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference;

new GoogleWorkbenchInstanceGceSetupContainerImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.resetTag">resetTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.resetTag"></a>

```java
public void resetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.tagInput">tagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage">GoogleWorkbenchInstanceGceSetupContainerImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.tagInput"></a>

```java
public java.lang.String getTagInput();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference.property.internalValue"></a>

```java
public GoogleWorkbenchInstanceGceSetupContainerImage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage">GoogleWorkbenchInstanceGceSetupContainerImage</a>

---


### GoogleWorkbenchInstanceGceSetupDataDisksOutputReference <a name="GoogleWorkbenchInstanceGceSetupDataDisksOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference;

new GoogleWorkbenchInstanceGceSetupDataDisksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskEncryption">resetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskEncryption` <a name="resetDiskEncryption" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskEncryption"></a>

```java
public void resetDiskEncryption()
```

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskType"></a>

```java
public void resetDiskType()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.resetKmsKey"></a>

```java
public void resetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryptionInput">diskEncryptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryption">diskEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskType">diskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks">GoogleWorkbenchInstanceGceSetupDataDisks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskEncryptionInput`<sup>Optional</sup> <a name="diskEncryptionInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryptionInput"></a>

```java
public java.lang.String getDiskEncryptionInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.String getDiskSizeGbInput();
```

- *Type:* java.lang.String

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskTypeInput"></a>

```java
public java.lang.String getDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `diskEncryption`<sup>Required</sup> <a name="diskEncryption" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryption"></a>

```java
public java.lang.String getDiskEncryption();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGb"></a>

```java
public java.lang.String getDiskSizeGb();
```

- *Type:* java.lang.String

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference.property.internalValue"></a>

```java
public GoogleWorkbenchInstanceGceSetupDataDisks getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks">GoogleWorkbenchInstanceGceSetupDataDisks</a>

---


### GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList <a name="GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList;

new GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.get"></a>

```java
public GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>>

---


### GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference <a name="GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference;

new GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.externalIpInput">externalIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.externalIp">externalIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalIpInput`<sup>Optional</sup> <a name="externalIpInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.externalIpInput"></a>

```java
public java.lang.String getExternalIpInput();
```

- *Type:* java.lang.String

---

##### `externalIp`<sup>Required</sup> <a name="externalIp" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.externalIp"></a>

```java
public java.lang.String getExternalIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>

---


### GoogleWorkbenchInstanceGceSetupNetworkInterfacesList <a name="GoogleWorkbenchInstanceGceSetupNetworkInterfacesList" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList;

new GoogleWorkbenchInstanceGceSetupNetworkInterfacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.get"></a>

```java
public GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>>

---


### GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference <a name="GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference;

new GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.putAccessConfigs">putAccessConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetAccessConfigs">resetAccessConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNicType">resetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetSubnet">resetSubnet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessConfigs` <a name="putAccessConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.putAccessConfigs"></a>

```java
public void putAccessConfigs(IResolvable OR java.util.List<GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.putAccessConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>>

---

##### `resetAccessConfigs` <a name="resetAccessConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetAccessConfigs"></a>

```java
public void resetAccessConfigs()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetNicType` <a name="resetNicType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNicType"></a>

```java
public void resetNicType()
```

##### `resetSubnet` <a name="resetSubnet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetSubnet"></a>

```java
public void resetSubnet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.accessConfigs">accessConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.accessConfigsInput">accessConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicTypeInput">nicTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnetInput">subnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicType">nicType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnet">subnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessConfigs`<sup>Required</sup> <a name="accessConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.accessConfigs"></a>

```java
public GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList getAccessConfigs();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList</a>

---

##### `accessConfigsInput`<sup>Optional</sup> <a name="accessConfigsInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.accessConfigsInput"></a>

```java
public java.lang.Object getAccessConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs">GoogleWorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs</a>>

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `nicTypeInput`<sup>Optional</sup> <a name="nicTypeInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicTypeInput"></a>

```java
public java.lang.String getNicTypeInput();
```

- *Type:* java.lang.String

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnetInput"></a>

```java
public java.lang.String getSubnetInput();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `nicType`<sup>Required</sup> <a name="nicType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicType"></a>

```java
public java.lang.String getNicType();
```

- *Type:* java.lang.String

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnet"></a>

```java
public java.lang.String getSubnet();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>

---


### GoogleWorkbenchInstanceGceSetupOutputReference <a name="GoogleWorkbenchInstanceGceSetupOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupOutputReference;

new GoogleWorkbenchInstanceGceSetupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putAcceleratorConfigs">putAcceleratorConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putBootDisk">putBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putContainerImage">putContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putDataDisks">putDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putNetworkInterfaces">putNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putServiceAccounts">putServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putVmImage">putVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetAcceleratorConfigs">resetAcceleratorConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetBootDisk">resetBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetContainerImage">resetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetDataDisks">resetDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetDisablePublicIp">resetDisablePublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetEnableIpForwarding">resetEnableIpForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetNetworkInterfaces">resetNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetServiceAccounts">resetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetVmImage">resetVmImage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAcceleratorConfigs` <a name="putAcceleratorConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putAcceleratorConfigs"></a>

```java
public void putAcceleratorConfigs(IResolvable OR java.util.List<GoogleWorkbenchInstanceGceSetupAcceleratorConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putAcceleratorConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>>

---

##### `putBootDisk` <a name="putBootDisk" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putBootDisk"></a>

```java
public void putBootDisk(GoogleWorkbenchInstanceGceSetupBootDisk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putBootDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk">GoogleWorkbenchInstanceGceSetupBootDisk</a>

---

##### `putContainerImage` <a name="putContainerImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putContainerImage"></a>

```java
public void putContainerImage(GoogleWorkbenchInstanceGceSetupContainerImage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putContainerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage">GoogleWorkbenchInstanceGceSetupContainerImage</a>

---

##### `putDataDisks` <a name="putDataDisks" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putDataDisks"></a>

```java
public void putDataDisks(GoogleWorkbenchInstanceGceSetupDataDisks value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putDataDisks.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks">GoogleWorkbenchInstanceGceSetupDataDisks</a>

---

##### `putNetworkInterfaces` <a name="putNetworkInterfaces" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putNetworkInterfaces"></a>

```java
public void putNetworkInterfaces(IResolvable OR java.util.List<GoogleWorkbenchInstanceGceSetupNetworkInterfaces> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>>

---

##### `putServiceAccounts` <a name="putServiceAccounts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putServiceAccounts"></a>

```java
public void putServiceAccounts(IResolvable OR java.util.List<GoogleWorkbenchInstanceGceSetupServiceAccounts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putServiceAccounts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>>

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig"></a>

```java
public void putShieldedInstanceConfig(GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig</a>

---

##### `putVmImage` <a name="putVmImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putVmImage"></a>

```java
public void putVmImage(GoogleWorkbenchInstanceGceSetupVmImage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.putVmImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage">GoogleWorkbenchInstanceGceSetupVmImage</a>

---

##### `resetAcceleratorConfigs` <a name="resetAcceleratorConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetAcceleratorConfigs"></a>

```java
public void resetAcceleratorConfigs()
```

##### `resetBootDisk` <a name="resetBootDisk" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetBootDisk"></a>

```java
public void resetBootDisk()
```

##### `resetContainerImage` <a name="resetContainerImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetContainerImage"></a>

```java
public void resetContainerImage()
```

##### `resetDataDisks` <a name="resetDataDisks" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetDataDisks"></a>

```java
public void resetDataDisks()
```

##### `resetDisablePublicIp` <a name="resetDisablePublicIp" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetDisablePublicIp"></a>

```java
public void resetDisablePublicIp()
```

##### `resetEnableIpForwarding` <a name="resetEnableIpForwarding" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetEnableIpForwarding"></a>

```java
public void resetEnableIpForwarding()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetMachineType"></a>

```java
public void resetMachineType()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetNetworkInterfaces` <a name="resetNetworkInterfaces" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetNetworkInterfaces"></a>

```java
public void resetNetworkInterfaces()
```

##### `resetServiceAccounts` <a name="resetServiceAccounts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetServiceAccounts"></a>

```java
public void resetServiceAccounts()
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetShieldedInstanceConfig"></a>

```java
public void resetShieldedInstanceConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetVmImage` <a name="resetVmImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.resetVmImage"></a>

```java
public void resetVmImage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigs">acceleratorConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList">GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.bootDisk">bootDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference">GoogleWorkbenchInstanceGceSetupBootDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.containerImage">containerImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference">GoogleWorkbenchInstanceGceSetupContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.dataDisks">dataDisks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference">GoogleWorkbenchInstanceGceSetupDataDisksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList">GoogleWorkbenchInstanceGceSetupNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.serviceAccounts">serviceAccounts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList">GoogleWorkbenchInstanceGceSetupServiceAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.vmImage">vmImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference">GoogleWorkbenchInstanceGceSetupVmImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigsInput">acceleratorConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.bootDiskInput">bootDiskInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk">GoogleWorkbenchInstanceGceSetupBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.containerImageInput">containerImageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage">GoogleWorkbenchInstanceGceSetupContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.dataDisksInput">dataDisksInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks">GoogleWorkbenchInstanceGceSetupDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.disablePublicIpInput">disablePublicIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.enableIpForwardingInput">enableIpForwardingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.networkInterfacesInput">networkInterfacesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.serviceAccountsInput">serviceAccountsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.vmImageInput">vmImageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage">GoogleWorkbenchInstanceGceSetupVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.disablePublicIp">disablePublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.enableIpForwarding">enableIpForwarding</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorConfigs`<sup>Required</sup> <a name="acceleratorConfigs" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigs"></a>

```java
public GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList getAcceleratorConfigs();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList">GoogleWorkbenchInstanceGceSetupAcceleratorConfigsList</a>

---

##### `bootDisk`<sup>Required</sup> <a name="bootDisk" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.bootDisk"></a>

```java
public GoogleWorkbenchInstanceGceSetupBootDiskOutputReference getBootDisk();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDiskOutputReference">GoogleWorkbenchInstanceGceSetupBootDiskOutputReference</a>

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.containerImage"></a>

```java
public GoogleWorkbenchInstanceGceSetupContainerImageOutputReference getContainerImage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImageOutputReference">GoogleWorkbenchInstanceGceSetupContainerImageOutputReference</a>

---

##### `dataDisks`<sup>Required</sup> <a name="dataDisks" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.dataDisks"></a>

```java
public GoogleWorkbenchInstanceGceSetupDataDisksOutputReference getDataDisks();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisksOutputReference">GoogleWorkbenchInstanceGceSetupDataDisksOutputReference</a>

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.networkInterfaces"></a>

```java
public GoogleWorkbenchInstanceGceSetupNetworkInterfacesList getNetworkInterfaces();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfacesList">GoogleWorkbenchInstanceGceSetupNetworkInterfacesList</a>

---

##### `serviceAccounts`<sup>Required</sup> <a name="serviceAccounts" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.serviceAccounts"></a>

```java
public GoogleWorkbenchInstanceGceSetupServiceAccountsList getServiceAccounts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList">GoogleWorkbenchInstanceGceSetupServiceAccountsList</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfig"></a>

```java
public GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference</a>

---

##### `vmImage`<sup>Required</sup> <a name="vmImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.vmImage"></a>

```java
public GoogleWorkbenchInstanceGceSetupVmImageOutputReference getVmImage();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference">GoogleWorkbenchInstanceGceSetupVmImageOutputReference</a>

---

##### `acceleratorConfigsInput`<sup>Optional</sup> <a name="acceleratorConfigsInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigsInput"></a>

```java
public java.lang.Object getAcceleratorConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupAcceleratorConfigs">GoogleWorkbenchInstanceGceSetupAcceleratorConfigs</a>>

---

##### `bootDiskInput`<sup>Optional</sup> <a name="bootDiskInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.bootDiskInput"></a>

```java
public GoogleWorkbenchInstanceGceSetupBootDisk getBootDiskInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupBootDisk">GoogleWorkbenchInstanceGceSetupBootDisk</a>

---

##### `containerImageInput`<sup>Optional</sup> <a name="containerImageInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.containerImageInput"></a>

```java
public GoogleWorkbenchInstanceGceSetupContainerImage getContainerImageInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupContainerImage">GoogleWorkbenchInstanceGceSetupContainerImage</a>

---

##### `dataDisksInput`<sup>Optional</sup> <a name="dataDisksInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.dataDisksInput"></a>

```java
public GoogleWorkbenchInstanceGceSetupDataDisks getDataDisksInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupDataDisks">GoogleWorkbenchInstanceGceSetupDataDisks</a>

---

##### `disablePublicIpInput`<sup>Optional</sup> <a name="disablePublicIpInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.disablePublicIpInput"></a>

```java
public java.lang.Object getDisablePublicIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableIpForwardingInput`<sup>Optional</sup> <a name="enableIpForwardingInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.enableIpForwardingInput"></a>

```java
public java.lang.Object getEnableIpForwardingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `networkInterfacesInput`<sup>Optional</sup> <a name="networkInterfacesInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.networkInterfacesInput"></a>

```java
public java.lang.Object getNetworkInterfacesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupNetworkInterfaces">GoogleWorkbenchInstanceGceSetupNetworkInterfaces</a>>

---

##### `serviceAccountsInput`<sup>Optional</sup> <a name="serviceAccountsInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.serviceAccountsInput"></a>

```java
public java.lang.Object getServiceAccountsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>>

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfigInput"></a>

```java
public GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig getShieldedInstanceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vmImageInput`<sup>Optional</sup> <a name="vmImageInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.vmImageInput"></a>

```java
public GoogleWorkbenchInstanceGceSetupVmImage getVmImageInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage">GoogleWorkbenchInstanceGceSetupVmImage</a>

---

##### `disablePublicIp`<sup>Required</sup> <a name="disablePublicIp" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.disablePublicIp"></a>

```java
public java.lang.Object getDisablePublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableIpForwarding`<sup>Required</sup> <a name="enableIpForwarding" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.enableIpForwarding"></a>

```java
public java.lang.Object getEnableIpForwarding();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupOutputReference.property.internalValue"></a>

```java
public GoogleWorkbenchInstanceGceSetup getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetup">GoogleWorkbenchInstanceGceSetup</a>

---


### GoogleWorkbenchInstanceGceSetupServiceAccountsList <a name="GoogleWorkbenchInstanceGceSetupServiceAccountsList" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupServiceAccountsList;

new GoogleWorkbenchInstanceGceSetupServiceAccountsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.get"></a>

```java
public GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>>

---


### GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference <a name="GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference;

new GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.resetEmail">resetEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.resetEmail"></a>

```java
public void resetEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccountsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupServiceAccounts">GoogleWorkbenchInstanceGceSetupServiceAccounts</a>

---


### GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference <a name="GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference;

new GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableVtpm">resetEnableVtpm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```java
public void resetEnableIntegrityMonitoring()
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```java
public void resetEnableSecureBoot()
```

##### `resetEnableVtpm` <a name="resetEnableVtpm" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```java
public void resetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpmInput">enableVtpmInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpm">enableVtpm</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```java
public java.lang.Object getEnableIntegrityMonitoringInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```java
public java.lang.Object getEnableSecureBootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableVtpmInput`<sup>Optional</sup> <a name="enableVtpmInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```java
public java.lang.Object getEnableVtpmInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Object getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableVtpm`<sup>Required</sup> <a name="enableVtpm" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```java
public java.lang.Object getEnableVtpm();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.internalValue"></a>

```java
public GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig">GoogleWorkbenchInstanceGceSetupShieldedInstanceConfig</a>

---


### GoogleWorkbenchInstanceGceSetupVmImageOutputReference <a name="GoogleWorkbenchInstanceGceSetupVmImageOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference;

new GoogleWorkbenchInstanceGceSetupVmImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resetFamily">resetFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resetProject">resetProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFamily` <a name="resetFamily" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resetFamily"></a>

```java
public void resetFamily()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.resetProject"></a>

```java
public void resetProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.familyInput">familyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.family">family</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage">GoogleWorkbenchInstanceGceSetupVmImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.familyInput"></a>

```java
public java.lang.String getFamilyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImageOutputReference.property.internalValue"></a>

```java
public GoogleWorkbenchInstanceGceSetupVmImage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceGceSetupVmImage">GoogleWorkbenchInstanceGceSetupVmImage</a>

---


### GoogleWorkbenchInstanceHealthInfoList <a name="GoogleWorkbenchInstanceHealthInfoList" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceHealthInfoList;

new GoogleWorkbenchInstanceHealthInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.get"></a>

```java
public GoogleWorkbenchInstanceHealthInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleWorkbenchInstanceHealthInfoOutputReference <a name="GoogleWorkbenchInstanceHealthInfoOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceHealthInfoOutputReference;

new GoogleWorkbenchInstanceHealthInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfo">GoogleWorkbenchInstanceHealthInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfoOutputReference.property.internalValue"></a>

```java
public GoogleWorkbenchInstanceHealthInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceHealthInfo">GoogleWorkbenchInstanceHealthInfo</a>

---


### GoogleWorkbenchInstanceTimeoutsOutputReference <a name="GoogleWorkbenchInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceTimeoutsOutputReference;

new GoogleWorkbenchInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceTimeouts">GoogleWorkbenchInstanceTimeouts</a>

---


### GoogleWorkbenchInstanceUpgradeHistoryList <a name="GoogleWorkbenchInstanceUpgradeHistoryList" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceUpgradeHistoryList;

new GoogleWorkbenchInstanceUpgradeHistoryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.get"></a>

```java
public GoogleWorkbenchInstanceUpgradeHistoryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleWorkbenchInstanceUpgradeHistoryOutputReference <a name="GoogleWorkbenchInstanceUpgradeHistoryOutputReference" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_workbench_instance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference;

new GoogleWorkbenchInstanceUpgradeHistoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.containerImage">containerImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.framework">framework</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.snapshot">snapshot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.targetVersion">targetVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.vmImage">vmImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistory">GoogleWorkbenchInstanceUpgradeHistory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `containerImage`<sup>Required</sup> <a name="containerImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.containerImage"></a>

```java
public java.lang.String getContainerImage();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.framework"></a>

```java
public java.lang.String getFramework();
```

- *Type:* java.lang.String

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.snapshot"></a>

```java
public java.lang.String getSnapshot();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.targetVersion"></a>

```java
public java.lang.String getTargetVersion();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `vmImage`<sup>Required</sup> <a name="vmImage" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.vmImage"></a>

```java
public java.lang.String getVmImage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistoryOutputReference.property.internalValue"></a>

```java
public GoogleWorkbenchInstanceUpgradeHistory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkbenchInstance.GoogleWorkbenchInstanceUpgradeHistory">GoogleWorkbenchInstanceUpgradeHistory</a>

---



