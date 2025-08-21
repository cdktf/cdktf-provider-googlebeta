# `googleVertexAiFeatureOnlineStoreIamBinding` Submodule <a name="`googleVertexAiFeatureOnlineStoreIamBinding` Submodule" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeatureOnlineStoreIamBinding <a name="GoogleVertexAiFeatureOnlineStoreIamBinding" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_feature_online_store_iam_binding google_vertex_ai_feature_online_store_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiFeatureOnlineStoreIamBinding(Construct Scope, string Id, GoogleVertexAiFeatureOnlineStoreIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig">GoogleVertexAiFeatureOnlineStoreIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig">GoogleVertexAiFeatureOnlineStoreIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.putCondition"></a>

```csharp
private void PutCondition(GoogleVertexAiFeatureOnlineStoreIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition">GoogleVertexAiFeatureOnlineStoreIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVertexAiFeatureOnlineStoreIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleVertexAiFeatureOnlineStoreIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleVertexAiFeatureOnlineStoreIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleVertexAiFeatureOnlineStoreIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleVertexAiFeatureOnlineStoreIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleVertexAiFeatureOnlineStoreIamBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiFeatureOnlineStoreIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiFeatureOnlineStoreIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_feature_online_store_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiFeatureOnlineStoreIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference">GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition">GoogleVertexAiFeatureOnlineStoreIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.featureOnlineStoreInput">FeatureOnlineStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.featureOnlineStore">FeatureOnlineStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.condition"></a>

```csharp
public GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference">GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.conditionInput"></a>

```csharp
public GoogleVertexAiFeatureOnlineStoreIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition">GoogleVertexAiFeatureOnlineStoreIamBindingCondition</a>

---

##### `FeatureOnlineStoreInput`<sup>Optional</sup> <a name="FeatureOnlineStoreInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.featureOnlineStoreInput"></a>

```csharp
public string FeatureOnlineStoreInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `FeatureOnlineStore`<sup>Required</sup> <a name="FeatureOnlineStore" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.featureOnlineStore"></a>

```csharp
public string FeatureOnlineStore { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeatureOnlineStoreIamBindingCondition <a name="GoogleVertexAiFeatureOnlineStoreIamBindingCondition" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiFeatureOnlineStoreIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_feature_online_store_iam_binding#expression GoogleVertexAiFeatureOnlineStoreIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_feature_online_store_iam_binding#title GoogleVertexAiFeatureOnlineStoreIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_feature_online_store_iam_binding#description GoogleVertexAiFeatureOnlineStoreIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_feature_online_store_iam_binding#expression GoogleVertexAiFeatureOnlineStoreIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_feature_online_store_iam_binding#title GoogleVertexAiFeatureOnlineStoreIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_feature_online_store_iam_binding#description GoogleVertexAiFeatureOnlineStoreIamBinding#description}.

---

### GoogleVertexAiFeatureOnlineStoreIamBindingConfig <a name="GoogleVertexAiFeatureOnlineStoreIamBindingConfig" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiFeatureOnlineStoreIamBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FeatureOnlineStore,
    string[] Members,
    string Role,
    GoogleVertexAiFeatureOnlineStoreIamBindingCondition Condition = null,
    string Id = null,
    string Project = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.featureOnlineStore">FeatureOnlineStore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_feature_online_store_iam_binding#feature_online_store GoogleVertexAiFeatureOnlineStoreIamBinding#feature_online_store}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_feature_online_store_iam_binding#members GoogleVertexAiFeatureOnlineStoreIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_feature_online_store_iam_binding#role GoogleVertexAiFeatureOnlineStoreIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition">GoogleVertexAiFeatureOnlineStoreIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_feature_online_store_iam_binding#id GoogleVertexAiFeatureOnlineStoreIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_feature_online_store_iam_binding#project GoogleVertexAiFeatureOnlineStoreIamBinding#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_feature_online_store_iam_binding#region GoogleVertexAiFeatureOnlineStoreIamBinding#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FeatureOnlineStore`<sup>Required</sup> <a name="FeatureOnlineStore" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.featureOnlineStore"></a>

```csharp
public string FeatureOnlineStore { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_feature_online_store_iam_binding#feature_online_store GoogleVertexAiFeatureOnlineStoreIamBinding#feature_online_store}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_feature_online_store_iam_binding#members GoogleVertexAiFeatureOnlineStoreIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_feature_online_store_iam_binding#role GoogleVertexAiFeatureOnlineStoreIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.condition"></a>

```csharp
public GoogleVertexAiFeatureOnlineStoreIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition">GoogleVertexAiFeatureOnlineStoreIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_feature_online_store_iam_binding#condition GoogleVertexAiFeatureOnlineStoreIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_feature_online_store_iam_binding#id GoogleVertexAiFeatureOnlineStoreIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_feature_online_store_iam_binding#project GoogleVertexAiFeatureOnlineStoreIamBinding#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_vertex_ai_feature_online_store_iam_binding#region GoogleVertexAiFeatureOnlineStoreIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference <a name="GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition">GoogleVertexAiFeatureOnlineStoreIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiFeatureOnlineStoreIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition">GoogleVertexAiFeatureOnlineStoreIamBindingCondition</a>

---



