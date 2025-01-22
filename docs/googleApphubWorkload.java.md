# `googleApphubWorkload` Submodule <a name="`googleApphubWorkload` Submodule" id="@cdktf/provider-google-beta.googleApphubWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApphubWorkload <a name="GoogleApphubWorkload" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload google_apphub_workload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkload;

GoogleApphubWorkload.Builder.create(Construct scope, java.lang.String id)
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
    .applicationId(java.lang.String)
    .discoveredWorkload(java.lang.String)
    .location(java.lang.String)
    .workloadId(java.lang.String)
//  .attributes(GoogleApphubWorkloadAttributes)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleApphubWorkloadTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.discoveredWorkload">discoveredWorkload</a></code> | <code>java.lang.String</code> | Immutable. The resource name of the original discovered workload. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.workloadId">workloadId</a></code> | <code>java.lang.String</code> | The Workload identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributes">GoogleApphubWorkloadAttributes</a></code> | attributes block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | User-defined description of a Workload. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User-defined name for the Workload. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#id GoogleApphubWorkload#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#project GoogleApphubWorkload#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeouts">GoogleApphubWorkloadTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#application_id GoogleApphubWorkload#application_id}

---

##### `discoveredWorkload`<sup>Required</sup> <a name="discoveredWorkload" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.discoveredWorkload"></a>

- *Type:* java.lang.String

Immutable. The resource name of the original discovered workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#discovered_workload GoogleApphubWorkload#discovered_workload}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#location GoogleApphubWorkload#location}

---

##### `workloadId`<sup>Required</sup> <a name="workloadId" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.workloadId"></a>

- *Type:* java.lang.String

The Workload identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#workload_id GoogleApphubWorkload#workload_id}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.attributes"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributes">GoogleApphubWorkloadAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#attributes GoogleApphubWorkload#attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.description"></a>

- *Type:* java.lang.String

User-defined description of a Workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#description GoogleApphubWorkload#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User-defined name for the Workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#display_name GoogleApphubWorkload#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#id GoogleApphubWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#project GoogleApphubWorkload#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeouts">GoogleApphubWorkloadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#timeouts GoogleApphubWorkload#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttributes` <a name="putAttributes" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.putAttributes"></a>

```java
public void putAttributes(GoogleApphubWorkloadAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributes">GoogleApphubWorkloadAttributes</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.putTimeouts"></a>

```java
public void putTimeouts(GoogleApphubWorkloadTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeouts">GoogleApphubWorkloadTimeouts</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApphubWorkload resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkload;

GoogleApphubWorkload.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkload;

GoogleApphubWorkload.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkload;

GoogleApphubWorkload.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkload;

GoogleApphubWorkload.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleApphubWorkload.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleApphubWorkload resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleApphubWorkload to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleApphubWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApphubWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference">GoogleApphubWorkloadAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference">GoogleApphubWorkloadTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.workloadProperties">workloadProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList">GoogleApphubWorkloadWorkloadPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.workloadReference">workloadReference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList">GoogleApphubWorkloadWorkloadReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.attributesInput">attributesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributes">GoogleApphubWorkloadAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.discoveredWorkloadInput">discoveredWorkloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeouts">GoogleApphubWorkloadTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.workloadIdInput">workloadIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.discoveredWorkload">discoveredWorkload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.workloadId">workloadId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.attributes"></a>

```java
public GoogleApphubWorkloadAttributesOutputReference getAttributes();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference">GoogleApphubWorkloadAttributesOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.timeouts"></a>

```java
public GoogleApphubWorkloadTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference">GoogleApphubWorkloadTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `workloadProperties`<sup>Required</sup> <a name="workloadProperties" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.workloadProperties"></a>

```java
public GoogleApphubWorkloadWorkloadPropertiesList getWorkloadProperties();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList">GoogleApphubWorkloadWorkloadPropertiesList</a>

---

##### `workloadReference`<sup>Required</sup> <a name="workloadReference" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.workloadReference"></a>

```java
public GoogleApphubWorkloadWorkloadReferenceList getWorkloadReference();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList">GoogleApphubWorkloadWorkloadReferenceList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.attributesInput"></a>

```java
public GoogleApphubWorkloadAttributes getAttributesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributes">GoogleApphubWorkloadAttributes</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `discoveredWorkloadInput`<sup>Optional</sup> <a name="discoveredWorkloadInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.discoveredWorkloadInput"></a>

```java
public java.lang.String getDiscoveredWorkloadInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeouts">GoogleApphubWorkloadTimeouts</a>

---

##### `workloadIdInput`<sup>Optional</sup> <a name="workloadIdInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.workloadIdInput"></a>

```java
public java.lang.String getWorkloadIdInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `discoveredWorkload`<sup>Required</sup> <a name="discoveredWorkload" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.discoveredWorkload"></a>

```java
public java.lang.String getDiscoveredWorkload();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `workloadId`<sup>Required</sup> <a name="workloadId" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.workloadId"></a>

```java
public java.lang.String getWorkloadId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkload.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApphubWorkloadAttributes <a name="GoogleApphubWorkloadAttributes" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadAttributes;

GoogleApphubWorkloadAttributes.builder()
//  .businessOwners(IResolvable)
//  .businessOwners(java.util.List<GoogleApphubWorkloadAttributesBusinessOwners>)
//  .criticality(GoogleApphubWorkloadAttributesCriticality)
//  .developerOwners(IResolvable)
//  .developerOwners(java.util.List<GoogleApphubWorkloadAttributesDeveloperOwners>)
//  .environment(GoogleApphubWorkloadAttributesEnvironment)
//  .operatorOwners(IResolvable)
//  .operatorOwners(java.util.List<GoogleApphubWorkloadAttributesOperatorOwners>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributes.property.businessOwners">businessOwners</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwners">GoogleApphubWorkloadAttributesBusinessOwners</a>></code> | business_owners block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributes.property.criticality">criticality</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticality">GoogleApphubWorkloadAttributesCriticality</a></code> | criticality block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributes.property.developerOwners">developerOwners</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwners">GoogleApphubWorkloadAttributesDeveloperOwners</a>></code> | developer_owners block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributes.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironment">GoogleApphubWorkloadAttributesEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributes.property.operatorOwners">operatorOwners</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwners">GoogleApphubWorkloadAttributesOperatorOwners</a>></code> | operator_owners block. |

---

##### `businessOwners`<sup>Optional</sup> <a name="businessOwners" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributes.property.businessOwners"></a>

```java
public java.lang.Object getBusinessOwners();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwners">GoogleApphubWorkloadAttributesBusinessOwners</a>>

business_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#business_owners GoogleApphubWorkload#business_owners}

---

##### `criticality`<sup>Optional</sup> <a name="criticality" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributes.property.criticality"></a>

```java
public GoogleApphubWorkloadAttributesCriticality getCriticality();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticality">GoogleApphubWorkloadAttributesCriticality</a>

criticality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#criticality GoogleApphubWorkload#criticality}

---

##### `developerOwners`<sup>Optional</sup> <a name="developerOwners" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributes.property.developerOwners"></a>

```java
public java.lang.Object getDeveloperOwners();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwners">GoogleApphubWorkloadAttributesDeveloperOwners</a>>

developer_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#developer_owners GoogleApphubWorkload#developer_owners}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributes.property.environment"></a>

```java
public GoogleApphubWorkloadAttributesEnvironment getEnvironment();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironment">GoogleApphubWorkloadAttributesEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#environment GoogleApphubWorkload#environment}

---

##### `operatorOwners`<sup>Optional</sup> <a name="operatorOwners" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributes.property.operatorOwners"></a>

```java
public java.lang.Object getOperatorOwners();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwners">GoogleApphubWorkloadAttributesOperatorOwners</a>>

operator_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#operator_owners GoogleApphubWorkload#operator_owners}

---

### GoogleApphubWorkloadAttributesBusinessOwners <a name="GoogleApphubWorkloadAttributesBusinessOwners" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwners.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadAttributesBusinessOwners;

GoogleApphubWorkloadAttributesBusinessOwners.builder()
    .email(java.lang.String)
//  .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwners.property.email">email</a></code> | <code>java.lang.String</code> | Email address of the contacts. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwners.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwners.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#email GoogleApphubWorkload#email}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwners.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#display_name GoogleApphubWorkload#display_name}

---

### GoogleApphubWorkloadAttributesCriticality <a name="GoogleApphubWorkloadAttributesCriticality" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticality"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticality.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadAttributesCriticality;

GoogleApphubWorkloadAttributesCriticality.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticality.property.type">type</a></code> | <code>java.lang.String</code> | Criticality type. Possible values: ["MISSION_CRITICAL", "HIGH", "MEDIUM", "LOW"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticality.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Criticality type. Possible values: ["MISSION_CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#type GoogleApphubWorkload#type}

---

### GoogleApphubWorkloadAttributesDeveloperOwners <a name="GoogleApphubWorkloadAttributesDeveloperOwners" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwners.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadAttributesDeveloperOwners;

GoogleApphubWorkloadAttributesDeveloperOwners.builder()
    .email(java.lang.String)
//  .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwners.property.email">email</a></code> | <code>java.lang.String</code> | Email address of the contacts. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwners.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwners.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#email GoogleApphubWorkload#email}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwners.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#display_name GoogleApphubWorkload#display_name}

---

### GoogleApphubWorkloadAttributesEnvironment <a name="GoogleApphubWorkloadAttributesEnvironment" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadAttributesEnvironment;

GoogleApphubWorkloadAttributesEnvironment.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironment.property.type">type</a></code> | <code>java.lang.String</code> | Environment type. Possible values: ["PRODUCTION", "STAGING", "TEST", "DEVELOPMENT"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironment.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Environment type. Possible values: ["PRODUCTION", "STAGING", "TEST", "DEVELOPMENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#type GoogleApphubWorkload#type}

---

### GoogleApphubWorkloadAttributesOperatorOwners <a name="GoogleApphubWorkloadAttributesOperatorOwners" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwners.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadAttributesOperatorOwners;

GoogleApphubWorkloadAttributesOperatorOwners.builder()
    .email(java.lang.String)
//  .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwners.property.email">email</a></code> | <code>java.lang.String</code> | Email address of the contacts. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwners.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwners.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#email GoogleApphubWorkload#email}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwners.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#display_name GoogleApphubWorkload#display_name}

---

### GoogleApphubWorkloadConfig <a name="GoogleApphubWorkloadConfig" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadConfig;

GoogleApphubWorkloadConfig.builder()
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
    .applicationId(java.lang.String)
    .discoveredWorkload(java.lang.String)
    .location(java.lang.String)
    .workloadId(java.lang.String)
//  .attributes(GoogleApphubWorkloadAttributes)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleApphubWorkloadTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.discoveredWorkload">discoveredWorkload</a></code> | <code>java.lang.String</code> | Immutable. The resource name of the original discovered workload. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.location">location</a></code> | <code>java.lang.String</code> | Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.workloadId">workloadId</a></code> | <code>java.lang.String</code> | The Workload identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributes">GoogleApphubWorkloadAttributes</a></code> | attributes block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.description">description</a></code> | <code>java.lang.String</code> | User-defined description of a Workload. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User-defined name for the Workload. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#id GoogleApphubWorkload#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#project GoogleApphubWorkload#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeouts">GoogleApphubWorkloadTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#application_id GoogleApphubWorkload#application_id}

---

##### `discoveredWorkload`<sup>Required</sup> <a name="discoveredWorkload" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.discoveredWorkload"></a>

```java
public java.lang.String getDiscoveredWorkload();
```

- *Type:* java.lang.String

Immutable. The resource name of the original discovered workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#discovered_workload GoogleApphubWorkload#discovered_workload}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#location GoogleApphubWorkload#location}

---

##### `workloadId`<sup>Required</sup> <a name="workloadId" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.workloadId"></a>

```java
public java.lang.String getWorkloadId();
```

- *Type:* java.lang.String

The Workload identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#workload_id GoogleApphubWorkload#workload_id}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.attributes"></a>

```java
public GoogleApphubWorkloadAttributes getAttributes();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributes">GoogleApphubWorkloadAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#attributes GoogleApphubWorkload#attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User-defined description of a Workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#description GoogleApphubWorkload#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User-defined name for the Workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#display_name GoogleApphubWorkload#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#id GoogleApphubWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#project GoogleApphubWorkload#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadConfig.property.timeouts"></a>

```java
public GoogleApphubWorkloadTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeouts">GoogleApphubWorkloadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#timeouts GoogleApphubWorkload#timeouts}

---

### GoogleApphubWorkloadTimeouts <a name="GoogleApphubWorkloadTimeouts" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadTimeouts;

GoogleApphubWorkloadTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#create GoogleApphubWorkload#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#delete GoogleApphubWorkload#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#update GoogleApphubWorkload#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#create GoogleApphubWorkload#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#delete GoogleApphubWorkload#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_apphub_workload#update GoogleApphubWorkload#update}.

---

### GoogleApphubWorkloadWorkloadProperties <a name="GoogleApphubWorkloadWorkloadProperties" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadWorkloadProperties;

GoogleApphubWorkloadWorkloadProperties.builder()
    .build();
```


### GoogleApphubWorkloadWorkloadReference <a name="GoogleApphubWorkloadWorkloadReference" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadWorkloadReference;

GoogleApphubWorkloadWorkloadReference.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleApphubWorkloadAttributesBusinessOwnersList <a name="GoogleApphubWorkloadAttributesBusinessOwnersList" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadAttributesBusinessOwnersList;

new GoogleApphubWorkloadAttributesBusinessOwnersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.get"></a>

```java
public GoogleApphubWorkloadAttributesBusinessOwnersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwners">GoogleApphubWorkloadAttributesBusinessOwners</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwners">GoogleApphubWorkloadAttributesBusinessOwners</a>>

---


### GoogleApphubWorkloadAttributesBusinessOwnersOutputReference <a name="GoogleApphubWorkloadAttributesBusinessOwnersOutputReference" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference;

new GoogleApphubWorkloadAttributesBusinessOwnersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwners">GoogleApphubWorkloadAttributesBusinessOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwners">GoogleApphubWorkloadAttributesBusinessOwners</a>

---


### GoogleApphubWorkloadAttributesCriticalityOutputReference <a name="GoogleApphubWorkloadAttributesCriticalityOutputReference" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadAttributesCriticalityOutputReference;

new GoogleApphubWorkloadAttributesCriticalityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticality">GoogleApphubWorkloadAttributesCriticality</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference.property.internalValue"></a>

```java
public GoogleApphubWorkloadAttributesCriticality getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticality">GoogleApphubWorkloadAttributesCriticality</a>

---


### GoogleApphubWorkloadAttributesDeveloperOwnersList <a name="GoogleApphubWorkloadAttributesDeveloperOwnersList" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadAttributesDeveloperOwnersList;

new GoogleApphubWorkloadAttributesDeveloperOwnersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.get"></a>

```java
public GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwners">GoogleApphubWorkloadAttributesDeveloperOwners</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwners">GoogleApphubWorkloadAttributesDeveloperOwners</a>>

---


### GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference <a name="GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference;

new GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwners">GoogleApphubWorkloadAttributesDeveloperOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwners">GoogleApphubWorkloadAttributesDeveloperOwners</a>

---


### GoogleApphubWorkloadAttributesEnvironmentOutputReference <a name="GoogleApphubWorkloadAttributesEnvironmentOutputReference" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadAttributesEnvironmentOutputReference;

new GoogleApphubWorkloadAttributesEnvironmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironment">GoogleApphubWorkloadAttributesEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference.property.internalValue"></a>

```java
public GoogleApphubWorkloadAttributesEnvironment getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironment">GoogleApphubWorkloadAttributesEnvironment</a>

---


### GoogleApphubWorkloadAttributesOperatorOwnersList <a name="GoogleApphubWorkloadAttributesOperatorOwnersList" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadAttributesOperatorOwnersList;

new GoogleApphubWorkloadAttributesOperatorOwnersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.get"></a>

```java
public GoogleApphubWorkloadAttributesOperatorOwnersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwners">GoogleApphubWorkloadAttributesOperatorOwners</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwners">GoogleApphubWorkloadAttributesOperatorOwners</a>>

---


### GoogleApphubWorkloadAttributesOperatorOwnersOutputReference <a name="GoogleApphubWorkloadAttributesOperatorOwnersOutputReference" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference;

new GoogleApphubWorkloadAttributesOperatorOwnersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwners">GoogleApphubWorkloadAttributesOperatorOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwners">GoogleApphubWorkloadAttributesOperatorOwners</a>

---


### GoogleApphubWorkloadAttributesOutputReference <a name="GoogleApphubWorkloadAttributesOutputReference" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadAttributesOutputReference;

new GoogleApphubWorkloadAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.putBusinessOwners">putBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.putCriticality">putCriticality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.putDeveloperOwners">putDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.putOperatorOwners">putOperatorOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.resetBusinessOwners">resetBusinessOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.resetCriticality">resetCriticality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.resetDeveloperOwners">resetDeveloperOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.resetOperatorOwners">resetOperatorOwners</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBusinessOwners` <a name="putBusinessOwners" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.putBusinessOwners"></a>

```java
public void putBusinessOwners(IResolvable OR java.util.List<GoogleApphubWorkloadAttributesBusinessOwners> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.putBusinessOwners.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwners">GoogleApphubWorkloadAttributesBusinessOwners</a>>

---

##### `putCriticality` <a name="putCriticality" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.putCriticality"></a>

```java
public void putCriticality(GoogleApphubWorkloadAttributesCriticality value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.putCriticality.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticality">GoogleApphubWorkloadAttributesCriticality</a>

---

##### `putDeveloperOwners` <a name="putDeveloperOwners" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.putDeveloperOwners"></a>

```java
public void putDeveloperOwners(IResolvable OR java.util.List<GoogleApphubWorkloadAttributesDeveloperOwners> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.putDeveloperOwners.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwners">GoogleApphubWorkloadAttributesDeveloperOwners</a>>

---

##### `putEnvironment` <a name="putEnvironment" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.putEnvironment"></a>

```java
public void putEnvironment(GoogleApphubWorkloadAttributesEnvironment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironment">GoogleApphubWorkloadAttributesEnvironment</a>

---

##### `putOperatorOwners` <a name="putOperatorOwners" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.putOperatorOwners"></a>

```java
public void putOperatorOwners(IResolvable OR java.util.List<GoogleApphubWorkloadAttributesOperatorOwners> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.putOperatorOwners.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwners">GoogleApphubWorkloadAttributesOperatorOwners</a>>

---

##### `resetBusinessOwners` <a name="resetBusinessOwners" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.resetBusinessOwners"></a>

```java
public void resetBusinessOwners()
```

##### `resetCriticality` <a name="resetCriticality" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.resetCriticality"></a>

```java
public void resetCriticality()
```

##### `resetDeveloperOwners` <a name="resetDeveloperOwners" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.resetDeveloperOwners"></a>

```java
public void resetDeveloperOwners()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetOperatorOwners` <a name="resetOperatorOwners" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.resetOperatorOwners"></a>

```java
public void resetOperatorOwners()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.businessOwners">businessOwners</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList">GoogleApphubWorkloadAttributesBusinessOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.criticality">criticality</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference">GoogleApphubWorkloadAttributesCriticalityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.developerOwners">developerOwners</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList">GoogleApphubWorkloadAttributesDeveloperOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference">GoogleApphubWorkloadAttributesEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.operatorOwners">operatorOwners</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList">GoogleApphubWorkloadAttributesOperatorOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.businessOwnersInput">businessOwnersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwners">GoogleApphubWorkloadAttributesBusinessOwners</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.criticalityInput">criticalityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticality">GoogleApphubWorkloadAttributesCriticality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.developerOwnersInput">developerOwnersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwners">GoogleApphubWorkloadAttributesDeveloperOwners</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.environmentInput">environmentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironment">GoogleApphubWorkloadAttributesEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.operatorOwnersInput">operatorOwnersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwners">GoogleApphubWorkloadAttributesOperatorOwners</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributes">GoogleApphubWorkloadAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `businessOwners`<sup>Required</sup> <a name="businessOwners" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.businessOwners"></a>

```java
public GoogleApphubWorkloadAttributesBusinessOwnersList getBusinessOwners();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwnersList">GoogleApphubWorkloadAttributesBusinessOwnersList</a>

---

##### `criticality`<sup>Required</sup> <a name="criticality" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.criticality"></a>

```java
public GoogleApphubWorkloadAttributesCriticalityOutputReference getCriticality();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticalityOutputReference">GoogleApphubWorkloadAttributesCriticalityOutputReference</a>

---

##### `developerOwners`<sup>Required</sup> <a name="developerOwners" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.developerOwners"></a>

```java
public GoogleApphubWorkloadAttributesDeveloperOwnersList getDeveloperOwners();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwnersList">GoogleApphubWorkloadAttributesDeveloperOwnersList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.environment"></a>

```java
public GoogleApphubWorkloadAttributesEnvironmentOutputReference getEnvironment();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironmentOutputReference">GoogleApphubWorkloadAttributesEnvironmentOutputReference</a>

---

##### `operatorOwners`<sup>Required</sup> <a name="operatorOwners" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.operatorOwners"></a>

```java
public GoogleApphubWorkloadAttributesOperatorOwnersList getOperatorOwners();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwnersList">GoogleApphubWorkloadAttributesOperatorOwnersList</a>

---

##### `businessOwnersInput`<sup>Optional</sup> <a name="businessOwnersInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.businessOwnersInput"></a>

```java
public java.lang.Object getBusinessOwnersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesBusinessOwners">GoogleApphubWorkloadAttributesBusinessOwners</a>>

---

##### `criticalityInput`<sup>Optional</sup> <a name="criticalityInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.criticalityInput"></a>

```java
public GoogleApphubWorkloadAttributesCriticality getCriticalityInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesCriticality">GoogleApphubWorkloadAttributesCriticality</a>

---

##### `developerOwnersInput`<sup>Optional</sup> <a name="developerOwnersInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.developerOwnersInput"></a>

```java
public java.lang.Object getDeveloperOwnersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesDeveloperOwners">GoogleApphubWorkloadAttributesDeveloperOwners</a>>

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.environmentInput"></a>

```java
public GoogleApphubWorkloadAttributesEnvironment getEnvironmentInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesEnvironment">GoogleApphubWorkloadAttributesEnvironment</a>

---

##### `operatorOwnersInput`<sup>Optional</sup> <a name="operatorOwnersInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.operatorOwnersInput"></a>

```java
public java.lang.Object getOperatorOwnersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOperatorOwners">GoogleApphubWorkloadAttributesOperatorOwners</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributesOutputReference.property.internalValue"></a>

```java
public GoogleApphubWorkloadAttributes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadAttributes">GoogleApphubWorkloadAttributes</a>

---


### GoogleApphubWorkloadTimeoutsOutputReference <a name="GoogleApphubWorkloadTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadTimeoutsOutputReference;

new GoogleApphubWorkloadTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeouts">GoogleApphubWorkloadTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadTimeouts">GoogleApphubWorkloadTimeouts</a>

---


### GoogleApphubWorkloadWorkloadPropertiesList <a name="GoogleApphubWorkloadWorkloadPropertiesList" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadWorkloadPropertiesList;

new GoogleApphubWorkloadWorkloadPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.get"></a>

```java
public GoogleApphubWorkloadWorkloadPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleApphubWorkloadWorkloadPropertiesOutputReference <a name="GoogleApphubWorkloadWorkloadPropertiesOutputReference" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadWorkloadPropertiesOutputReference;

new GoogleApphubWorkloadWorkloadPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.property.gcpProject">gcpProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadProperties">GoogleApphubWorkloadWorkloadProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gcpProject`<sup>Required</sup> <a name="gcpProject" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.property.gcpProject"></a>

```java
public java.lang.String getGcpProject();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadPropertiesOutputReference.property.internalValue"></a>

```java
public GoogleApphubWorkloadWorkloadProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadProperties">GoogleApphubWorkloadWorkloadProperties</a>

---


### GoogleApphubWorkloadWorkloadReferenceList <a name="GoogleApphubWorkloadWorkloadReferenceList" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadWorkloadReferenceList;

new GoogleApphubWorkloadWorkloadReferenceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.get"></a>

```java
public GoogleApphubWorkloadWorkloadReferenceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleApphubWorkloadWorkloadReferenceOutputReference <a name="GoogleApphubWorkloadWorkloadReferenceOutputReference" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_apphub_workload.GoogleApphubWorkloadWorkloadReferenceOutputReference;

new GoogleApphubWorkloadWorkloadReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReference">GoogleApphubWorkloadWorkloadReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReferenceOutputReference.property.internalValue"></a>

```java
public GoogleApphubWorkloadWorkloadReference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubWorkload.GoogleApphubWorkloadWorkloadReference">GoogleApphubWorkloadWorkloadReference</a>

---



