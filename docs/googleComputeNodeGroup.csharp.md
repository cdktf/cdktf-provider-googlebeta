# `googleComputeNodeGroup` Submodule <a name="`googleComputeNodeGroup` Submodule" id="@cdktf/provider-google-beta.googleComputeNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNodeGroup <a name="GoogleComputeNodeGroup" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group google_compute_node_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNodeGroup(Construct Scope, string Id, GoogleComputeNodeGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig">GoogleComputeNodeGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig">GoogleComputeNodeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putAutoscalingPolicy">PutAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putShareSettings">PutShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetAutoscalingPolicy">ResetAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetInitialSize">ResetInitialSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetMaintenanceInterval">ResetMaintenanceInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetMaintenancePolicy">ResetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetShareSettings">ResetShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoscalingPolicy` <a name="PutAutoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putAutoscalingPolicy"></a>

```csharp
private void PutAutoscalingPolicy(GoogleComputeNodeGroupAutoscalingPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putAutoscalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy">GoogleComputeNodeGroupAutoscalingPolicy</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putMaintenanceWindow"></a>

```csharp
private void PutMaintenanceWindow(GoogleComputeNodeGroupMaintenanceWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow">GoogleComputeNodeGroupMaintenanceWindow</a>

---

##### `PutShareSettings` <a name="PutShareSettings" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putShareSettings"></a>

```csharp
private void PutShareSettings(GoogleComputeNodeGroupShareSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putShareSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings">GoogleComputeNodeGroupShareSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeNodeGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts">GoogleComputeNodeGroupTimeouts</a>

---

##### `ResetAutoscalingPolicy` <a name="ResetAutoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetAutoscalingPolicy"></a>

```csharp
private void ResetAutoscalingPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitialSize` <a name="ResetInitialSize" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetInitialSize"></a>

```csharp
private void ResetInitialSize()
```

##### `ResetMaintenanceInterval` <a name="ResetMaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetMaintenanceInterval"></a>

```csharp
private void ResetMaintenanceInterval()
```

##### `ResetMaintenancePolicy` <a name="ResetMaintenancePolicy" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetMaintenancePolicy"></a>

```csharp
private void ResetMaintenancePolicy()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetShareSettings` <a name="ResetShareSettings" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetShareSettings"></a>

```csharp
private void ResetShareSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeNodeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeNodeGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeNodeGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeNodeGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeNodeGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeNodeGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeNodeGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeNodeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeNodeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.autoscalingPolicy">AutoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference">GoogleComputeNodeGroupAutoscalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference">GoogleComputeNodeGroupMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.shareSettings">ShareSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference">GoogleComputeNodeGroupShareSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference">GoogleComputeNodeGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.autoscalingPolicyInput">AutoscalingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy">GoogleComputeNodeGroupAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.initialSizeInput">InitialSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenanceIntervalInput">MaintenanceIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenancePolicyInput">MaintenancePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow">GoogleComputeNodeGroupMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.nodeTemplateInput">NodeTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.shareSettingsInput">ShareSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings">GoogleComputeNodeGroupShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.initialSize">InitialSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenanceInterval">MaintenanceInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenancePolicy">MaintenancePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.nodeTemplate">NodeTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutoscalingPolicy`<sup>Required</sup> <a name="AutoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.autoscalingPolicy"></a>

```csharp
public GoogleComputeNodeGroupAutoscalingPolicyOutputReference AutoscalingPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference">GoogleComputeNodeGroupAutoscalingPolicyOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenanceWindow"></a>

```csharp
public GoogleComputeNodeGroupMaintenanceWindowOutputReference MaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference">GoogleComputeNodeGroupMaintenanceWindowOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `ShareSettings`<sup>Required</sup> <a name="ShareSettings" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.shareSettings"></a>

```csharp
public GoogleComputeNodeGroupShareSettingsOutputReference ShareSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference">GoogleComputeNodeGroupShareSettingsOutputReference</a>

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.timeouts"></a>

```csharp
public GoogleComputeNodeGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference">GoogleComputeNodeGroupTimeoutsOutputReference</a>

---

##### `AutoscalingPolicyInput`<sup>Optional</sup> <a name="AutoscalingPolicyInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.autoscalingPolicyInput"></a>

```csharp
public GoogleComputeNodeGroupAutoscalingPolicy AutoscalingPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy">GoogleComputeNodeGroupAutoscalingPolicy</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitialSizeInput`<sup>Optional</sup> <a name="InitialSizeInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.initialSizeInput"></a>

```csharp
public double InitialSizeInput { get; }
```

- *Type:* double

---

##### `MaintenanceIntervalInput`<sup>Optional</sup> <a name="MaintenanceIntervalInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenanceIntervalInput"></a>

```csharp
public string MaintenanceIntervalInput { get; }
```

- *Type:* string

---

##### `MaintenancePolicyInput`<sup>Optional</sup> <a name="MaintenancePolicyInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenancePolicyInput"></a>

```csharp
public string MaintenancePolicyInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenanceWindowInput"></a>

```csharp
public GoogleComputeNodeGroupMaintenanceWindow MaintenanceWindowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow">GoogleComputeNodeGroupMaintenanceWindow</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NodeTemplateInput`<sup>Optional</sup> <a name="NodeTemplateInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.nodeTemplateInput"></a>

```csharp
public string NodeTemplateInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ShareSettingsInput`<sup>Optional</sup> <a name="ShareSettingsInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.shareSettingsInput"></a>

```csharp
public GoogleComputeNodeGroupShareSettings ShareSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings">GoogleComputeNodeGroupShareSettings</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitialSize`<sup>Required</sup> <a name="InitialSize" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.initialSize"></a>

```csharp
public double InitialSize { get; }
```

- *Type:* double

---

##### `MaintenanceInterval`<sup>Required</sup> <a name="MaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenanceInterval"></a>

```csharp
public string MaintenanceInterval { get; }
```

- *Type:* string

---

##### `MaintenancePolicy`<sup>Required</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.maintenancePolicy"></a>

```csharp
public string MaintenancePolicy { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodeTemplate`<sup>Required</sup> <a name="NodeTemplate" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.nodeTemplate"></a>

```csharp
public string NodeTemplate { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNodeGroupAutoscalingPolicy <a name="GoogleComputeNodeGroupAutoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNodeGroupAutoscalingPolicy {
    double MaxNodes = null,
    double MinNodes = null,
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy.property.maxNodes">MaxNodes</a></code> | <code>double</code> | Maximum size of the node group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy.property.minNodes">MinNodes</a></code> | <code>double</code> | Minimum size of the node group. Must be less than or equal to max-nodes. The default value is 0. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy.property.mode">Mode</a></code> | <code>string</code> | The autoscaling mode. |

---

##### `MaxNodes`<sup>Optional</sup> <a name="MaxNodes" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy.property.maxNodes"></a>

```csharp
public double MaxNodes { get; set; }
```

- *Type:* double

Maximum size of the node group.

Set to a value less than or equal
to 100 and greater than or equal to min-nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#max_nodes GoogleComputeNodeGroup#max_nodes}

---

##### `MinNodes`<sup>Optional</sup> <a name="MinNodes" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy.property.minNodes"></a>

```csharp
public double MinNodes { get; set; }
```

- *Type:* double

Minimum size of the node group. Must be less than or equal to max-nodes. The default value is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#min_nodes GoogleComputeNodeGroup#min_nodes}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The autoscaling mode.

Set to one of the following:

* OFF: Disables the autoscaler.
* ON: Enables scaling in and scaling out.
* ONLY_SCALE_OUT: Enables only scaling out.
  You must use this mode if your node groups are configured to
  restart their hosted VMs on minimal servers. Possible values: ["OFF", "ON", "ONLY_SCALE_OUT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#mode GoogleComputeNodeGroup#mode}

---

### GoogleComputeNodeGroupConfig <a name="GoogleComputeNodeGroupConfig" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNodeGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string NodeTemplate,
    GoogleComputeNodeGroupAutoscalingPolicy AutoscalingPolicy = null,
    string Description = null,
    string Id = null,
    double InitialSize = null,
    string MaintenanceInterval = null,
    string MaintenancePolicy = null,
    GoogleComputeNodeGroupMaintenanceWindow MaintenanceWindow = null,
    string Name = null,
    string Project = null,
    GoogleComputeNodeGroupShareSettings ShareSettings = null,
    GoogleComputeNodeGroupTimeouts Timeouts = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.nodeTemplate">NodeTemplate</a></code> | <code>string</code> | The URL of the node template to which this node group belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.autoscalingPolicy">AutoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy">GoogleComputeNodeGroupAutoscalingPolicy</a></code> | autoscaling_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.description">Description</a></code> | <code>string</code> | An optional textual description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#id GoogleComputeNodeGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.initialSize">InitialSize</a></code> | <code>double</code> | The initial number of nodes in the node group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.maintenanceInterval">MaintenanceInterval</a></code> | <code>string</code> | Specifies the frequency of planned maintenance events. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.maintenancePolicy">MaintenancePolicy</a></code> | <code>string</code> | Specifies how to handle instances when a node in the group undergoes maintenance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow">GoogleComputeNodeGroupMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#project GoogleComputeNodeGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.shareSettings">ShareSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings">GoogleComputeNodeGroupShareSettings</a></code> | share_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts">GoogleComputeNodeGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.zone">Zone</a></code> | <code>string</code> | Zone where this node group is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `NodeTemplate`<sup>Required</sup> <a name="NodeTemplate" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.nodeTemplate"></a>

```csharp
public string NodeTemplate { get; set; }
```

- *Type:* string

The URL of the node template to which this node group belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#node_template GoogleComputeNodeGroup#node_template}

---

##### `AutoscalingPolicy`<sup>Optional</sup> <a name="AutoscalingPolicy" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.autoscalingPolicy"></a>

```csharp
public GoogleComputeNodeGroupAutoscalingPolicy AutoscalingPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy">GoogleComputeNodeGroupAutoscalingPolicy</a>

autoscaling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#autoscaling_policy GoogleComputeNodeGroup#autoscaling_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional textual description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#description GoogleComputeNodeGroup#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#id GoogleComputeNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialSize`<sup>Optional</sup> <a name="InitialSize" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.initialSize"></a>

```csharp
public double InitialSize { get; set; }
```

- *Type:* double

The initial number of nodes in the node group.

One of 'initial_size' or 'autoscaling_policy' must be configured on resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#initial_size GoogleComputeNodeGroup#initial_size}

---

##### `MaintenanceInterval`<sup>Optional</sup> <a name="MaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.maintenanceInterval"></a>

```csharp
public string MaintenanceInterval { get; set; }
```

- *Type:* string

Specifies the frequency of planned maintenance events.

Set to one of the following:

* AS_NEEDED: Hosts are eligible to receive infrastructure and hypervisor updates as they become available.
* RECURRENT: Hosts receive planned infrastructure and hypervisor updates on a periodic basis, but not more frequently than every 28 days. This minimizes the number of planned maintenance operations on individual hosts and reduces the frequency of disruptions, both live migrations and terminations, on individual VMs. Possible values: ["AS_NEEDED", "RECURRENT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#maintenance_interval GoogleComputeNodeGroup#maintenance_interval}

---

##### `MaintenancePolicy`<sup>Optional</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.maintenancePolicy"></a>

```csharp
public string MaintenancePolicy { get; set; }
```

- *Type:* string

Specifies how to handle instances when a node in the group undergoes maintenance.

Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#maintenance_policy GoogleComputeNodeGroup#maintenance_policy}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.maintenanceWindow"></a>

```csharp
public GoogleComputeNodeGroupMaintenanceWindow MaintenanceWindow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow">GoogleComputeNodeGroupMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#maintenance_window GoogleComputeNodeGroup#maintenance_window}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#name GoogleComputeNodeGroup#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#project GoogleComputeNodeGroup#project}.

---

##### `ShareSettings`<sup>Optional</sup> <a name="ShareSettings" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.shareSettings"></a>

```csharp
public GoogleComputeNodeGroupShareSettings ShareSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings">GoogleComputeNodeGroupShareSettings</a>

share_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#share_settings GoogleComputeNodeGroup#share_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.timeouts"></a>

```csharp
public GoogleComputeNodeGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts">GoogleComputeNodeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#timeouts GoogleComputeNodeGroup#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Zone where this node group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#zone GoogleComputeNodeGroup#zone}

---

### GoogleComputeNodeGroupMaintenanceWindow <a name="GoogleComputeNodeGroupMaintenanceWindow" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNodeGroupMaintenanceWindow {
    string StartTime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow.property.startTime">StartTime</a></code> | <code>string</code> | instances.start time of the window. This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example, both 13:00-5 and 08:00 are valid. |

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

instances.start time of the window. This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example, both 13:00-5 and 08:00 are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#start_time GoogleComputeNodeGroup#start_time}

---

### GoogleComputeNodeGroupShareSettings <a name="GoogleComputeNodeGroupShareSettings" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNodeGroupShareSettings {
    string ShareType,
    object ProjectMap = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings.property.shareType">ShareType</a></code> | <code>string</code> | Node group sharing type. Possible values: ["ORGANIZATION", "SPECIFIC_PROJECTS", "LOCAL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings.property.projectMap">ProjectMap</a></code> | <code>object</code> | project_map block. |

---

##### `ShareType`<sup>Required</sup> <a name="ShareType" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings.property.shareType"></a>

```csharp
public string ShareType { get; set; }
```

- *Type:* string

Node group sharing type. Possible values: ["ORGANIZATION", "SPECIFIC_PROJECTS", "LOCAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#share_type GoogleComputeNodeGroup#share_type}

---

##### `ProjectMap`<sup>Optional</sup> <a name="ProjectMap" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings.property.projectMap"></a>

```csharp
public object ProjectMap { get; set; }
```

- *Type:* object

project_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#project_map GoogleComputeNodeGroup#project_map}

---

### GoogleComputeNodeGroupShareSettingsProjectMap <a name="GoogleComputeNodeGroupShareSettingsProjectMap" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNodeGroupShareSettingsProjectMap {
    string Id,
    string ProjectId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMap.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#id GoogleComputeNodeGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMap.property.projectId">ProjectId</a></code> | <code>string</code> | The project id/number should be the same as the key of this project config in the project map. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMap.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#id GoogleComputeNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMap.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The project id/number should be the same as the key of this project config in the project map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#project_id GoogleComputeNodeGroup#project_id}

---

### GoogleComputeNodeGroupTimeouts <a name="GoogleComputeNodeGroupTimeouts" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNodeGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#create GoogleComputeNodeGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#delete GoogleComputeNodeGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#update GoogleComputeNodeGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#create GoogleComputeNodeGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#delete GoogleComputeNodeGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_node_group#update GoogleComputeNodeGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNodeGroupAutoscalingPolicyOutputReference <a name="GoogleComputeNodeGroupAutoscalingPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNodeGroupAutoscalingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.resetMaxNodes">ResetMaxNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.resetMinNodes">ResetMinNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxNodes` <a name="ResetMaxNodes" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.resetMaxNodes"></a>

```csharp
private void ResetMaxNodes()
```

##### `ResetMinNodes` <a name="ResetMinNodes" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.resetMinNodes"></a>

```csharp
private void ResetMinNodes()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodesInput">MaxNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodesInput">MinNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodes">MaxNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodes">MinNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy">GoogleComputeNodeGroupAutoscalingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxNodesInput`<sup>Optional</sup> <a name="MaxNodesInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodesInput"></a>

```csharp
public double MaxNodesInput { get; }
```

- *Type:* double

---

##### `MinNodesInput`<sup>Optional</sup> <a name="MinNodesInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodesInput"></a>

```csharp
public double MinNodesInput { get; }
```

- *Type:* double

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodes"></a>

```csharp
public double MaxNodes { get; }
```

- *Type:* double

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodes"></a>

```csharp
public double MinNodes { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeNodeGroupAutoscalingPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupAutoscalingPolicy">GoogleComputeNodeGroupAutoscalingPolicy</a>

---


### GoogleComputeNodeGroupMaintenanceWindowOutputReference <a name="GoogleComputeNodeGroupMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNodeGroupMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow">GoogleComputeNodeGroupMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeNodeGroupMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupMaintenanceWindow">GoogleComputeNodeGroupMaintenanceWindow</a>

---


### GoogleComputeNodeGroupShareSettingsOutputReference <a name="GoogleComputeNodeGroupShareSettingsOutputReference" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNodeGroupShareSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.putProjectMap">PutProjectMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.resetProjectMap">ResetProjectMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProjectMap` <a name="PutProjectMap" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.putProjectMap"></a>

```csharp
private void PutProjectMap(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.putProjectMap.parameter.value"></a>

- *Type:* object

---

##### `ResetProjectMap` <a name="ResetProjectMap" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.resetProjectMap"></a>

```csharp
private void ResetProjectMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.projectMap">ProjectMap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList">GoogleComputeNodeGroupShareSettingsProjectMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.projectMapInput">ProjectMapInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.shareTypeInput">ShareTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.shareType">ShareType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings">GoogleComputeNodeGroupShareSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectMap`<sup>Required</sup> <a name="ProjectMap" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.projectMap"></a>

```csharp
public GoogleComputeNodeGroupShareSettingsProjectMapList ProjectMap { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList">GoogleComputeNodeGroupShareSettingsProjectMapList</a>

---

##### `ProjectMapInput`<sup>Optional</sup> <a name="ProjectMapInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.projectMapInput"></a>

```csharp
public object ProjectMapInput { get; }
```

- *Type:* object

---

##### `ShareTypeInput`<sup>Optional</sup> <a name="ShareTypeInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.shareTypeInput"></a>

```csharp
public string ShareTypeInput { get; }
```

- *Type:* string

---

##### `ShareType`<sup>Required</sup> <a name="ShareType" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.shareType"></a>

```csharp
public string ShareType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeNodeGroupShareSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettings">GoogleComputeNodeGroupShareSettings</a>

---


### GoogleComputeNodeGroupShareSettingsProjectMapList <a name="GoogleComputeNodeGroupShareSettingsProjectMapList" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNodeGroupShareSettingsProjectMapList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.get"></a>

```csharp
private GoogleComputeNodeGroupShareSettingsProjectMapOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeNodeGroupShareSettingsProjectMapOutputReference <a name="GoogleComputeNodeGroupShareSettingsProjectMapOutputReference" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNodeGroupShareSettingsProjectMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupShareSettingsProjectMapOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeNodeGroupTimeoutsOutputReference <a name="GoogleComputeNodeGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNodeGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNodeGroup.GoogleComputeNodeGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



