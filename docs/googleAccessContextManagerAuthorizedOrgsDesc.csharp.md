# `googleAccessContextManagerAuthorizedOrgsDesc` Submodule <a name="`googleAccessContextManagerAuthorizedOrgsDesc` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerAuthorizedOrgsDesc <a name="GoogleAccessContextManagerAuthorizedOrgsDesc" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_access_context_manager_authorized_orgs_desc google_access_context_manager_authorized_orgs_desc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAuthorizedOrgsDesc(Construct Scope, string Id, GoogleAccessContextManagerAuthorizedOrgsDescConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig">GoogleAccessContextManagerAuthorizedOrgsDescConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig">GoogleAccessContextManagerAuthorizedOrgsDescConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetAssetType">ResetAssetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetAuthorizationDirection">ResetAuthorizationDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetAuthorizationType">ResetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetOrgs">ResetOrgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleAccessContextManagerAuthorizedOrgsDescTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts">GoogleAccessContextManagerAuthorizedOrgsDescTimeouts</a>

---

##### `ResetAssetType` <a name="ResetAssetType" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetAssetType"></a>

```csharp
private void ResetAssetType()
```

##### `ResetAuthorizationDirection` <a name="ResetAuthorizationDirection" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetAuthorizationDirection"></a>

```csharp
private void ResetAuthorizationDirection()
```

##### `ResetAuthorizationType` <a name="ResetAuthorizationType" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetAuthorizationType"></a>

```csharp
private void ResetAuthorizationType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOrgs` <a name="ResetOrgs" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetOrgs"></a>

```csharp
private void ResetOrgs()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAccessContextManagerAuthorizedOrgsDesc resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAccessContextManagerAuthorizedOrgsDesc.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAccessContextManagerAuthorizedOrgsDesc.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAccessContextManagerAuthorizedOrgsDesc.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAccessContextManagerAuthorizedOrgsDesc.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleAccessContextManagerAuthorizedOrgsDesc resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAccessContextManagerAuthorizedOrgsDesc to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAccessContextManagerAuthorizedOrgsDesc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_access_context_manager_authorized_orgs_desc#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAccessContextManagerAuthorizedOrgsDesc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference">GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.assetTypeInput">AssetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.authorizationDirectionInput">AuthorizationDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.authorizationTypeInput">AuthorizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.orgsInput">OrgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.assetType">AssetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.authorizationDirection">AuthorizationDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.authorizationType">AuthorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.orgs">Orgs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.timeouts"></a>

```csharp
public GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference">GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AssetTypeInput`<sup>Optional</sup> <a name="AssetTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.assetTypeInput"></a>

```csharp
public string AssetTypeInput { get; }
```

- *Type:* string

---

##### `AuthorizationDirectionInput`<sup>Optional</sup> <a name="AuthorizationDirectionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.authorizationDirectionInput"></a>

```csharp
public string AuthorizationDirectionInput { get; }
```

- *Type:* string

---

##### `AuthorizationTypeInput`<sup>Optional</sup> <a name="AuthorizationTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.authorizationTypeInput"></a>

```csharp
public string AuthorizationTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrgsInput`<sup>Optional</sup> <a name="OrgsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.orgsInput"></a>

```csharp
public string[] OrgsInput { get; }
```

- *Type:* string[]

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.assetType"></a>

```csharp
public string AssetType { get; }
```

- *Type:* string

---

##### `AuthorizationDirection`<sup>Required</sup> <a name="AuthorizationDirection" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.authorizationDirection"></a>

```csharp
public string AuthorizationDirection { get; }
```

- *Type:* string

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.authorizationType"></a>

```csharp
public string AuthorizationType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Orgs`<sup>Required</sup> <a name="Orgs" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.orgs"></a>

```csharp
public string[] Orgs { get; }
```

- *Type:* string[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDesc.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerAuthorizedOrgsDescConfig <a name="GoogleAccessContextManagerAuthorizedOrgsDescConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAuthorizedOrgsDescConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Parent,
    string AssetType = null,
    string AuthorizationDirection = null,
    string AuthorizationType = null,
    string Id = null,
    string[] Orgs = null,
    GoogleAccessContextManagerAuthorizedOrgsDescTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.name">Name</a></code> | <code>string</code> | Resource name for the 'AuthorizedOrgsDesc'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.parent">Parent</a></code> | <code>string</code> | Required. Resource name for the access policy which owns this 'AuthorizedOrgsDesc'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.assetType">AssetType</a></code> | <code>string</code> | The type of entities that need to use the authorization relationship during evaluation, such as a device. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.authorizationDirection">AuthorizationDirection</a></code> | <code>string</code> | The direction of the authorization relationship between this organization and the organizations listed in the "orgs" field. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.authorizationType">AuthorizationType</a></code> | <code>string</code> | A granular control type for authorization levels. Valid value is "AUTHORIZATION_TYPE_TRUST". Possible values: ["AUTHORIZATION_TYPE_TRUST"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_access_context_manager_authorized_orgs_desc#id GoogleAccessContextManagerAuthorizedOrgsDesc#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.orgs">Orgs</a></code> | <code>string[]</code> | The list of organization ids in this AuthorizedOrgsDesc. Format: 'organizations/<org_number>' Example: 'organizations/123456'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts">GoogleAccessContextManagerAuthorizedOrgsDescTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Resource name for the 'AuthorizedOrgsDesc'.

Format:
'accessPolicies/{access_policy}/authorizedOrgsDescs/{authorized_orgs_desc}'.
The 'authorized_orgs_desc' component must begin with a letter, followed by
alphanumeric characters or '_'.
After you create an 'AuthorizedOrgsDesc', you cannot change its 'name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_access_context_manager_authorized_orgs_desc#name GoogleAccessContextManagerAuthorizedOrgsDesc#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Required. Resource name for the access policy which owns this 'AuthorizedOrgsDesc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_access_context_manager_authorized_orgs_desc#parent GoogleAccessContextManagerAuthorizedOrgsDesc#parent}

---

##### `AssetType`<sup>Optional</sup> <a name="AssetType" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.assetType"></a>

```csharp
public string AssetType { get; set; }
```

- *Type:* string

The type of entities that need to use the authorization relationship during evaluation, such as a device.

Valid values are "ASSET_TYPE_DEVICE" and
"ASSET_TYPE_CREDENTIAL_STRENGTH". Possible values: ["ASSET_TYPE_DEVICE", "ASSET_TYPE_CREDENTIAL_STRENGTH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_access_context_manager_authorized_orgs_desc#asset_type GoogleAccessContextManagerAuthorizedOrgsDesc#asset_type}

---

##### `AuthorizationDirection`<sup>Optional</sup> <a name="AuthorizationDirection" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.authorizationDirection"></a>

```csharp
public string AuthorizationDirection { get; set; }
```

- *Type:* string

The direction of the authorization relationship between this organization and the organizations listed in the "orgs" field.

The valid values for this
field include the following:

AUTHORIZATION_DIRECTION_FROM: Allows this organization to evaluate traffic
in the organizations listed in the 'orgs' field.

AUTHORIZATION_DIRECTION_TO: Allows the organizations listed in the 'orgs'
field to evaluate the traffic in this organization.

For the authorization relationship to take effect, all of the organizations
must authorize and specify the appropriate relationship direction. For
example, if organization A authorized organization B and C to evaluate its
traffic, by specifying "AUTHORIZATION_DIRECTION_TO" as the authorization
direction, organizations B and C must specify
"AUTHORIZATION_DIRECTION_FROM" as the authorization direction in their
"AuthorizedOrgsDesc" resource. Possible values: ["AUTHORIZATION_DIRECTION_TO", "AUTHORIZATION_DIRECTION_FROM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_access_context_manager_authorized_orgs_desc#authorization_direction GoogleAccessContextManagerAuthorizedOrgsDesc#authorization_direction}

---

##### `AuthorizationType`<sup>Optional</sup> <a name="AuthorizationType" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.authorizationType"></a>

```csharp
public string AuthorizationType { get; set; }
```

- *Type:* string

A granular control type for authorization levels. Valid value is "AUTHORIZATION_TYPE_TRUST". Possible values: ["AUTHORIZATION_TYPE_TRUST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_access_context_manager_authorized_orgs_desc#authorization_type GoogleAccessContextManagerAuthorizedOrgsDesc#authorization_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_access_context_manager_authorized_orgs_desc#id GoogleAccessContextManagerAuthorizedOrgsDesc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Orgs`<sup>Optional</sup> <a name="Orgs" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.orgs"></a>

```csharp
public string[] Orgs { get; set; }
```

- *Type:* string[]

The list of organization ids in this AuthorizedOrgsDesc. Format: 'organizations/<org_number>' Example: 'organizations/123456'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_access_context_manager_authorized_orgs_desc#orgs GoogleAccessContextManagerAuthorizedOrgsDesc#orgs}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescConfig.property.timeouts"></a>

```csharp
public GoogleAccessContextManagerAuthorizedOrgsDescTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts">GoogleAccessContextManagerAuthorizedOrgsDescTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_access_context_manager_authorized_orgs_desc#timeouts GoogleAccessContextManagerAuthorizedOrgsDesc#timeouts}

---

### GoogleAccessContextManagerAuthorizedOrgsDescTimeouts <a name="GoogleAccessContextManagerAuthorizedOrgsDescTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAuthorizedOrgsDescTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_access_context_manager_authorized_orgs_desc#create GoogleAccessContextManagerAuthorizedOrgsDesc#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_access_context_manager_authorized_orgs_desc#delete GoogleAccessContextManagerAuthorizedOrgsDesc#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_access_context_manager_authorized_orgs_desc#update GoogleAccessContextManagerAuthorizedOrgsDesc#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_access_context_manager_authorized_orgs_desc#create GoogleAccessContextManagerAuthorizedOrgsDesc#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_access_context_manager_authorized_orgs_desc#delete GoogleAccessContextManagerAuthorizedOrgsDesc#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_access_context_manager_authorized_orgs_desc#update GoogleAccessContextManagerAuthorizedOrgsDesc#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference <a name="GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAuthorizedOrgsDesc.GoogleAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



