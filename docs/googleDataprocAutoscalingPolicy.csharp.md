# `googleDataprocAutoscalingPolicy` Submodule <a name="`googleDataprocAutoscalingPolicy` Submodule" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocAutoscalingPolicy <a name="GoogleDataprocAutoscalingPolicy" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy google_dataproc_autoscaling_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocAutoscalingPolicy(Construct Scope, string Id, GoogleDataprocAutoscalingPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig">GoogleDataprocAutoscalingPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig">GoogleDataprocAutoscalingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putBasicAlgorithm">PutBasicAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putSecondaryWorkerConfig">PutSecondaryWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putWorkerConfig">PutWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetBasicAlgorithm">ResetBasicAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetSecondaryWorkerConfig">ResetSecondaryWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetWorkerConfig">ResetWorkerConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBasicAlgorithm` <a name="PutBasicAlgorithm" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putBasicAlgorithm"></a>

```csharp
private void PutBasicAlgorithm(GoogleDataprocAutoscalingPolicyBasicAlgorithm Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putBasicAlgorithm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a>

---

##### `PutSecondaryWorkerConfig` <a name="PutSecondaryWorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putSecondaryWorkerConfig"></a>

```csharp
private void PutSecondaryWorkerConfig(GoogleDataprocAutoscalingPolicySecondaryWorkerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putSecondaryWorkerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDataprocAutoscalingPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts">GoogleDataprocAutoscalingPolicyTimeouts</a>

---

##### `PutWorkerConfig` <a name="PutWorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putWorkerConfig"></a>

```csharp
private void PutWorkerConfig(GoogleDataprocAutoscalingPolicyWorkerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.putWorkerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a>

---

##### `ResetBasicAlgorithm` <a name="ResetBasicAlgorithm" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetBasicAlgorithm"></a>

```csharp
private void ResetBasicAlgorithm()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSecondaryWorkerConfig` <a name="ResetSecondaryWorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetSecondaryWorkerConfig"></a>

```csharp
private void ResetSecondaryWorkerConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkerConfig` <a name="ResetWorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.resetWorkerConfig"></a>

```csharp
private void ResetWorkerConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataprocAutoscalingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataprocAutoscalingPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataprocAutoscalingPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataprocAutoscalingPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataprocAutoscalingPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDataprocAutoscalingPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataprocAutoscalingPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataprocAutoscalingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocAutoscalingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.basicAlgorithm">BasicAlgorithm</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference">GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.secondaryWorkerConfig">SecondaryWorkerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference">GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference">GoogleDataprocAutoscalingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.workerConfig">WorkerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference">GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.basicAlgorithmInput">BasicAlgorithmInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.secondaryWorkerConfigInput">SecondaryWorkerConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.workerConfigInput">WorkerConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BasicAlgorithm`<sup>Required</sup> <a name="BasicAlgorithm" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.basicAlgorithm"></a>

```csharp
public GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference BasicAlgorithm { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference">GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecondaryWorkerConfig`<sup>Required</sup> <a name="SecondaryWorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.secondaryWorkerConfig"></a>

```csharp
public GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference SecondaryWorkerConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference">GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.timeouts"></a>

```csharp
public GoogleDataprocAutoscalingPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference">GoogleDataprocAutoscalingPolicyTimeoutsOutputReference</a>

---

##### `WorkerConfig`<sup>Required</sup> <a name="WorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.workerConfig"></a>

```csharp
public GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference WorkerConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference">GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference</a>

---

##### `BasicAlgorithmInput`<sup>Optional</sup> <a name="BasicAlgorithmInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.basicAlgorithmInput"></a>

```csharp
public GoogleDataprocAutoscalingPolicyBasicAlgorithm BasicAlgorithmInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SecondaryWorkerConfigInput`<sup>Optional</sup> <a name="SecondaryWorkerConfigInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.secondaryWorkerConfigInput"></a>

```csharp
public GoogleDataprocAutoscalingPolicySecondaryWorkerConfig SecondaryWorkerConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkerConfigInput`<sup>Optional</sup> <a name="WorkerConfigInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.workerConfigInput"></a>

```csharp
public GoogleDataprocAutoscalingPolicyWorkerConfig WorkerConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocAutoscalingPolicyBasicAlgorithm <a name="GoogleDataprocAutoscalingPolicyBasicAlgorithm" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocAutoscalingPolicyBasicAlgorithm {
    GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig YarnConfig,
    string CooldownPeriod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm.property.yarnConfig">YarnConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a></code> | yarn_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm.property.cooldownPeriod">CooldownPeriod</a></code> | <code>string</code> | Duration between scaling events. A scaling period starts after the update operation from the previous event has completed. |

---

##### `YarnConfig`<sup>Required</sup> <a name="YarnConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm.property.yarnConfig"></a>

```csharp
public GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig YarnConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

yarn_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#yarn_config GoogleDataprocAutoscalingPolicy#yarn_config}

---

##### `CooldownPeriod`<sup>Optional</sup> <a name="CooldownPeriod" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm.property.cooldownPeriod"></a>

```csharp
public string CooldownPeriod { get; set; }
```

- *Type:* string

Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.

Bounds: [2m, 1d]. Default: 2m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#cooldown_period GoogleDataprocAutoscalingPolicy#cooldown_period}

---

### GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig <a name="GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig {
    string GracefulDecommissionTimeout,
    double ScaleDownFactor,
    double ScaleUpFactor,
    double ScaleDownMinWorkerFraction = null,
    double ScaleUpMinWorkerFraction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.gracefulDecommissionTimeout">GracefulDecommissionTimeout</a></code> | <code>string</code> | Timeout for YARN graceful decommissioning of Node Managers. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownFactor">ScaleDownFactor</a></code> | <code>double</code> | Fraction of average pending memory in the last cooldown period for which to remove workers. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpFactor">ScaleUpFactor</a></code> | <code>double</code> | Fraction of average pending memory in the last cooldown period for which to add workers. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownMinWorkerFraction">ScaleDownMinWorkerFraction</a></code> | <code>double</code> | Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpMinWorkerFraction">ScaleUpMinWorkerFraction</a></code> | <code>double</code> | Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. |

---

##### `GracefulDecommissionTimeout`<sup>Required</sup> <a name="GracefulDecommissionTimeout" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.gracefulDecommissionTimeout"></a>

```csharp
public string GracefulDecommissionTimeout { get; set; }
```

- *Type:* string

Timeout for YARN graceful decommissioning of Node Managers.

Specifies the
duration to wait for jobs to complete before forcefully removing workers
(and potentially interrupting jobs). Only applicable to downscaling operations.

Bounds: [0s, 1d].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#graceful_decommission_timeout GoogleDataprocAutoscalingPolicy#graceful_decommission_timeout}

---

##### `ScaleDownFactor`<sup>Required</sup> <a name="ScaleDownFactor" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownFactor"></a>

```csharp
public double ScaleDownFactor { get; set; }
```

- *Type:* double

Fraction of average pending memory in the last cooldown period for which to remove workers.

A scale-down factor of 1 will result in scaling down so that there
is no available memory remaining after the update (more aggressive scaling).
A scale-down factor of 0 disables removing workers, which can be beneficial for
autoscaling a single job.

Bounds: [0.0, 1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#scale_down_factor GoogleDataprocAutoscalingPolicy#scale_down_factor}

---

##### `ScaleUpFactor`<sup>Required</sup> <a name="ScaleUpFactor" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpFactor"></a>

```csharp
public double ScaleUpFactor { get; set; }
```

- *Type:* double

Fraction of average pending memory in the last cooldown period for which to add workers.

A scale-up factor of 1.0 will result in scaling up so that there
is no pending memory remaining after the update (more aggressive scaling).
A scale-up factor closer to 0 will result in a smaller magnitude of scaling up
(less aggressive scaling).

Bounds: [0.0, 1.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#scale_up_factor GoogleDataprocAutoscalingPolicy#scale_up_factor}

---

##### `ScaleDownMinWorkerFraction`<sup>Optional</sup> <a name="ScaleDownMinWorkerFraction" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownMinWorkerFraction"></a>

```csharp
public double ScaleDownMinWorkerFraction { get; set; }
```

- *Type:* double

Minimum scale-down threshold as a fraction of total cluster size before scaling occurs.

For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must
recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0
means the autoscaler will scale down on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#scale_down_min_worker_fraction GoogleDataprocAutoscalingPolicy#scale_down_min_worker_fraction}

---

##### `ScaleUpMinWorkerFraction`<sup>Optional</sup> <a name="ScaleUpMinWorkerFraction" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpMinWorkerFraction"></a>

```csharp
public double ScaleUpMinWorkerFraction { get; set; }
```

- *Type:* double

Minimum scale-up threshold as a fraction of total cluster size before scaling occurs.

For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler
must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of
0 means the autoscaler will scale up on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#scale_up_min_worker_fraction GoogleDataprocAutoscalingPolicy#scale_up_min_worker_fraction}

---

### GoogleDataprocAutoscalingPolicyConfig <a name="GoogleDataprocAutoscalingPolicyConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocAutoscalingPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PolicyId,
    GoogleDataprocAutoscalingPolicyBasicAlgorithm BasicAlgorithm = null,
    string Id = null,
    string Location = null,
    string Project = null,
    GoogleDataprocAutoscalingPolicySecondaryWorkerConfig SecondaryWorkerConfig = null,
    GoogleDataprocAutoscalingPolicyTimeouts Timeouts = null,
    GoogleDataprocAutoscalingPolicyWorkerConfig WorkerConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.policyId">PolicyId</a></code> | <code>string</code> | The policy id. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.basicAlgorithm">BasicAlgorithm</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a></code> | basic_algorithm block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#id GoogleDataprocAutoscalingPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.location">Location</a></code> | <code>string</code> | The  location where the autoscaling policy should reside. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#project GoogleDataprocAutoscalingPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.secondaryWorkerConfig">SecondaryWorkerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a></code> | secondary_worker_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts">GoogleDataprocAutoscalingPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.workerConfig">WorkerConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a></code> | worker_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

The policy id.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 50 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#policy_id GoogleDataprocAutoscalingPolicy#policy_id}

---

##### `BasicAlgorithm`<sup>Optional</sup> <a name="BasicAlgorithm" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.basicAlgorithm"></a>

```csharp
public GoogleDataprocAutoscalingPolicyBasicAlgorithm BasicAlgorithm { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a>

basic_algorithm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#basic_algorithm GoogleDataprocAutoscalingPolicy#basic_algorithm}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#id GoogleDataprocAutoscalingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The  location where the autoscaling policy should reside. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#location GoogleDataprocAutoscalingPolicy#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#project GoogleDataprocAutoscalingPolicy#project}.

---

##### `SecondaryWorkerConfig`<sup>Optional</sup> <a name="SecondaryWorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.secondaryWorkerConfig"></a>

```csharp
public GoogleDataprocAutoscalingPolicySecondaryWorkerConfig SecondaryWorkerConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a>

secondary_worker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#secondary_worker_config GoogleDataprocAutoscalingPolicy#secondary_worker_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.timeouts"></a>

```csharp
public GoogleDataprocAutoscalingPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts">GoogleDataprocAutoscalingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#timeouts GoogleDataprocAutoscalingPolicy#timeouts}

---

##### `WorkerConfig`<sup>Optional</sup> <a name="WorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyConfig.property.workerConfig"></a>

```csharp
public GoogleDataprocAutoscalingPolicyWorkerConfig WorkerConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a>

worker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#worker_config GoogleDataprocAutoscalingPolicy#worker_config}

---

### GoogleDataprocAutoscalingPolicySecondaryWorkerConfig <a name="GoogleDataprocAutoscalingPolicySecondaryWorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocAutoscalingPolicySecondaryWorkerConfig {
    double MaxInstances = null,
    double MinInstances = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig.property.maxInstances">MaxInstances</a></code> | <code>double</code> | Maximum number of instances for this group. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig.property.minInstances">MinInstances</a></code> | <code>double</code> | Minimum number of instances for this group. Bounds: [0, maxInstances]. Defaults to 0. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig.property.weight">Weight</a></code> | <code>double</code> | Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group. |

---

##### `MaxInstances`<sup>Optional</sup> <a name="MaxInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig.property.maxInstances"></a>

```csharp
public double MaxInstances { get; set; }
```

- *Type:* double

Maximum number of instances for this group.

Note that by default, clusters will not use
secondary workers. Required for secondary workers if the minimum secondary instances is set.
Bounds: [minInstances, ). Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#max_instances GoogleDataprocAutoscalingPolicy#max_instances}

---

##### `MinInstances`<sup>Optional</sup> <a name="MinInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig.property.minInstances"></a>

```csharp
public double MinInstances { get; set; }
```

- *Type:* double

Minimum number of instances for this group. Bounds: [0, maxInstances]. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#min_instances GoogleDataprocAutoscalingPolicy#min_instances}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group.

For example, if primary workers have weight 2,
and secondary workers have weight 1, the cluster will have approximately 2 primary workers
for each secondary worker.

The cluster may not reach the specified balance if constrained by min/max bounds or other
autoscaling settings. For example, if maxInstances for secondary workers is 0, then only
primary workers will be added. The cluster can also be out of balance when created.

If weight is not set on any instance group, the cluster will default to equal weight for
all groups: the cluster will attempt to maintain an equal number of workers in each group
within the configured size bounds for each group. If weight is set for one group only,
the cluster will default to zero weight on the unset group. For example if weight is set
only on primary workers, the cluster will use primary workers only and no secondary workers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#weight GoogleDataprocAutoscalingPolicy#weight}

---

### GoogleDataprocAutoscalingPolicyTimeouts <a name="GoogleDataprocAutoscalingPolicyTimeouts" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocAutoscalingPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#create GoogleDataprocAutoscalingPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#delete GoogleDataprocAutoscalingPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#update GoogleDataprocAutoscalingPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#create GoogleDataprocAutoscalingPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#delete GoogleDataprocAutoscalingPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#update GoogleDataprocAutoscalingPolicy#update}.

---

### GoogleDataprocAutoscalingPolicyWorkerConfig <a name="GoogleDataprocAutoscalingPolicyWorkerConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocAutoscalingPolicyWorkerConfig {
    double MaxInstances,
    double MinInstances = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig.property.maxInstances">MaxInstances</a></code> | <code>double</code> | Maximum number of instances for this group. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig.property.minInstances">MinInstances</a></code> | <code>double</code> | Minimum number of instances for this group. Bounds: [2, maxInstances]. Defaults to 2. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig.property.weight">Weight</a></code> | <code>double</code> | Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group. |

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig.property.maxInstances"></a>

```csharp
public double MaxInstances { get; set; }
```

- *Type:* double

Maximum number of instances for this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#max_instances GoogleDataprocAutoscalingPolicy#max_instances}

---

##### `MinInstances`<sup>Optional</sup> <a name="MinInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig.property.minInstances"></a>

```csharp
public double MinInstances { get; set; }
```

- *Type:* double

Minimum number of instances for this group. Bounds: [2, maxInstances]. Defaults to 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#min_instances GoogleDataprocAutoscalingPolicy#min_instances}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group.

For example, if primary workers have weight 2,
and secondary workers have weight 1, the cluster will have approximately 2 primary workers
for each secondary worker.

The cluster may not reach the specified balance if constrained by min/max bounds or other
autoscaling settings. For example, if maxInstances for secondary workers is 0, then only
primary workers will be added. The cluster can also be out of balance when created.

If weight is not set on any instance group, the cluster will default to equal weight for
all groups: the cluster will attempt to maintain an equal number of workers in each group
within the configured size bounds for each group. If weight is set for one group only,
the cluster will default to zero weight on the unset group. For example if weight is set
only on primary workers, the cluster will use primary workers only and no secondary workers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_autoscaling_policy#weight GoogleDataprocAutoscalingPolicy#weight}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference <a name="GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig">PutYarnConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.resetCooldownPeriod">ResetCooldownPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutYarnConfig` <a name="PutYarnConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig"></a>

```csharp
private void PutYarnConfig(GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

---

##### `ResetCooldownPeriod` <a name="ResetCooldownPeriod" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.resetCooldownPeriod"></a>

```csharp
private void ResetCooldownPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfig">YarnConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriodInput">CooldownPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfigInput">YarnConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriod">CooldownPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `YarnConfig`<sup>Required</sup> <a name="YarnConfig" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfig"></a>

```csharp
public GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference YarnConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference</a>

---

##### `CooldownPeriodInput`<sup>Optional</sup> <a name="CooldownPeriodInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriodInput"></a>

```csharp
public string CooldownPeriodInput { get; }
```

- *Type:* string

---

##### `YarnConfigInput`<sup>Optional</sup> <a name="YarnConfigInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfigInput"></a>

```csharp
public GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig YarnConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

---

##### `CooldownPeriod`<sup>Required</sup> <a name="CooldownPeriod" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriod"></a>

```csharp
public string CooldownPeriod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.internalValue"></a>

```csharp
public GoogleDataprocAutoscalingPolicyBasicAlgorithm InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithm">GoogleDataprocAutoscalingPolicyBasicAlgorithm</a>

---


### GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference <a name="GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleDownMinWorkerFraction">ResetScaleDownMinWorkerFraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleUpMinWorkerFraction">ResetScaleUpMinWorkerFraction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScaleDownMinWorkerFraction` <a name="ResetScaleDownMinWorkerFraction" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleDownMinWorkerFraction"></a>

```csharp
private void ResetScaleDownMinWorkerFraction()
```

##### `ResetScaleUpMinWorkerFraction` <a name="ResetScaleUpMinWorkerFraction" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleUpMinWorkerFraction"></a>

```csharp
private void ResetScaleUpMinWorkerFraction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeoutInput">GracefulDecommissionTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactorInput">ScaleDownFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFractionInput">ScaleDownMinWorkerFractionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactorInput">ScaleUpFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFractionInput">ScaleUpMinWorkerFractionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeout">GracefulDecommissionTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactor">ScaleDownFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFraction">ScaleDownMinWorkerFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactor">ScaleUpFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFraction">ScaleUpMinWorkerFraction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GracefulDecommissionTimeoutInput`<sup>Optional</sup> <a name="GracefulDecommissionTimeoutInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeoutInput"></a>

```csharp
public string GracefulDecommissionTimeoutInput { get; }
```

- *Type:* string

---

##### `ScaleDownFactorInput`<sup>Optional</sup> <a name="ScaleDownFactorInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactorInput"></a>

```csharp
public double ScaleDownFactorInput { get; }
```

- *Type:* double

---

##### `ScaleDownMinWorkerFractionInput`<sup>Optional</sup> <a name="ScaleDownMinWorkerFractionInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFractionInput"></a>

```csharp
public double ScaleDownMinWorkerFractionInput { get; }
```

- *Type:* double

---

##### `ScaleUpFactorInput`<sup>Optional</sup> <a name="ScaleUpFactorInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactorInput"></a>

```csharp
public double ScaleUpFactorInput { get; }
```

- *Type:* double

---

##### `ScaleUpMinWorkerFractionInput`<sup>Optional</sup> <a name="ScaleUpMinWorkerFractionInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFractionInput"></a>

```csharp
public double ScaleUpMinWorkerFractionInput { get; }
```

- *Type:* double

---

##### `GracefulDecommissionTimeout`<sup>Required</sup> <a name="GracefulDecommissionTimeout" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeout"></a>

```csharp
public string GracefulDecommissionTimeout { get; }
```

- *Type:* string

---

##### `ScaleDownFactor`<sup>Required</sup> <a name="ScaleDownFactor" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactor"></a>

```csharp
public double ScaleDownFactor { get; }
```

- *Type:* double

---

##### `ScaleDownMinWorkerFraction`<sup>Required</sup> <a name="ScaleDownMinWorkerFraction" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFraction"></a>

```csharp
public double ScaleDownMinWorkerFraction { get; }
```

- *Type:* double

---

##### `ScaleUpFactor`<sup>Required</sup> <a name="ScaleUpFactor" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactor"></a>

```csharp
public double ScaleUpFactor { get; }
```

- *Type:* double

---

##### `ScaleUpMinWorkerFraction`<sup>Required</sup> <a name="ScaleUpMinWorkerFraction" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFraction"></a>

```csharp
public double ScaleUpMinWorkerFraction { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig">GoogleDataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

---


### GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference <a name="GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMaxInstances">ResetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMinInstances">ResetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInstances` <a name="ResetMaxInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMaxInstances"></a>

```csharp
private void ResetMaxInstances()
```

##### `ResetMinInstances` <a name="ResetMinInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMinInstances"></a>

```csharp
private void ResetMinInstances()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstancesInput">MaxInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstancesInput">MinInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstances">MaxInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstances">MinInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInstancesInput`<sup>Optional</sup> <a name="MaxInstancesInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstancesInput"></a>

```csharp
public double MaxInstancesInput { get; }
```

- *Type:* double

---

##### `MinInstancesInput`<sup>Optional</sup> <a name="MinInstancesInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstancesInput"></a>

```csharp
public double MinInstancesInput { get; }
```

- *Type:* double

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstances"></a>

```csharp
public double MaxInstances { get; }
```

- *Type:* double

---

##### `MinInstances`<sup>Required</sup> <a name="MinInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstances"></a>

```csharp
public double MinInstances { get; }
```

- *Type:* double

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDataprocAutoscalingPolicySecondaryWorkerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicySecondaryWorkerConfig">GoogleDataprocAutoscalingPolicySecondaryWorkerConfig</a>

---


### GoogleDataprocAutoscalingPolicyTimeoutsOutputReference <a name="GoogleDataprocAutoscalingPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocAutoscalingPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference <a name="GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.resetMinInstances">ResetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinInstances` <a name="ResetMinInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.resetMinInstances"></a>

```csharp
private void ResetMinInstances()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstancesInput">MaxInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstancesInput">MinInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstances">MaxInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstances">MinInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInstancesInput`<sup>Optional</sup> <a name="MaxInstancesInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstancesInput"></a>

```csharp
public double MaxInstancesInput { get; }
```

- *Type:* double

---

##### `MinInstancesInput`<sup>Optional</sup> <a name="MinInstancesInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstancesInput"></a>

```csharp
public double MinInstancesInput { get; }
```

- *Type:* double

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstances"></a>

```csharp
public double MaxInstances { get; }
```

- *Type:* double

---

##### `MinInstances`<sup>Required</sup> <a name="MinInstances" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstances"></a>

```csharp
public double MinInstances { get; }
```

- *Type:* double

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDataprocAutoscalingPolicyWorkerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocAutoscalingPolicy.GoogleDataprocAutoscalingPolicyWorkerConfig">GoogleDataprocAutoscalingPolicyWorkerConfig</a>

---



