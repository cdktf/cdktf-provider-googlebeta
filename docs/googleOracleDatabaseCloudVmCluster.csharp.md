# `googleOracleDatabaseCloudVmCluster` Submodule <a name="`googleOracleDatabaseCloudVmCluster` Submodule" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseCloudVmCluster <a name="GoogleOracleDatabaseCloudVmCluster" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster google_oracle_database_cloud_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOracleDatabaseCloudVmCluster(Construct Scope, string Id, GoogleOracleDatabaseCloudVmClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig">GoogleOracleDatabaseCloudVmClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig">GoogleOracleDatabaseCloudVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties"></a>

```csharp
private void PutProperties(GoogleOracleDatabaseCloudVmClusterProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleOracleDatabaseCloudVmClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts">GoogleOracleDatabaseCloudVmClusterTimeouts</a>

---

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleOracleDatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleOracleDatabaseCloudVmCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleOracleDatabaseCloudVmCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleOracleDatabaseCloudVmCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleOracleDatabaseCloudVmCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleOracleDatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleOracleDatabaseCloudVmCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleOracleDatabaseCloudVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseCloudVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.gcpOracleZone">GcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference">GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference">GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.backupSubnetCidrInput">BackupSubnetCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cloudVmClusterIdInput">CloudVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.exadataInfrastructureInput">ExadataInfrastructureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.backupSubnetCidr">BackupSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cloudVmClusterId">CloudVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.exadataInfrastructure">ExadataInfrastructure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GcpOracleZone`<sup>Required</sup> <a name="GcpOracleZone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.gcpOracleZone"></a>

```csharp
public string GcpOracleZone { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.properties"></a>

```csharp
public GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference">GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.timeouts"></a>

```csharp
public GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference">GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference</a>

---

##### `BackupSubnetCidrInput`<sup>Optional</sup> <a name="BackupSubnetCidrInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.backupSubnetCidrInput"></a>

```csharp
public string BackupSubnetCidrInput { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `CloudVmClusterIdInput`<sup>Optional</sup> <a name="CloudVmClusterIdInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cloudVmClusterIdInput"></a>

```csharp
public string CloudVmClusterIdInput { get; }
```

- *Type:* string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.deletionProtectionInput"></a>

```csharp
public object DeletionProtectionInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExadataInfrastructureInput`<sup>Optional</sup> <a name="ExadataInfrastructureInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.exadataInfrastructureInput"></a>

```csharp
public string ExadataInfrastructureInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.propertiesInput"></a>

```csharp
public GoogleOracleDatabaseCloudVmClusterProperties PropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BackupSubnetCidr`<sup>Required</sup> <a name="BackupSubnetCidr" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.backupSubnetCidr"></a>

```csharp
public string BackupSubnetCidr { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `CloudVmClusterId`<sup>Required</sup> <a name="CloudVmClusterId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.cloudVmClusterId"></a>

```csharp
public string CloudVmClusterId { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExadataInfrastructure`<sup>Required</sup> <a name="ExadataInfrastructure" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.exadataInfrastructure"></a>

```csharp
public string ExadataInfrastructure { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseCloudVmClusterConfig <a name="GoogleOracleDatabaseCloudVmClusterConfig" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOracleDatabaseCloudVmClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BackupSubnetCidr,
    string Cidr,
    string CloudVmClusterId,
    string ExadataInfrastructure,
    string Location,
    string Network,
    object DeletionProtection = null,
    string DisplayName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleOracleDatabaseCloudVmClusterProperties Properties = null,
    GoogleOracleDatabaseCloudVmClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.backupSubnetCidr">BackupSubnetCidr</a></code> | <code>string</code> | CIDR range of the backup subnet. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.cidr">Cidr</a></code> | <code>string</code> | Network settings. CIDR to use for cluster IP allocation. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.cloudVmClusterId">CloudVmClusterId</a></code> | <code>string</code> | The ID of the VM Cluster to create. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.exadataInfrastructure">ExadataInfrastructure</a></code> | <code>string</code> | The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbNode'. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.network">Network</a></code> | <code>string</code> | The name of the VPC network. Format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | Whether Terraform will be prevented from destroying the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User friendly name for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#id GoogleOracleDatabaseCloudVmCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels or tags associated with the VM Cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#project GoogleOracleDatabaseCloudVmCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts">GoogleOracleDatabaseCloudVmClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BackupSubnetCidr`<sup>Required</sup> <a name="BackupSubnetCidr" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.backupSubnetCidr"></a>

```csharp
public string BackupSubnetCidr { get; set; }
```

- *Type:* string

CIDR range of the backup subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#backup_subnet_cidr GoogleOracleDatabaseCloudVmCluster#backup_subnet_cidr}

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

Network settings. CIDR to use for cluster IP allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#cidr GoogleOracleDatabaseCloudVmCluster#cidr}

---

##### `CloudVmClusterId`<sup>Required</sup> <a name="CloudVmClusterId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.cloudVmClusterId"></a>

```csharp
public string CloudVmClusterId { get; set; }
```

- *Type:* string

The ID of the VM Cluster to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#cloud_vm_cluster_id GoogleOracleDatabaseCloudVmCluster#cloud_vm_cluster_id}

---

##### `ExadataInfrastructure`<sup>Required</sup> <a name="ExadataInfrastructure" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.exadataInfrastructure"></a>

```csharp
public string ExadataInfrastructure { get; set; }
```

- *Type:* string

The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#exadata_infrastructure GoogleOracleDatabaseCloudVmCluster#exadata_infrastructure}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbNode'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#location GoogleOracleDatabaseCloudVmCluster#location}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The name of the VPC network. Format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#network GoogleOracleDatabaseCloudVmCluster#network}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; set; }
```

- *Type:* object

Whether Terraform will be prevented from destroying the cluster.

Deleting this cluster via terraform destroy or terraform apply will only succeed if this field is false in the Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#deletion_protection GoogleOracleDatabaseCloudVmCluster#deletion_protection}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User friendly name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#display_name GoogleOracleDatabaseCloudVmCluster#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#id GoogleOracleDatabaseCloudVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels or tags associated with the VM Cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#labels GoogleOracleDatabaseCloudVmCluster#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#project GoogleOracleDatabaseCloudVmCluster#project}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.properties"></a>

```csharp
public GoogleOracleDatabaseCloudVmClusterProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#properties GoogleOracleDatabaseCloudVmCluster#properties}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterConfig.property.timeouts"></a>

```csharp
public GoogleOracleDatabaseCloudVmClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts">GoogleOracleDatabaseCloudVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#timeouts GoogleOracleDatabaseCloudVmCluster#timeouts}

---

### GoogleOracleDatabaseCloudVmClusterProperties <a name="GoogleOracleDatabaseCloudVmClusterProperties" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOracleDatabaseCloudVmClusterProperties {
    double CpuCoreCount,
    string LicenseType,
    string ClusterName = null,
    double DataStorageSizeTb = null,
    double DbNodeStorageSizeGb = null,
    string[] DbServerOcids = null,
    GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions DiagnosticsDataCollectionOptions = null,
    string DiskRedundancy = null,
    string GiVersion = null,
    string HostnamePrefix = null,
    object LocalBackupEnabled = null,
    double MemorySizeGb = null,
    double NodeCount = null,
    double OcpuCount = null,
    object SparseDiskgroupEnabled = null,
    string[] SshPublicKeys = null,
    GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | Number of enabled CPU cores. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.licenseType">LicenseType</a></code> | <code>string</code> | License type of VM Cluster.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.clusterName">ClusterName</a></code> | <code>string</code> | OCI Cluster name. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.dataStorageSizeTb">DataStorageSizeTb</a></code> | <code>double</code> | The data disk group size to be allocated in TBs. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.dbNodeStorageSizeGb">DbNodeStorageSizeGb</a></code> | <code>double</code> | Local storage per VM. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.dbServerOcids">DbServerOcids</a></code> | <code>string[]</code> | OCID of database servers. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.diagnosticsDataCollectionOptions">DiagnosticsDataCollectionOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a></code> | diagnostics_data_collection_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.diskRedundancy">DiskRedundancy</a></code> | <code>string</code> | The type of redundancy.   Possible values:  DISK_REDUNDANCY_UNSPECIFIED HIGH NORMAL. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.giVersion">GiVersion</a></code> | <code>string</code> | Grid Infrastructure Version. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.hostnamePrefix">HostnamePrefix</a></code> | <code>string</code> | Prefix for VM cluster host names. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.localBackupEnabled">LocalBackupEnabled</a></code> | <code>object</code> | Use local backup. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.memorySizeGb">MemorySizeGb</a></code> | <code>double</code> | Memory allocated in GBs. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.nodeCount">NodeCount</a></code> | <code>double</code> | Number of database servers. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.ocpuCount">OcpuCount</a></code> | <code>double</code> | OCPU count per VM. Minimum is 0.1. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.sparseDiskgroupEnabled">SparseDiskgroupEnabled</a></code> | <code>object</code> | Use exadata sparse snapshots. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.sshPublicKeys">SshPublicKeys</a></code> | <code>string[]</code> | SSH public keys to be stored with cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a></code> | time_zone block. |

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; set; }
```

- *Type:* double

Number of enabled CPU cores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#cpu_core_count GoogleOracleDatabaseCloudVmCluster#cpu_core_count}

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.licenseType"></a>

```csharp
public string LicenseType { get; set; }
```

- *Type:* string

License type of VM Cluster.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#license_type GoogleOracleDatabaseCloudVmCluster#license_type}

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

OCI Cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#cluster_name GoogleOracleDatabaseCloudVmCluster#cluster_name}

---

##### `DataStorageSizeTb`<sup>Optional</sup> <a name="DataStorageSizeTb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.dataStorageSizeTb"></a>

```csharp
public double DataStorageSizeTb { get; set; }
```

- *Type:* double

The data disk group size to be allocated in TBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#data_storage_size_tb GoogleOracleDatabaseCloudVmCluster#data_storage_size_tb}

---

##### `DbNodeStorageSizeGb`<sup>Optional</sup> <a name="DbNodeStorageSizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.dbNodeStorageSizeGb"></a>

```csharp
public double DbNodeStorageSizeGb { get; set; }
```

- *Type:* double

Local storage per VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#db_node_storage_size_gb GoogleOracleDatabaseCloudVmCluster#db_node_storage_size_gb}

---

##### `DbServerOcids`<sup>Optional</sup> <a name="DbServerOcids" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.dbServerOcids"></a>

```csharp
public string[] DbServerOcids { get; set; }
```

- *Type:* string[]

OCID of database servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#db_server_ocids GoogleOracleDatabaseCloudVmCluster#db_server_ocids}

---

##### `DiagnosticsDataCollectionOptions`<sup>Optional</sup> <a name="DiagnosticsDataCollectionOptions" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.diagnosticsDataCollectionOptions"></a>

```csharp
public GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions DiagnosticsDataCollectionOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

diagnostics_data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#diagnostics_data_collection_options GoogleOracleDatabaseCloudVmCluster#diagnostics_data_collection_options}

---

##### `DiskRedundancy`<sup>Optional</sup> <a name="DiskRedundancy" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.diskRedundancy"></a>

```csharp
public string DiskRedundancy { get; set; }
```

- *Type:* string

The type of redundancy.   Possible values:  DISK_REDUNDANCY_UNSPECIFIED HIGH NORMAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#disk_redundancy GoogleOracleDatabaseCloudVmCluster#disk_redundancy}

---

##### `GiVersion`<sup>Optional</sup> <a name="GiVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.giVersion"></a>

```csharp
public string GiVersion { get; set; }
```

- *Type:* string

Grid Infrastructure Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#gi_version GoogleOracleDatabaseCloudVmCluster#gi_version}

---

##### `HostnamePrefix`<sup>Optional</sup> <a name="HostnamePrefix" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.hostnamePrefix"></a>

```csharp
public string HostnamePrefix { get; set; }
```

- *Type:* string

Prefix for VM cluster host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#hostname_prefix GoogleOracleDatabaseCloudVmCluster#hostname_prefix}

---

##### `LocalBackupEnabled`<sup>Optional</sup> <a name="LocalBackupEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.localBackupEnabled"></a>

```csharp
public object LocalBackupEnabled { get; set; }
```

- *Type:* object

Use local backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#local_backup_enabled GoogleOracleDatabaseCloudVmCluster#local_backup_enabled}

---

##### `MemorySizeGb`<sup>Optional</sup> <a name="MemorySizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.memorySizeGb"></a>

```csharp
public double MemorySizeGb { get; set; }
```

- *Type:* double

Memory allocated in GBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#memory_size_gb GoogleOracleDatabaseCloudVmCluster#memory_size_gb}

---

##### `NodeCount`<sup>Optional</sup> <a name="NodeCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.nodeCount"></a>

```csharp
public double NodeCount { get; set; }
```

- *Type:* double

Number of database servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#node_count GoogleOracleDatabaseCloudVmCluster#node_count}

---

##### `OcpuCount`<sup>Optional</sup> <a name="OcpuCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.ocpuCount"></a>

```csharp
public double OcpuCount { get; set; }
```

- *Type:* double

OCPU count per VM. Minimum is 0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#ocpu_count GoogleOracleDatabaseCloudVmCluster#ocpu_count}

---

##### `SparseDiskgroupEnabled`<sup>Optional</sup> <a name="SparseDiskgroupEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.sparseDiskgroupEnabled"></a>

```csharp
public object SparseDiskgroupEnabled { get; set; }
```

- *Type:* object

Use exadata sparse snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#sparse_diskgroup_enabled GoogleOracleDatabaseCloudVmCluster#sparse_diskgroup_enabled}

---

##### `SshPublicKeys`<sup>Optional</sup> <a name="SshPublicKeys" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.sshPublicKeys"></a>

```csharp
public string[] SshPublicKeys { get; set; }
```

- *Type:* string[]

SSH public keys to be stored with cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#ssh_public_keys GoogleOracleDatabaseCloudVmCluster#ssh_public_keys}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties.property.timeZone"></a>

```csharp
public GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone TimeZone { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#time_zone GoogleOracleDatabaseCloudVmCluster#time_zone}

---

### GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions <a name="GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions {
    object DiagnosticsEventsEnabled = null,
    object HealthMonitoringEnabled = null,
    object IncidentLogsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.diagnosticsEventsEnabled">DiagnosticsEventsEnabled</a></code> | <code>object</code> | Indicates whether diagnostic collection is enabled for the VM cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.healthMonitoringEnabled">HealthMonitoringEnabled</a></code> | <code>object</code> | Indicates whether health monitoring is enabled for the VM cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.incidentLogsEnabled">IncidentLogsEnabled</a></code> | <code>object</code> | Indicates whether incident logs and trace collection are enabled for the VM cluster. |

---

##### `DiagnosticsEventsEnabled`<sup>Optional</sup> <a name="DiagnosticsEventsEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.diagnosticsEventsEnabled"></a>

```csharp
public object DiagnosticsEventsEnabled { get; set; }
```

- *Type:* object

Indicates whether diagnostic collection is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#diagnostics_events_enabled GoogleOracleDatabaseCloudVmCluster#diagnostics_events_enabled}

---

##### `HealthMonitoringEnabled`<sup>Optional</sup> <a name="HealthMonitoringEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.healthMonitoringEnabled"></a>

```csharp
public object HealthMonitoringEnabled { get; set; }
```

- *Type:* object

Indicates whether health monitoring is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#health_monitoring_enabled GoogleOracleDatabaseCloudVmCluster#health_monitoring_enabled}

---

##### `IncidentLogsEnabled`<sup>Optional</sup> <a name="IncidentLogsEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.incidentLogsEnabled"></a>

```csharp
public object IncidentLogsEnabled { get; set; }
```

- *Type:* object

Indicates whether incident logs and trace collection are enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#incident_logs_enabled GoogleOracleDatabaseCloudVmCluster#incident_logs_enabled}

---

### GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone <a name="GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone {
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone.property.id">Id</a></code> | <code>string</code> | IANA Time Zone Database time zone, e.g. "America/New_York". |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

IANA Time Zone Database time zone, e.g. "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#id GoogleOracleDatabaseCloudVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### GoogleOracleDatabaseCloudVmClusterTimeouts <a name="GoogleOracleDatabaseCloudVmClusterTimeouts" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOracleDatabaseCloudVmClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#create GoogleOracleDatabaseCloudVmCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#delete GoogleOracleDatabaseCloudVmCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#update GoogleOracleDatabaseCloudVmCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#create GoogleOracleDatabaseCloudVmCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#delete GoogleOracleDatabaseCloudVmCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_oracle_database_cloud_vm_cluster#update GoogleOracleDatabaseCloudVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference <a name="GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetDiagnosticsEventsEnabled">ResetDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetHealthMonitoringEnabled">ResetHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetIncidentLogsEnabled">ResetIncidentLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiagnosticsEventsEnabled` <a name="ResetDiagnosticsEventsEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetDiagnosticsEventsEnabled"></a>

```csharp
private void ResetDiagnosticsEventsEnabled()
```

##### `ResetHealthMonitoringEnabled` <a name="ResetHealthMonitoringEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetHealthMonitoringEnabled"></a>

```csharp
private void ResetHealthMonitoringEnabled()
```

##### `ResetIncidentLogsEnabled` <a name="ResetIncidentLogsEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetIncidentLogsEnabled"></a>

```csharp
private void ResetIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabledInput">DiagnosticsEventsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabledInput">HealthMonitoringEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabledInput">IncidentLogsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled">DiagnosticsEventsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabled">HealthMonitoringEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabled">IncidentLogsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="DiagnosticsEventsEnabledInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabledInput"></a>

```csharp
public object DiagnosticsEventsEnabledInput { get; }
```

- *Type:* object

---

##### `HealthMonitoringEnabledInput`<sup>Optional</sup> <a name="HealthMonitoringEnabledInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabledInput"></a>

```csharp
public object HealthMonitoringEnabledInput { get; }
```

- *Type:* object

---

##### `IncidentLogsEnabledInput`<sup>Optional</sup> <a name="IncidentLogsEnabledInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabledInput"></a>

```csharp
public object IncidentLogsEnabledInput { get; }
```

- *Type:* object

---

##### `DiagnosticsEventsEnabled`<sup>Required</sup> <a name="DiagnosticsEventsEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled"></a>

```csharp
public object DiagnosticsEventsEnabled { get; }
```

- *Type:* object

---

##### `HealthMonitoringEnabled`<sup>Required</sup> <a name="HealthMonitoringEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabled"></a>

```csharp
public object HealthMonitoringEnabled { get; }
```

- *Type:* object

---

##### `IncidentLogsEnabled`<sup>Required</sup> <a name="IncidentLogsEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabled"></a>

```csharp
public object IncidentLogsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

---


### GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference <a name="GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions">PutDiagnosticsDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.putTimeZone">PutTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDataStorageSizeTb">ResetDataStorageSizeTb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbNodeStorageSizeGb">ResetDbNodeStorageSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbServerOcids">ResetDbServerOcids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiagnosticsDataCollectionOptions">ResetDiagnosticsDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiskRedundancy">ResetDiskRedundancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetGiVersion">ResetGiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetHostnamePrefix">ResetHostnamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetLocalBackupEnabled">ResetLocalBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetMemorySizeGb">ResetMemorySizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetNodeCount">ResetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetOcpuCount">ResetOcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetSparseDiskgroupEnabled">ResetSparseDiskgroupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetSshPublicKeys">ResetSshPublicKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDiagnosticsDataCollectionOptions` <a name="PutDiagnosticsDataCollectionOptions" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions"></a>

```csharp
private void PutDiagnosticsDataCollectionOptions(GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

---

##### `PutTimeZone` <a name="PutTimeZone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.putTimeZone"></a>

```csharp
private void PutTimeZone(GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a>

---

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetClusterName"></a>

```csharp
private void ResetClusterName()
```

##### `ResetDataStorageSizeTb` <a name="ResetDataStorageSizeTb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDataStorageSizeTb"></a>

```csharp
private void ResetDataStorageSizeTb()
```

##### `ResetDbNodeStorageSizeGb` <a name="ResetDbNodeStorageSizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbNodeStorageSizeGb"></a>

```csharp
private void ResetDbNodeStorageSizeGb()
```

##### `ResetDbServerOcids` <a name="ResetDbServerOcids" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbServerOcids"></a>

```csharp
private void ResetDbServerOcids()
```

##### `ResetDiagnosticsDataCollectionOptions` <a name="ResetDiagnosticsDataCollectionOptions" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiagnosticsDataCollectionOptions"></a>

```csharp
private void ResetDiagnosticsDataCollectionOptions()
```

##### `ResetDiskRedundancy` <a name="ResetDiskRedundancy" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiskRedundancy"></a>

```csharp
private void ResetDiskRedundancy()
```

##### `ResetGiVersion` <a name="ResetGiVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetGiVersion"></a>

```csharp
private void ResetGiVersion()
```

##### `ResetHostnamePrefix` <a name="ResetHostnamePrefix" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetHostnamePrefix"></a>

```csharp
private void ResetHostnamePrefix()
```

##### `ResetLocalBackupEnabled` <a name="ResetLocalBackupEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetLocalBackupEnabled"></a>

```csharp
private void ResetLocalBackupEnabled()
```

##### `ResetMemorySizeGb` <a name="ResetMemorySizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetMemorySizeGb"></a>

```csharp
private void ResetMemorySizeGb()
```

##### `ResetNodeCount` <a name="ResetNodeCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetNodeCount"></a>

```csharp
private void ResetNodeCount()
```

##### `ResetOcpuCount` <a name="ResetOcpuCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetOcpuCount"></a>

```csharp
private void ResetOcpuCount()
```

##### `ResetSparseDiskgroupEnabled` <a name="ResetSparseDiskgroupEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetSparseDiskgroupEnabled"></a>

```csharp
private void ResetSparseDiskgroupEnabled()
```

##### `ResetSshPublicKeys` <a name="ResetSshPublicKeys" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetSshPublicKeys"></a>

```csharp
private void ResetSshPublicKeys()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptions">DiagnosticsDataCollectionOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dnsListenerIp">DnsListenerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDns">ScanDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDnsRecordId">ScanDnsRecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanIpIds">ScanIpIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcpSsl">ScanListenerPortTcpSsl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.storageSizeGb">StorageSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.systemVersion">SystemVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCountInput">CpuCoreCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTbInput">DataStorageSizeTbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGbInput">DbNodeStorageSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcidsInput">DbServerOcidsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptionsInput">DiagnosticsDataCollectionOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancyInput">DiskRedundancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersionInput">GiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefixInput">HostnamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabledInput">LocalBackupEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGbInput">MemorySizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCountInput">OcpuCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabledInput">SparseDiskgroupEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeysInput">SshPublicKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTb">DataStorageSizeTb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGb">DbNodeStorageSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcids">DbServerOcids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancy">DiskRedundancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersion">GiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefix">HostnamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseType">LicenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabled">LocalBackupEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGb">MemorySizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCount">OcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabled">SparseDiskgroupEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeys">SshPublicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DiagnosticsDataCollectionOptions`<sup>Required</sup> <a name="DiagnosticsDataCollectionOptions" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptions"></a>

```csharp
public GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference DiagnosticsDataCollectionOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference</a>

---

##### `DnsListenerIp`<sup>Required</sup> <a name="DnsListenerIp" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dnsListenerIp"></a>

```csharp
public string DnsListenerIp { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `ScanDns`<sup>Required</sup> <a name="ScanDns" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDns"></a>

```csharp
public string ScanDns { get; }
```

- *Type:* string

---

##### `ScanDnsRecordId`<sup>Required</sup> <a name="ScanDnsRecordId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDnsRecordId"></a>

```csharp
public string ScanDnsRecordId { get; }
```

- *Type:* string

---

##### `ScanIpIds`<sup>Required</sup> <a name="ScanIpIds" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanIpIds"></a>

```csharp
public string[] ScanIpIds { get; }
```

- *Type:* string[]

---

##### `ScanListenerPortTcp`<sup>Required</sup> <a name="ScanListenerPortTcp" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcp"></a>

```csharp
public double ScanListenerPortTcp { get; }
```

- *Type:* double

---

##### `ScanListenerPortTcpSsl`<sup>Required</sup> <a name="ScanListenerPortTcpSsl" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcpSsl"></a>

```csharp
public double ScanListenerPortTcpSsl { get; }
```

- *Type:* double

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageSizeGb`<sup>Required</sup> <a name="StorageSizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.storageSizeGb"></a>

```csharp
public double StorageSizeGb { get; }
```

- *Type:* double

---

##### `SystemVersion`<sup>Required</sup> <a name="SystemVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.systemVersion"></a>

```csharp
public string SystemVersion { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZone"></a>

```csharp
public GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference TimeZone { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `CpuCoreCountInput`<sup>Optional</sup> <a name="CpuCoreCountInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCountInput"></a>

```csharp
public double CpuCoreCountInput { get; }
```

- *Type:* double

---

##### `DataStorageSizeTbInput`<sup>Optional</sup> <a name="DataStorageSizeTbInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTbInput"></a>

```csharp
public double DataStorageSizeTbInput { get; }
```

- *Type:* double

---

##### `DbNodeStorageSizeGbInput`<sup>Optional</sup> <a name="DbNodeStorageSizeGbInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGbInput"></a>

```csharp
public double DbNodeStorageSizeGbInput { get; }
```

- *Type:* double

---

##### `DbServerOcidsInput`<sup>Optional</sup> <a name="DbServerOcidsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcidsInput"></a>

```csharp
public string[] DbServerOcidsInput { get; }
```

- *Type:* string[]

---

##### `DiagnosticsDataCollectionOptionsInput`<sup>Optional</sup> <a name="DiagnosticsDataCollectionOptionsInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptionsInput"></a>

```csharp
public GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions DiagnosticsDataCollectionOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">GoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

---

##### `DiskRedundancyInput`<sup>Optional</sup> <a name="DiskRedundancyInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancyInput"></a>

```csharp
public string DiskRedundancyInput { get; }
```

- *Type:* string

---

##### `GiVersionInput`<sup>Optional</sup> <a name="GiVersionInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersionInput"></a>

```csharp
public string GiVersionInput { get; }
```

- *Type:* string

---

##### `HostnamePrefixInput`<sup>Optional</sup> <a name="HostnamePrefixInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefixInput"></a>

```csharp
public string HostnamePrefixInput { get; }
```

- *Type:* string

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseTypeInput"></a>

```csharp
public string LicenseTypeInput { get; }
```

- *Type:* string

---

##### `LocalBackupEnabledInput`<sup>Optional</sup> <a name="LocalBackupEnabledInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabledInput"></a>

```csharp
public object LocalBackupEnabledInput { get; }
```

- *Type:* object

---

##### `MemorySizeGbInput`<sup>Optional</sup> <a name="MemorySizeGbInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGbInput"></a>

```csharp
public double MemorySizeGbInput { get; }
```

- *Type:* double

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCountInput"></a>

```csharp
public double NodeCountInput { get; }
```

- *Type:* double

---

##### `OcpuCountInput`<sup>Optional</sup> <a name="OcpuCountInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCountInput"></a>

```csharp
public double OcpuCountInput { get; }
```

- *Type:* double

---

##### `SparseDiskgroupEnabledInput`<sup>Optional</sup> <a name="SparseDiskgroupEnabledInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabledInput"></a>

```csharp
public object SparseDiskgroupEnabledInput { get; }
```

- *Type:* object

---

##### `SshPublicKeysInput`<sup>Optional</sup> <a name="SshPublicKeysInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeysInput"></a>

```csharp
public string[] SshPublicKeysInput { get; }
```

- *Type:* string[]

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZoneInput"></a>

```csharp
public GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone TimeZoneInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a>

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `DataStorageSizeTb`<sup>Required</sup> <a name="DataStorageSizeTb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTb"></a>

```csharp
public double DataStorageSizeTb { get; }
```

- *Type:* double

---

##### `DbNodeStorageSizeGb`<sup>Required</sup> <a name="DbNodeStorageSizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGb"></a>

```csharp
public double DbNodeStorageSizeGb { get; }
```

- *Type:* double

---

##### `DbServerOcids`<sup>Required</sup> <a name="DbServerOcids" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcids"></a>

```csharp
public string[] DbServerOcids { get; }
```

- *Type:* string[]

---

##### `DiskRedundancy`<sup>Required</sup> <a name="DiskRedundancy" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancy"></a>

```csharp
public string DiskRedundancy { get; }
```

- *Type:* string

---

##### `GiVersion`<sup>Required</sup> <a name="GiVersion" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersion"></a>

```csharp
public string GiVersion { get; }
```

- *Type:* string

---

##### `HostnamePrefix`<sup>Required</sup> <a name="HostnamePrefix" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefix"></a>

```csharp
public string HostnamePrefix { get; }
```

- *Type:* string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseType"></a>

```csharp
public string LicenseType { get; }
```

- *Type:* string

---

##### `LocalBackupEnabled`<sup>Required</sup> <a name="LocalBackupEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabled"></a>

```csharp
public object LocalBackupEnabled { get; }
```

- *Type:* object

---

##### `MemorySizeGb`<sup>Required</sup> <a name="MemorySizeGb" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGb"></a>

```csharp
public double MemorySizeGb { get; }
```

- *Type:* double

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `OcpuCount`<sup>Required</sup> <a name="OcpuCount" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCount"></a>

```csharp
public double OcpuCount { get; }
```

- *Type:* double

---

##### `SparseDiskgroupEnabled`<sup>Required</sup> <a name="SparseDiskgroupEnabled" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabled"></a>

```csharp
public object SparseDiskgroupEnabled { get; }
```

- *Type:* object

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeys"></a>

```csharp
public string[] SshPublicKeys { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseCloudVmClusterProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterProperties">GoogleOracleDatabaseCloudVmClusterProperties</a>

---


### GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference <a name="GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.internalValue"></a>

```csharp
public GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone">GoogleOracleDatabaseCloudVmClusterPropertiesTimeZone</a>

---


### GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference <a name="GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleOracleDatabaseCloudVmCluster.GoogleOracleDatabaseCloudVmClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



