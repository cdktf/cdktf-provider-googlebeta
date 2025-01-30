# `googleIapTunnelDestGroupIamBinding` Submodule <a name="`googleIapTunnelDestGroupIamBinding` Submodule" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapTunnelDestGroupIamBinding <a name="GoogleIapTunnelDestGroupIamBinding" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_tunnel_dest_group_iam_binding google_iap_tunnel_dest_group_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapTunnelDestGroupIamBinding(Construct Scope, string Id, GoogleIapTunnelDestGroupIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig">GoogleIapTunnelDestGroupIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig">GoogleIapTunnelDestGroupIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.putCondition"></a>

```csharp
private void PutCondition(GoogleIapTunnelDestGroupIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition">GoogleIapTunnelDestGroupIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIapTunnelDestGroupIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIapTunnelDestGroupIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIapTunnelDestGroupIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIapTunnelDestGroupIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleIapTunnelDestGroupIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleIapTunnelDestGroupIamBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIapTunnelDestGroupIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIapTunnelDestGroupIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_tunnel_dest_group_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIapTunnelDestGroupIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference">GoogleIapTunnelDestGroupIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition">GoogleIapTunnelDestGroupIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.destGroupInput">DestGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.destGroup">DestGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.condition"></a>

```csharp
public GoogleIapTunnelDestGroupIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference">GoogleIapTunnelDestGroupIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.conditionInput"></a>

```csharp
public GoogleIapTunnelDestGroupIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition">GoogleIapTunnelDestGroupIamBindingCondition</a>

---

##### `DestGroupInput`<sup>Optional</sup> <a name="DestGroupInput" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.destGroupInput"></a>

```csharp
public string DestGroupInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `DestGroup`<sup>Required</sup> <a name="DestGroup" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.destGroup"></a>

```csharp
public string DestGroup { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapTunnelDestGroupIamBindingCondition <a name="GoogleIapTunnelDestGroupIamBindingCondition" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapTunnelDestGroupIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_tunnel_dest_group_iam_binding#expression GoogleIapTunnelDestGroupIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_tunnel_dest_group_iam_binding#title GoogleIapTunnelDestGroupIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_tunnel_dest_group_iam_binding#description GoogleIapTunnelDestGroupIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_tunnel_dest_group_iam_binding#expression GoogleIapTunnelDestGroupIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_tunnel_dest_group_iam_binding#title GoogleIapTunnelDestGroupIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_tunnel_dest_group_iam_binding#description GoogleIapTunnelDestGroupIamBinding#description}.

---

### GoogleIapTunnelDestGroupIamBindingConfig <a name="GoogleIapTunnelDestGroupIamBindingConfig" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapTunnelDestGroupIamBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DestGroup,
    string[] Members,
    string Role,
    GoogleIapTunnelDestGroupIamBindingCondition Condition = null,
    string Id = null,
    string Project = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.destGroup">DestGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_tunnel_dest_group_iam_binding#dest_group GoogleIapTunnelDestGroupIamBinding#dest_group}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_tunnel_dest_group_iam_binding#members GoogleIapTunnelDestGroupIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_tunnel_dest_group_iam_binding#role GoogleIapTunnelDestGroupIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition">GoogleIapTunnelDestGroupIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_tunnel_dest_group_iam_binding#id GoogleIapTunnelDestGroupIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_tunnel_dest_group_iam_binding#project GoogleIapTunnelDestGroupIamBinding#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_tunnel_dest_group_iam_binding#region GoogleIapTunnelDestGroupIamBinding#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DestGroup`<sup>Required</sup> <a name="DestGroup" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.destGroup"></a>

```csharp
public string DestGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_tunnel_dest_group_iam_binding#dest_group GoogleIapTunnelDestGroupIamBinding#dest_group}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_tunnel_dest_group_iam_binding#members GoogleIapTunnelDestGroupIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_tunnel_dest_group_iam_binding#role GoogleIapTunnelDestGroupIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.condition"></a>

```csharp
public GoogleIapTunnelDestGroupIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition">GoogleIapTunnelDestGroupIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_tunnel_dest_group_iam_binding#condition GoogleIapTunnelDestGroupIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_tunnel_dest_group_iam_binding#id GoogleIapTunnelDestGroupIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_tunnel_dest_group_iam_binding#project GoogleIapTunnelDestGroupIamBinding#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_tunnel_dest_group_iam_binding#region GoogleIapTunnelDestGroupIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapTunnelDestGroupIamBindingConditionOutputReference <a name="GoogleIapTunnelDestGroupIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleIapTunnelDestGroupIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition">GoogleIapTunnelDestGroupIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleIapTunnelDestGroupIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapTunnelDestGroupIamBinding.GoogleIapTunnelDestGroupIamBindingCondition">GoogleIapTunnelDestGroupIamBindingCondition</a>

---



