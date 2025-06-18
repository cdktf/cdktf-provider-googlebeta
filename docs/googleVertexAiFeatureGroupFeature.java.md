# `googleVertexAiFeatureGroupFeature` Submodule <a name="`googleVertexAiFeatureGroupFeature` Submodule" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeatureGroupFeature <a name="GoogleVertexAiFeatureGroupFeature" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature google_vertex_ai_feature_group_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_group_feature.GoogleVertexAiFeatureGroupFeature;

GoogleVertexAiFeatureGroupFeature.Builder.create(Construct scope, java.lang.String id)
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
    .featureGroup(java.lang.String)
    .name(java.lang.String)
    .region(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleVertexAiFeatureGroupFeatureTimeouts)
//  .versionColumnName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.featureGroup">featureGroup</a></code> | <code>java.lang.String</code> | The name of the Feature Group. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the Feature Group Feature. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region for the resource. It should be the same as the feature group's region. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the FeatureGroup. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#id GoogleVertexAiFeatureGroupFeature#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize your FeatureGroup. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#project GoogleVertexAiFeatureGroupFeature#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts">GoogleVertexAiFeatureGroupFeatureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.versionColumnName">versionColumnName</a></code> | <code>java.lang.String</code> | The name of the BigQuery Table/View column hosting data for this version. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `featureGroup`<sup>Required</sup> <a name="featureGroup" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.featureGroup"></a>

- *Type:* java.lang.String

The name of the Feature Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#feature_group GoogleVertexAiFeatureGroupFeature#feature_group}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the Feature Group Feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#name GoogleVertexAiFeatureGroupFeature#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region for the resource. It should be the same as the feature group's region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#region GoogleVertexAiFeatureGroupFeature#region}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the FeatureGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#description GoogleVertexAiFeatureGroupFeature#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#id GoogleVertexAiFeatureGroupFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize your FeatureGroup.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#labels GoogleVertexAiFeatureGroupFeature#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#project GoogleVertexAiFeatureGroupFeature#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts">GoogleVertexAiFeatureGroupFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#timeouts GoogleVertexAiFeatureGroupFeature#timeouts}

---

##### `versionColumnName`<sup>Optional</sup> <a name="versionColumnName" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.Initializer.parameter.versionColumnName"></a>

- *Type:* java.lang.String

The name of the BigQuery Table/View column hosting data for this version.

If no value is provided, will use featureId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#version_column_name GoogleVertexAiFeatureGroupFeature#version_column_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetVersionColumnName">resetVersionColumnName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.putTimeouts"></a>

```java
public void putTimeouts(GoogleVertexAiFeatureGroupFeatureTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts">GoogleVertexAiFeatureGroupFeatureTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersionColumnName` <a name="resetVersionColumnName" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.resetVersionColumnName"></a>

```java
public void resetVersionColumnName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVertexAiFeatureGroupFeature resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_group_feature.GoogleVertexAiFeatureGroupFeature;

GoogleVertexAiFeatureGroupFeature.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_group_feature.GoogleVertexAiFeatureGroupFeature;

GoogleVertexAiFeatureGroupFeature.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_group_feature.GoogleVertexAiFeatureGroupFeature;

GoogleVertexAiFeatureGroupFeature.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_group_feature.GoogleVertexAiFeatureGroupFeature;

GoogleVertexAiFeatureGroupFeature.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleVertexAiFeatureGroupFeature.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleVertexAiFeatureGroupFeature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleVertexAiFeatureGroupFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleVertexAiFeatureGroupFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiFeatureGroupFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference">GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.featureGroupInput">featureGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts">GoogleVertexAiFeatureGroupFeatureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.versionColumnNameInput">versionColumnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.featureGroup">featureGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.versionColumnName">versionColumnName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.timeouts"></a>

```java
public GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference">GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `featureGroupInput`<sup>Optional</sup> <a name="featureGroupInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.featureGroupInput"></a>

```java
public java.lang.String getFeatureGroupInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts">GoogleVertexAiFeatureGroupFeatureTimeouts</a>

---

##### `versionColumnNameInput`<sup>Optional</sup> <a name="versionColumnNameInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.versionColumnNameInput"></a>

```java
public java.lang.String getVersionColumnNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `featureGroup`<sup>Required</sup> <a name="featureGroup" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.featureGroup"></a>

```java
public java.lang.String getFeatureGroup();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `versionColumnName`<sup>Required</sup> <a name="versionColumnName" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.versionColumnName"></a>

```java
public java.lang.String getVersionColumnName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeature.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeatureGroupFeatureConfig <a name="GoogleVertexAiFeatureGroupFeatureConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_group_feature.GoogleVertexAiFeatureGroupFeatureConfig;

GoogleVertexAiFeatureGroupFeatureConfig.builder()
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
    .featureGroup(java.lang.String)
    .name(java.lang.String)
    .region(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleVertexAiFeatureGroupFeatureTimeouts)
//  .versionColumnName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.featureGroup">featureGroup</a></code> | <code>java.lang.String</code> | The name of the Feature Group. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the Feature Group Feature. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region for the resource. It should be the same as the feature group's region. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the FeatureGroup. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#id GoogleVertexAiFeatureGroupFeature#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize your FeatureGroup. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#project GoogleVertexAiFeatureGroupFeature#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts">GoogleVertexAiFeatureGroupFeatureTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.versionColumnName">versionColumnName</a></code> | <code>java.lang.String</code> | The name of the BigQuery Table/View column hosting data for this version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `featureGroup`<sup>Required</sup> <a name="featureGroup" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.featureGroup"></a>

```java
public java.lang.String getFeatureGroup();
```

- *Type:* java.lang.String

The name of the Feature Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#feature_group GoogleVertexAiFeatureGroupFeature#feature_group}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the Feature Group Feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#name GoogleVertexAiFeatureGroupFeature#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region for the resource. It should be the same as the feature group's region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#region GoogleVertexAiFeatureGroupFeature#region}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the FeatureGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#description GoogleVertexAiFeatureGroupFeature#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#id GoogleVertexAiFeatureGroupFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize your FeatureGroup.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#labels GoogleVertexAiFeatureGroupFeature#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#project GoogleVertexAiFeatureGroupFeature#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.timeouts"></a>

```java
public GoogleVertexAiFeatureGroupFeatureTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts">GoogleVertexAiFeatureGroupFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#timeouts GoogleVertexAiFeatureGroupFeature#timeouts}

---

##### `versionColumnName`<sup>Optional</sup> <a name="versionColumnName" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureConfig.property.versionColumnName"></a>

```java
public java.lang.String getVersionColumnName();
```

- *Type:* java.lang.String

The name of the BigQuery Table/View column hosting data for this version.

If no value is provided, will use featureId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#version_column_name GoogleVertexAiFeatureGroupFeature#version_column_name}

---

### GoogleVertexAiFeatureGroupFeatureTimeouts <a name="GoogleVertexAiFeatureGroupFeatureTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_group_feature.GoogleVertexAiFeatureGroupFeatureTimeouts;

GoogleVertexAiFeatureGroupFeatureTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#create GoogleVertexAiFeatureGroupFeature#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#delete GoogleVertexAiFeatureGroupFeature#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#update GoogleVertexAiFeatureGroupFeature#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#create GoogleVertexAiFeatureGroupFeature#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#delete GoogleVertexAiFeatureGroupFeature#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_vertex_ai_feature_group_feature#update GoogleVertexAiFeatureGroupFeature#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference <a name="GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_vertex_ai_feature_group_feature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference;

new GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts">GoogleVertexAiFeatureGroupFeatureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureGroupFeature.GoogleVertexAiFeatureGroupFeatureTimeouts">GoogleVertexAiFeatureGroupFeatureTimeouts</a>

---



