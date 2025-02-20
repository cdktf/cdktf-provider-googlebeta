# `googleClouddeployTarget` Submodule <a name="`googleClouddeployTarget` Submodule" id="@cdktf/provider-google-beta.googleClouddeployTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleClouddeployTarget <a name="GoogleClouddeployTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target google_clouddeploy_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTarget(Construct Scope, string Id, GoogleClouddeployTargetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig">GoogleClouddeployTargetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig">GoogleClouddeployTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putAnthosCluster">PutAnthosCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putAssociatedEntities">PutAssociatedEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putCustomTarget">PutCustomTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putExecutionConfigs">PutExecutionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putGke">PutGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putMultiTarget">PutMultiTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putRun">PutRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetAnthosCluster">ResetAnthosCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetAssociatedEntities">ResetAssociatedEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetCustomTarget">ResetCustomTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetDeployParameters">ResetDeployParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetExecutionConfigs">ResetExecutionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetGke">ResetGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetMultiTarget">ResetMultiTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetRequireApproval">ResetRequireApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetRun">ResetRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnthosCluster` <a name="PutAnthosCluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putAnthosCluster"></a>

```csharp
private void PutAnthosCluster(GoogleClouddeployTargetAnthosCluster Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putAnthosCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a>

---

##### `PutAssociatedEntities` <a name="PutAssociatedEntities" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putAssociatedEntities"></a>

```csharp
private void PutAssociatedEntities(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putAssociatedEntities.parameter.value"></a>

- *Type:* object

---

##### `PutCustomTarget` <a name="PutCustomTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putCustomTarget"></a>

```csharp
private void PutCustomTarget(GoogleClouddeployTargetCustomTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putCustomTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget">GoogleClouddeployTargetCustomTarget</a>

---

##### `PutExecutionConfigs` <a name="PutExecutionConfigs" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putExecutionConfigs"></a>

```csharp
private void PutExecutionConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putExecutionConfigs.parameter.value"></a>

- *Type:* object

---

##### `PutGke` <a name="PutGke" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putGke"></a>

```csharp
private void PutGke(GoogleClouddeployTargetGke Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putGke.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a>

---

##### `PutMultiTarget` <a name="PutMultiTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putMultiTarget"></a>

```csharp
private void PutMultiTarget(GoogleClouddeployTargetMultiTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putMultiTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a>

---

##### `PutRun` <a name="PutRun" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putRun"></a>

```csharp
private void PutRun(GoogleClouddeployTargetRun Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putRun.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleClouddeployTargetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts">GoogleClouddeployTargetTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetAnthosCluster` <a name="ResetAnthosCluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetAnthosCluster"></a>

```csharp
private void ResetAnthosCluster()
```

##### `ResetAssociatedEntities` <a name="ResetAssociatedEntities" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetAssociatedEntities"></a>

```csharp
private void ResetAssociatedEntities()
```

##### `ResetCustomTarget` <a name="ResetCustomTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetCustomTarget"></a>

```csharp
private void ResetCustomTarget()
```

##### `ResetDeployParameters` <a name="ResetDeployParameters" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetDeployParameters"></a>

```csharp
private void ResetDeployParameters()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExecutionConfigs` <a name="ResetExecutionConfigs" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetExecutionConfigs"></a>

```csharp
private void ResetExecutionConfigs()
```

##### `ResetGke` <a name="ResetGke" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetGke"></a>

```csharp
private void ResetGke()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMultiTarget` <a name="ResetMultiTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetMultiTarget"></a>

```csharp
private void ResetMultiTarget()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRequireApproval` <a name="ResetRequireApproval" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetRequireApproval"></a>

```csharp
private void ResetRequireApproval()
```

##### `ResetRun` <a name="ResetRun" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetRun"></a>

```csharp
private void ResetRun()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleClouddeployTarget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleClouddeployTarget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleClouddeployTarget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleClouddeployTarget.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleClouddeployTarget.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleClouddeployTarget resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleClouddeployTarget to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleClouddeployTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleClouddeployTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.anthosCluster">AnthosCluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference">GoogleClouddeployTargetAnthosClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.associatedEntities">AssociatedEntities</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList">GoogleClouddeployTargetAssociatedEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.customTarget">CustomTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference">GoogleClouddeployTargetCustomTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.executionConfigs">ExecutionConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList">GoogleClouddeployTargetExecutionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.gke">Gke</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference">GoogleClouddeployTargetGkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.multiTarget">MultiTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference">GoogleClouddeployTargetMultiTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.run">Run</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference">GoogleClouddeployTargetRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference">GoogleClouddeployTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.anthosClusterInput">AnthosClusterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.associatedEntitiesInput">AssociatedEntitiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.customTargetInput">CustomTargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget">GoogleClouddeployTargetCustomTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.deployParametersInput">DeployParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.executionConfigsInput">ExecutionConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.gkeInput">GkeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.multiTargetInput">MultiTargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.requireApprovalInput">RequireApprovalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.runInput">RunInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.deployParameters">DeployParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.requireApproval">RequireApproval</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AnthosCluster`<sup>Required</sup> <a name="AnthosCluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.anthosCluster"></a>

```csharp
public GoogleClouddeployTargetAnthosClusterOutputReference AnthosCluster { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference">GoogleClouddeployTargetAnthosClusterOutputReference</a>

---

##### `AssociatedEntities`<sup>Required</sup> <a name="AssociatedEntities" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.associatedEntities"></a>

```csharp
public GoogleClouddeployTargetAssociatedEntitiesList AssociatedEntities { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList">GoogleClouddeployTargetAssociatedEntitiesList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CustomTarget`<sup>Required</sup> <a name="CustomTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.customTarget"></a>

```csharp
public GoogleClouddeployTargetCustomTargetOutputReference CustomTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference">GoogleClouddeployTargetCustomTargetOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ExecutionConfigs`<sup>Required</sup> <a name="ExecutionConfigs" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.executionConfigs"></a>

```csharp
public GoogleClouddeployTargetExecutionConfigsList ExecutionConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList">GoogleClouddeployTargetExecutionConfigsList</a>

---

##### `Gke`<sup>Required</sup> <a name="Gke" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.gke"></a>

```csharp
public GoogleClouddeployTargetGkeOutputReference Gke { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference">GoogleClouddeployTargetGkeOutputReference</a>

---

##### `MultiTarget`<sup>Required</sup> <a name="MultiTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.multiTarget"></a>

```csharp
public GoogleClouddeployTargetMultiTargetOutputReference MultiTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference">GoogleClouddeployTargetMultiTargetOutputReference</a>

---

##### `Run`<sup>Required</sup> <a name="Run" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.run"></a>

```csharp
public GoogleClouddeployTargetRunOutputReference Run { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference">GoogleClouddeployTargetRunOutputReference</a>

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.timeouts"></a>

```csharp
public GoogleClouddeployTargetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference">GoogleClouddeployTargetTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AnthosClusterInput`<sup>Optional</sup> <a name="AnthosClusterInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.anthosClusterInput"></a>

```csharp
public GoogleClouddeployTargetAnthosCluster AnthosClusterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a>

---

##### `AssociatedEntitiesInput`<sup>Optional</sup> <a name="AssociatedEntitiesInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.associatedEntitiesInput"></a>

```csharp
public object AssociatedEntitiesInput { get; }
```

- *Type:* object

---

##### `CustomTargetInput`<sup>Optional</sup> <a name="CustomTargetInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.customTargetInput"></a>

```csharp
public GoogleClouddeployTargetCustomTarget CustomTargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget">GoogleClouddeployTargetCustomTarget</a>

---

##### `DeployParametersInput`<sup>Optional</sup> <a name="DeployParametersInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.deployParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DeployParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExecutionConfigsInput`<sup>Optional</sup> <a name="ExecutionConfigsInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.executionConfigsInput"></a>

```csharp
public object ExecutionConfigsInput { get; }
```

- *Type:* object

---

##### `GkeInput`<sup>Optional</sup> <a name="GkeInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.gkeInput"></a>

```csharp
public GoogleClouddeployTargetGke GkeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MultiTargetInput`<sup>Optional</sup> <a name="MultiTargetInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.multiTargetInput"></a>

```csharp
public GoogleClouddeployTargetMultiTarget MultiTargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RequireApprovalInput`<sup>Optional</sup> <a name="RequireApprovalInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.requireApprovalInput"></a>

```csharp
public object RequireApprovalInput { get; }
```

- *Type:* object

---

##### `RunInput`<sup>Optional</sup> <a name="RunInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.runInput"></a>

```csharp
public GoogleClouddeployTargetRun RunInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeployParameters`<sup>Required</sup> <a name="DeployParameters" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.deployParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DeployParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RequireApproval`<sup>Required</sup> <a name="RequireApproval" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.requireApproval"></a>

```csharp
public object RequireApproval { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleClouddeployTargetAnthosCluster <a name="GoogleClouddeployTargetAnthosCluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetAnthosCluster {
    string Membership = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster.property.membership">Membership</a></code> | <code>string</code> | Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`. |

---

##### `Membership`<sup>Optional</sup> <a name="Membership" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster.property.membership"></a>

```csharp
public string Membership { get; set; }
```

- *Type:* string

Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#membership GoogleClouddeployTarget#membership}

---

### GoogleClouddeployTargetAssociatedEntities <a name="GoogleClouddeployTargetAssociatedEntities" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetAssociatedEntities {
    string EntityId,
    object AnthosClusters = null,
    object GkeClusters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities.property.entityId">EntityId</a></code> | <code>string</code> | The name for the key in the map for which this object is mapped to in the API. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities.property.anthosClusters">AnthosClusters</a></code> | <code>object</code> | anthos_clusters block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities.property.gkeClusters">GkeClusters</a></code> | <code>object</code> | gke_clusters block. |

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities.property.entityId"></a>

```csharp
public string EntityId { get; set; }
```

- *Type:* string

The name for the key in the map for which this object is mapped to in the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#entity_id GoogleClouddeployTarget#entity_id}

---

##### `AnthosClusters`<sup>Optional</sup> <a name="AnthosClusters" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities.property.anthosClusters"></a>

```csharp
public object AnthosClusters { get; set; }
```

- *Type:* object

anthos_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#anthos_clusters GoogleClouddeployTarget#anthos_clusters}

---

##### `GkeClusters`<sup>Optional</sup> <a name="GkeClusters" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntities.property.gkeClusters"></a>

```csharp
public object GkeClusters { get; set; }
```

- *Type:* object

gke_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#gke_clusters GoogleClouddeployTarget#gke_clusters}

---

### GoogleClouddeployTargetAssociatedEntitiesAnthosClusters <a name="GoogleClouddeployTargetAssociatedEntitiesAnthosClusters" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClusters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetAssociatedEntitiesAnthosClusters {
    string Membership = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClusters.property.membership">Membership</a></code> | <code>string</code> | Optional. Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`. |

---

##### `Membership`<sup>Optional</sup> <a name="Membership" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClusters.property.membership"></a>

```csharp
public string Membership { get; set; }
```

- *Type:* string

Optional. Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#membership GoogleClouddeployTarget#membership}

---

### GoogleClouddeployTargetAssociatedEntitiesGkeClusters <a name="GoogleClouddeployTargetAssociatedEntitiesGkeClusters" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetAssociatedEntitiesGkeClusters {
    string Cluster = null,
    object InternalIp = null,
    string ProxyUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters.property.cluster">Cluster</a></code> | <code>string</code> | Optional. Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}`. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters.property.internalIp">InternalIp</a></code> | <code>object</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters.property.proxyUrl">ProxyUrl</a></code> | <code>string</code> | Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server. |

---

##### `Cluster`<sup>Optional</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

Optional. Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#cluster GoogleClouddeployTarget#cluster}

---

##### `InternalIp`<sup>Optional</sup> <a name="InternalIp" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters.property.internalIp"></a>

```csharp
public object InternalIp { get; set; }
```

- *Type:* object

Optional.

If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#internal_ip GoogleClouddeployTarget#internal_ip}

---

##### `ProxyUrl`<sup>Optional</sup> <a name="ProxyUrl" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClusters.property.proxyUrl"></a>

```csharp
public string ProxyUrl { get; set; }
```

- *Type:* string

Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#proxy_url GoogleClouddeployTarget#proxy_url}

---

### GoogleClouddeployTargetConfig <a name="GoogleClouddeployTargetConfig" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    GoogleClouddeployTargetAnthosCluster AnthosCluster = null,
    object AssociatedEntities = null,
    GoogleClouddeployTargetCustomTarget CustomTarget = null,
    System.Collections.Generic.IDictionary<string, string> DeployParameters = null,
    string Description = null,
    object ExecutionConfigs = null,
    GoogleClouddeployTargetGke Gke = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    GoogleClouddeployTargetMultiTarget MultiTarget = null,
    string Project = null,
    object RequireApproval = null,
    GoogleClouddeployTargetRun Run = null,
    GoogleClouddeployTargetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.name">Name</a></code> | <code>string</code> | Name of the `Target`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.anthosCluster">AnthosCluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a></code> | anthos_cluster block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.associatedEntities">AssociatedEntities</a></code> | <code>object</code> | associated_entities block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.customTarget">CustomTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget">GoogleClouddeployTargetCustomTarget</a></code> | custom_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.deployParameters">DeployParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. The deploy parameters to use for this target. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.description">Description</a></code> | <code>string</code> | Optional. Description of the `Target`. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.executionConfigs">ExecutionConfigs</a></code> | <code>object</code> | execution_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.gke">Gke</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a></code> | gke block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#id GoogleClouddeployTarget#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.multiTarget">MultiTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a></code> | multi_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.project">Project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.requireApproval">RequireApproval</a></code> | <code>object</code> | Optional. Whether or not the `Target` requires approval. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.run">Run</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a></code> | run block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts">GoogleClouddeployTargetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#location GoogleClouddeployTarget#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the `Target`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#name GoogleClouddeployTarget#name}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#annotations GoogleClouddeployTarget#annotations}

---

##### `AnthosCluster`<sup>Optional</sup> <a name="AnthosCluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.anthosCluster"></a>

```csharp
public GoogleClouddeployTargetAnthosCluster AnthosCluster { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a>

anthos_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#anthos_cluster GoogleClouddeployTarget#anthos_cluster}

---

##### `AssociatedEntities`<sup>Optional</sup> <a name="AssociatedEntities" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.associatedEntities"></a>

```csharp
public object AssociatedEntities { get; set; }
```

- *Type:* object

associated_entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#associated_entities GoogleClouddeployTarget#associated_entities}

---

##### `CustomTarget`<sup>Optional</sup> <a name="CustomTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.customTarget"></a>

```csharp
public GoogleClouddeployTargetCustomTarget CustomTarget { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget">GoogleClouddeployTargetCustomTarget</a>

custom_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#custom_target GoogleClouddeployTarget#custom_target}

---

##### `DeployParameters`<sup>Optional</sup> <a name="DeployParameters" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.deployParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DeployParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. The deploy parameters to use for this target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#deploy_parameters GoogleClouddeployTarget#deploy_parameters}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. Description of the `Target`. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#description GoogleClouddeployTarget#description}

---

##### `ExecutionConfigs`<sup>Optional</sup> <a name="ExecutionConfigs" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.executionConfigs"></a>

```csharp
public object ExecutionConfigs { get; set; }
```

- *Type:* object

execution_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#execution_configs GoogleClouddeployTarget#execution_configs}

---

##### `Gke`<sup>Optional</sup> <a name="Gke" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.gke"></a>

```csharp
public GoogleClouddeployTargetGke Gke { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a>

gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#gke GoogleClouddeployTarget#gke}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#id GoogleClouddeployTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional.

Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#labels GoogleClouddeployTarget#labels}

---

##### `MultiTarget`<sup>Optional</sup> <a name="MultiTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.multiTarget"></a>

```csharp
public GoogleClouddeployTargetMultiTarget MultiTarget { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a>

multi_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#multi_target GoogleClouddeployTarget#multi_target}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#project GoogleClouddeployTarget#project}

---

##### `RequireApproval`<sup>Optional</sup> <a name="RequireApproval" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.requireApproval"></a>

```csharp
public object RequireApproval { get; set; }
```

- *Type:* object

Optional. Whether or not the `Target` requires approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#require_approval GoogleClouddeployTarget#require_approval}

---

##### `Run`<sup>Optional</sup> <a name="Run" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.run"></a>

```csharp
public GoogleClouddeployTargetRun Run { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#run GoogleClouddeployTarget#run}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.timeouts"></a>

```csharp
public GoogleClouddeployTargetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts">GoogleClouddeployTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#timeouts GoogleClouddeployTarget#timeouts}

---

### GoogleClouddeployTargetCustomTarget <a name="GoogleClouddeployTargetCustomTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetCustomTarget {
    string CustomTargetType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget.property.customTargetType">CustomTargetType</a></code> | <code>string</code> | Required. The name of the CustomTargetType. Format must be `projects/{project}/locations/{location}/customTargetTypes/{custom_target_type}`. |

---

##### `CustomTargetType`<sup>Required</sup> <a name="CustomTargetType" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget.property.customTargetType"></a>

```csharp
public string CustomTargetType { get; set; }
```

- *Type:* string

Required. The name of the CustomTargetType. Format must be `projects/{project}/locations/{location}/customTargetTypes/{custom_target_type}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#custom_target_type GoogleClouddeployTarget#custom_target_type}

---

### GoogleClouddeployTargetExecutionConfigs <a name="GoogleClouddeployTargetExecutionConfigs" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetExecutionConfigs {
    string[] Usages,
    string ArtifactStorage = null,
    string ExecutionTimeout = null,
    string ServiceAccount = null,
    object Verbose = null,
    string WorkerPool = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.usages">Usages</a></code> | <code>string[]</code> | Required. Usages when this configuration should be applied. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.artifactStorage">ArtifactStorage</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.executionTimeout">ExecutionTimeout</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.verbose">Verbose</a></code> | <code>object</code> | Optional. If true, additional logging will be enabled when running builds in this execution environment. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.workerPool">WorkerPool</a></code> | <code>string</code> | Optional. |

---

##### `Usages`<sup>Required</sup> <a name="Usages" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.usages"></a>

```csharp
public string[] Usages { get; set; }
```

- *Type:* string[]

Required. Usages when this configuration should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#usages GoogleClouddeployTarget#usages}

---

##### `ArtifactStorage`<sup>Optional</sup> <a name="ArtifactStorage" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.artifactStorage"></a>

```csharp
public string ArtifactStorage { get; set; }
```

- *Type:* string

Optional.

Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#artifact_storage GoogleClouddeployTarget#artifact_storage}

---

##### `ExecutionTimeout`<sup>Optional</sup> <a name="ExecutionTimeout" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.executionTimeout"></a>

```csharp
public string ExecutionTimeout { get; set; }
```

- *Type:* string

Optional.

Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#execution_timeout GoogleClouddeployTarget#execution_timeout}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#service_account GoogleClouddeployTarget#service_account}

---

##### `Verbose`<sup>Optional</sup> <a name="Verbose" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.verbose"></a>

```csharp
public object Verbose { get; set; }
```

- *Type:* object

Optional. If true, additional logging will be enabled when running builds in this execution environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#verbose GoogleClouddeployTarget#verbose}

---

##### `WorkerPool`<sup>Optional</sup> <a name="WorkerPool" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.workerPool"></a>

```csharp
public string WorkerPool { get; set; }
```

- *Type:* string

Optional.

The resource name of the `WorkerPool`, with the format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. If this optional field is unspecified, the default Cloud Build pool will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#worker_pool GoogleClouddeployTarget#worker_pool}

---

### GoogleClouddeployTargetGke <a name="GoogleClouddeployTargetGke" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetGke {
    string Cluster = null,
    object InternalIp = null,
    string ProxyUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.cluster">Cluster</a></code> | <code>string</code> | Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.internalIp">InternalIp</a></code> | <code>object</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.proxyUrl">ProxyUrl</a></code> | <code>string</code> | Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server. |

---

##### `Cluster`<sup>Optional</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#cluster GoogleClouddeployTarget#cluster}

---

##### `InternalIp`<sup>Optional</sup> <a name="InternalIp" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.internalIp"></a>

```csharp
public object InternalIp { get; set; }
```

- *Type:* object

Optional.

If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#internal_ip GoogleClouddeployTarget#internal_ip}

---

##### `ProxyUrl`<sup>Optional</sup> <a name="ProxyUrl" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.proxyUrl"></a>

```csharp
public string ProxyUrl { get; set; }
```

- *Type:* string

Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#proxy_url GoogleClouddeployTarget#proxy_url}

---

### GoogleClouddeployTargetMultiTarget <a name="GoogleClouddeployTargetMultiTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetMultiTarget {
    string[] TargetIds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget.property.targetIds">TargetIds</a></code> | <code>string[]</code> | Required. The target_ids of this multiTarget. |

---

##### `TargetIds`<sup>Required</sup> <a name="TargetIds" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget.property.targetIds"></a>

```csharp
public string[] TargetIds { get; set; }
```

- *Type:* string[]

Required. The target_ids of this multiTarget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#target_ids GoogleClouddeployTarget#target_ids}

---

### GoogleClouddeployTargetRun <a name="GoogleClouddeployTargetRun" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetRun {
    string Location
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun.property.location">Location</a></code> | <code>string</code> | Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#location GoogleClouddeployTarget#location}

---

### GoogleClouddeployTargetTimeouts <a name="GoogleClouddeployTargetTimeouts" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#create GoogleClouddeployTarget#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#delete GoogleClouddeployTarget#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#update GoogleClouddeployTarget#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#create GoogleClouddeployTarget#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#delete GoogleClouddeployTarget#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_clouddeploy_target#update GoogleClouddeployTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleClouddeployTargetAnthosClusterOutputReference <a name="GoogleClouddeployTargetAnthosClusterOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetAnthosClusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.resetMembership">ResetMembership</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMembership` <a name="ResetMembership" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.resetMembership"></a>

```csharp
private void ResetMembership()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.membershipInput">MembershipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.membership">Membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MembershipInput`<sup>Optional</sup> <a name="MembershipInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.membershipInput"></a>

```csharp
public string MembershipInput { get; }
```

- *Type:* string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.membership"></a>

```csharp
public string Membership { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployTargetAnthosCluster InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a>

---


### GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList <a name="GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.get"></a>

```csharp
private GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference <a name="GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.resetMembership">ResetMembership</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMembership` <a name="ResetMembership" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.resetMembership"></a>

```csharp
private void ResetMembership()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.membershipInput">MembershipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.membership">Membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MembershipInput`<sup>Optional</sup> <a name="MembershipInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.membershipInput"></a>

```csharp
public string MembershipInput { get; }
```

- *Type:* string

---

##### `Membership`<sup>Required</sup> <a name="Membership" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.membership"></a>

```csharp
public string Membership { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleClouddeployTargetAssociatedEntitiesGkeClustersList <a name="GoogleClouddeployTargetAssociatedEntitiesGkeClustersList" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetAssociatedEntitiesGkeClustersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.get"></a>

```csharp
private GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference <a name="GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetCluster">ResetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetInternalIp">ResetInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetProxyUrl">ResetProxyUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCluster` <a name="ResetCluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetCluster"></a>

```csharp
private void ResetCluster()
```

##### `ResetInternalIp` <a name="ResetInternalIp" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetInternalIp"></a>

```csharp
private void ResetInternalIp()
```

##### `ResetProxyUrl` <a name="ResetProxyUrl" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.resetProxyUrl"></a>

```csharp
private void ResetProxyUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalIpInput">InternalIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.proxyUrlInput">ProxyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalIp">InternalIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.proxyUrl">ProxyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `InternalIpInput`<sup>Optional</sup> <a name="InternalIpInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalIpInput"></a>

```csharp
public object InternalIpInput { get; }
```

- *Type:* object

---

##### `ProxyUrlInput`<sup>Optional</sup> <a name="ProxyUrlInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.proxyUrlInput"></a>

```csharp
public string ProxyUrlInput { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `InternalIp`<sup>Required</sup> <a name="InternalIp" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalIp"></a>

```csharp
public object InternalIp { get; }
```

- *Type:* object

---

##### `ProxyUrl`<sup>Required</sup> <a name="ProxyUrl" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.proxyUrl"></a>

```csharp
public string ProxyUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleClouddeployTargetAssociatedEntitiesList <a name="GoogleClouddeployTargetAssociatedEntitiesList" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetAssociatedEntitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.get"></a>

```csharp
private GoogleClouddeployTargetAssociatedEntitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleClouddeployTargetAssociatedEntitiesOutputReference <a name="GoogleClouddeployTargetAssociatedEntitiesOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetAssociatedEntitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.putAnthosClusters">PutAnthosClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.putGkeClusters">PutGkeClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.resetAnthosClusters">ResetAnthosClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.resetGkeClusters">ResetGkeClusters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnthosClusters` <a name="PutAnthosClusters" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.putAnthosClusters"></a>

```csharp
private void PutAnthosClusters(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.putAnthosClusters.parameter.value"></a>

- *Type:* object

---

##### `PutGkeClusters` <a name="PutGkeClusters" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.putGkeClusters"></a>

```csharp
private void PutGkeClusters(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.putGkeClusters.parameter.value"></a>

- *Type:* object

---

##### `ResetAnthosClusters` <a name="ResetAnthosClusters" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.resetAnthosClusters"></a>

```csharp
private void ResetAnthosClusters()
```

##### `ResetGkeClusters` <a name="ResetGkeClusters" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.resetGkeClusters"></a>

```csharp
private void ResetGkeClusters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.anthosClusters">AnthosClusters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList">GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.gkeClusters">GkeClusters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList">GoogleClouddeployTargetAssociatedEntitiesGkeClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.anthosClustersInput">AnthosClustersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.entityIdInput">EntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.gkeClustersInput">GkeClustersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnthosClusters`<sup>Required</sup> <a name="AnthosClusters" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.anthosClusters"></a>

```csharp
public GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList AnthosClusters { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList">GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList</a>

---

##### `GkeClusters`<sup>Required</sup> <a name="GkeClusters" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.gkeClusters"></a>

```csharp
public GoogleClouddeployTargetAssociatedEntitiesGkeClustersList GkeClusters { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesGkeClustersList">GoogleClouddeployTargetAssociatedEntitiesGkeClustersList</a>

---

##### `AnthosClustersInput`<sup>Optional</sup> <a name="AnthosClustersInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.anthosClustersInput"></a>

```csharp
public object AnthosClustersInput { get; }
```

- *Type:* object

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.entityIdInput"></a>

```csharp
public string EntityIdInput { get; }
```

- *Type:* string

---

##### `GkeClustersInput`<sup>Optional</sup> <a name="GkeClustersInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.gkeClustersInput"></a>

```csharp
public object GkeClustersInput { get; }
```

- *Type:* object

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAssociatedEntitiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleClouddeployTargetCustomTargetOutputReference <a name="GoogleClouddeployTargetCustomTargetOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetCustomTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.customTargetTypeInput">CustomTargetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.customTargetType">CustomTargetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget">GoogleClouddeployTargetCustomTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomTargetTypeInput`<sup>Optional</sup> <a name="CustomTargetTypeInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.customTargetTypeInput"></a>

```csharp
public string CustomTargetTypeInput { get; }
```

- *Type:* string

---

##### `CustomTargetType`<sup>Required</sup> <a name="CustomTargetType" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.customTargetType"></a>

```csharp
public string CustomTargetType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTargetOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployTargetCustomTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetCustomTarget">GoogleClouddeployTargetCustomTarget</a>

---


### GoogleClouddeployTargetExecutionConfigsList <a name="GoogleClouddeployTargetExecutionConfigsList" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetExecutionConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.get"></a>

```csharp
private GoogleClouddeployTargetExecutionConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleClouddeployTargetExecutionConfigsOutputReference <a name="GoogleClouddeployTargetExecutionConfigsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetExecutionConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetArtifactStorage">ResetArtifactStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetExecutionTimeout">ResetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetVerbose">ResetVerbose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetWorkerPool">ResetWorkerPool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArtifactStorage` <a name="ResetArtifactStorage" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetArtifactStorage"></a>

```csharp
private void ResetArtifactStorage()
```

##### `ResetExecutionTimeout` <a name="ResetExecutionTimeout" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetExecutionTimeout"></a>

```csharp
private void ResetExecutionTimeout()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetVerbose` <a name="ResetVerbose" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetVerbose"></a>

```csharp
private void ResetVerbose()
```

##### `ResetWorkerPool` <a name="ResetWorkerPool" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetWorkerPool"></a>

```csharp
private void ResetWorkerPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.artifactStorageInput">ArtifactStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.executionTimeoutInput">ExecutionTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.usagesInput">UsagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.verboseInput">VerboseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.workerPoolInput">WorkerPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.artifactStorage">ArtifactStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.executionTimeout">ExecutionTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.usages">Usages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.verbose">Verbose</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.workerPool">WorkerPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArtifactStorageInput`<sup>Optional</sup> <a name="ArtifactStorageInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.artifactStorageInput"></a>

```csharp
public string ArtifactStorageInput { get; }
```

- *Type:* string

---

##### `ExecutionTimeoutInput`<sup>Optional</sup> <a name="ExecutionTimeoutInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.executionTimeoutInput"></a>

```csharp
public string ExecutionTimeoutInput { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `UsagesInput`<sup>Optional</sup> <a name="UsagesInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.usagesInput"></a>

```csharp
public string[] UsagesInput { get; }
```

- *Type:* string[]

---

##### `VerboseInput`<sup>Optional</sup> <a name="VerboseInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.verboseInput"></a>

```csharp
public object VerboseInput { get; }
```

- *Type:* object

---

##### `WorkerPoolInput`<sup>Optional</sup> <a name="WorkerPoolInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.workerPoolInput"></a>

```csharp
public string WorkerPoolInput { get; }
```

- *Type:* string

---

##### `ArtifactStorage`<sup>Required</sup> <a name="ArtifactStorage" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.artifactStorage"></a>

```csharp
public string ArtifactStorage { get; }
```

- *Type:* string

---

##### `ExecutionTimeout`<sup>Required</sup> <a name="ExecutionTimeout" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.executionTimeout"></a>

```csharp
public string ExecutionTimeout { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `Usages`<sup>Required</sup> <a name="Usages" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.usages"></a>

```csharp
public string[] Usages { get; }
```

- *Type:* string[]

---

##### `Verbose`<sup>Required</sup> <a name="Verbose" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.verbose"></a>

```csharp
public object Verbose { get; }
```

- *Type:* object

---

##### `WorkerPool`<sup>Required</sup> <a name="WorkerPool" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.workerPool"></a>

```csharp
public string WorkerPool { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleClouddeployTargetGkeOutputReference <a name="GoogleClouddeployTargetGkeOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetGkeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetCluster">ResetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetInternalIp">ResetInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetProxyUrl">ResetProxyUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCluster` <a name="ResetCluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetCluster"></a>

```csharp
private void ResetCluster()
```

##### `ResetInternalIp` <a name="ResetInternalIp" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetInternalIp"></a>

```csharp
private void ResetInternalIp()
```

##### `ResetProxyUrl` <a name="ResetProxyUrl" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetProxyUrl"></a>

```csharp
private void ResetProxyUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalIpInput">InternalIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.proxyUrlInput">ProxyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalIp">InternalIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.proxyUrl">ProxyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `InternalIpInput`<sup>Optional</sup> <a name="InternalIpInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalIpInput"></a>

```csharp
public object InternalIpInput { get; }
```

- *Type:* object

---

##### `ProxyUrlInput`<sup>Optional</sup> <a name="ProxyUrlInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.proxyUrlInput"></a>

```csharp
public string ProxyUrlInput { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `InternalIp`<sup>Required</sup> <a name="InternalIp" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalIp"></a>

```csharp
public object InternalIp { get; }
```

- *Type:* object

---

##### `ProxyUrl`<sup>Required</sup> <a name="ProxyUrl" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.proxyUrl"></a>

```csharp
public string ProxyUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployTargetGke InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a>

---


### GoogleClouddeployTargetMultiTargetOutputReference <a name="GoogleClouddeployTargetMultiTargetOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetMultiTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.targetIdsInput">TargetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.targetIds">TargetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetIdsInput`<sup>Optional</sup> <a name="TargetIdsInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.targetIdsInput"></a>

```csharp
public string[] TargetIdsInput { get; }
```

- *Type:* string[]

---

##### `TargetIds`<sup>Required</sup> <a name="TargetIds" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.targetIds"></a>

```csharp
public string[] TargetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployTargetMultiTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a>

---


### GoogleClouddeployTargetRunOutputReference <a name="GoogleClouddeployTargetRunOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetRunOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.internalValue"></a>

```csharp
public GoogleClouddeployTargetRun InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a>

---


### GoogleClouddeployTargetTimeoutsOutputReference <a name="GoogleClouddeployTargetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleClouddeployTargetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



