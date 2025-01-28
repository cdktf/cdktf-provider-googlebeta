# `googleIamPrincipalAccessBoundaryPolicy` Submodule <a name="`googleIamPrincipalAccessBoundaryPolicy` Submodule" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamPrincipalAccessBoundaryPolicy <a name="GoogleIamPrincipalAccessBoundaryPolicy" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy google_iam_principal_access_boundary_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer"></a>

```typescript
import { googleIamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

new googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy(scope: Construct, id: string, config: GoogleIamPrincipalAccessBoundaryPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig">GoogleIamPrincipalAccessBoundaryPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig">GoogleIamPrincipalAccessBoundaryPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putDetails">putDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetDetails">resetDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDetails` <a name="putDetails" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putDetails"></a>

```typescript
public putDetails(value: GoogleIamPrincipalAccessBoundaryPolicyDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleIamPrincipalAccessBoundaryPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDetails` <a name="resetDetails" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetDetails"></a>

```typescript
public resetDetails(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamPrincipalAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isConstruct"></a>

```typescript
import { googleIamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformElement"></a>

```typescript
import { googleIamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformResource"></a>

```typescript
import { googleIamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport"></a>

```typescript
import { googleIamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleIamPrincipalAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIamPrincipalAccessBoundaryPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIamPrincipalAccessBoundaryPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamPrincipalAccessBoundaryPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.details">details</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference">GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference">GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.detailsInput">detailsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyIdInput">principalAccessBoundaryPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyId">principalAccessBoundaryPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.details"></a>

```typescript
public readonly details: GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference">GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference">GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.detailsInput"></a>

```typescript
public readonly detailsInput: GoogleIamPrincipalAccessBoundaryPolicyDetails;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `principalAccessBoundaryPolicyIdInput`<sup>Optional</sup> <a name="principalAccessBoundaryPolicyIdInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyIdInput"></a>

```typescript
public readonly principalAccessBoundaryPolicyIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleIamPrincipalAccessBoundaryPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `principalAccessBoundaryPolicyId`<sup>Required</sup> <a name="principalAccessBoundaryPolicyId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyId"></a>

```typescript
public readonly principalAccessBoundaryPolicyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamPrincipalAccessBoundaryPolicyConfig <a name="GoogleIamPrincipalAccessBoundaryPolicyConfig" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.Initializer"></a>

```typescript
import { googleIamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

const googleIamPrincipalAccessBoundaryPolicyConfig: googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.location">location</a></code> | <code>string</code> | The location the principal access boundary policy is in. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.organization">organization</a></code> | <code>string</code> | The parent organization of the principal access boundary policy. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.principalAccessBoundaryPolicyId">principalAccessBoundaryPolicyId</a></code> | <code>string</code> | The ID to use to create the principal access boundary policy. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.details">details</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.displayName">displayName</a></code> | <code>string</code> | The description of the principal access boundary policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy#id GoogleIamPrincipalAccessBoundaryPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location the principal access boundary policy is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy#location GoogleIamPrincipalAccessBoundaryPolicy#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The parent organization of the principal access boundary policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy#organization GoogleIamPrincipalAccessBoundaryPolicy#organization}

---

##### `principalAccessBoundaryPolicyId`<sup>Required</sup> <a name="principalAccessBoundaryPolicyId" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.principalAccessBoundaryPolicyId"></a>

```typescript
public readonly principalAccessBoundaryPolicyId: string;
```

- *Type:* string

The ID to use to create the principal access boundary policy.

This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, hyphens, or dots. Pattern, /a-z{2,62}/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy#principal_access_boundary_policy_id GoogleIamPrincipalAccessBoundaryPolicy#principal_access_boundary_policy_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy#annotations GoogleIamPrincipalAccessBoundaryPolicy#annotations}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.details"></a>

```typescript
public readonly details: GoogleIamPrincipalAccessBoundaryPolicyDetails;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy#details GoogleIamPrincipalAccessBoundaryPolicy#details}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The description of the principal access boundary policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy#display_name GoogleIamPrincipalAccessBoundaryPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy#id GoogleIamPrincipalAccessBoundaryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamPrincipalAccessBoundaryPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy#timeouts GoogleIamPrincipalAccessBoundaryPolicy#timeouts}

---

### GoogleIamPrincipalAccessBoundaryPolicyDetails <a name="GoogleIamPrincipalAccessBoundaryPolicyDetails" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails.Initializer"></a>

```typescript
import { googleIamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

const googleIamPrincipalAccessBoundaryPolicyDetails: googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>[]</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails.property.enforcementVersion">enforcementVersion</a></code> | <code>string</code> | The version number that indicates which Google Cloud services are included in the enforcement (e.g. \"latest\", \"1\", ...). If empty, the PAB policy version will be set to the current latest version, and this version won't get updated when new versions are released. |

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails.property.rules"></a>

```typescript
public readonly rules: IResolvable | GoogleIamPrincipalAccessBoundaryPolicyDetailsRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy#rules GoogleIamPrincipalAccessBoundaryPolicy#rules}

---

##### `enforcementVersion`<sup>Optional</sup> <a name="enforcementVersion" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails.property.enforcementVersion"></a>

```typescript
public readonly enforcementVersion: string;
```

- *Type:* string

The version number that indicates which Google Cloud services are included in the enforcement (e.g. \"latest\", \"1\", ...). If empty, the PAB policy version will be set to the current latest version, and this version won't get updated when new versions are released.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy#enforcement_version GoogleIamPrincipalAccessBoundaryPolicy#enforcement_version}

---

### GoogleIamPrincipalAccessBoundaryPolicyDetailsRules <a name="GoogleIamPrincipalAccessBoundaryPolicyDetailsRules" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.Initializer"></a>

```typescript
import { googleIamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

const googleIamPrincipalAccessBoundaryPolicyDetailsRules: googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.effect">effect</a></code> | <code>string</code> | The access relationship of principals to the resources in this rule. Possible values: ALLOW. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.resources">resources</a></code> | <code>string[]</code> | A list of Cloud Resource Manager resources. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.description">description</a></code> | <code>string</code> | The description of the principal access boundary policy rule. Must be less than or equal to 256 characters. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

The access relationship of principals to the resources in this rule. Possible values: ALLOW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy#effect GoogleIamPrincipalAccessBoundaryPolicy#effect}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

A list of Cloud Resource Manager resources.

The resource
and all the descendants are included. The number of resources in a policy
is limited to 500 across all rules.
The following resource types are supported:
* Organizations, such as '//cloudresourcemanager.googleapis.com/organizations/123'.
* Folders, such as '//cloudresourcemanager.googleapis.com/folders/123'.
* Projects, such as '//cloudresourcemanager.googleapis.com/projects/123'
or '//cloudresourcemanager.googleapis.com/projects/my-project-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy#resources GoogleIamPrincipalAccessBoundaryPolicy#resources}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the principal access boundary policy rule. Must be less than or equal to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy#description GoogleIamPrincipalAccessBoundaryPolicy#description}

---

### GoogleIamPrincipalAccessBoundaryPolicyTimeouts <a name="GoogleIamPrincipalAccessBoundaryPolicyTimeouts" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.Initializer"></a>

```typescript
import { googleIamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

const googleIamPrincipalAccessBoundaryPolicyTimeouts: googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy#create GoogleIamPrincipalAccessBoundaryPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy#delete GoogleIamPrincipalAccessBoundaryPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy#update GoogleIamPrincipalAccessBoundaryPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy#create GoogleIamPrincipalAccessBoundaryPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy#delete GoogleIamPrincipalAccessBoundaryPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_iam_principal_access_boundary_policy#update GoogleIamPrincipalAccessBoundaryPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference <a name="GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer"></a>

```typescript
import { googleIamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

new googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.resetEnforcementVersion">resetEnforcementVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | GoogleIamPrincipalAccessBoundaryPolicyDetailsRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>[]

---

##### `resetEnforcementVersion` <a name="resetEnforcementVersion" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.resetEnforcementVersion"></a>

```typescript
public resetEnforcementVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList">GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersionInput">enforcementVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersion">enforcementVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rules"></a>

```typescript
public readonly rules: GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList">GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList</a>

---

##### `enforcementVersionInput`<sup>Optional</sup> <a name="enforcementVersionInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersionInput"></a>

```typescript
public readonly enforcementVersionInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | GoogleIamPrincipalAccessBoundaryPolicyDetailsRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>[]

---

##### `enforcementVersion`<sup>Required</sup> <a name="enforcementVersion" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersion"></a>

```typescript
public readonly enforcementVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIamPrincipalAccessBoundaryPolicyDetails;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetails">GoogleIamPrincipalAccessBoundaryPolicyDetails</a>

---


### GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList <a name="GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer"></a>

```typescript
import { googleIamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

new googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.get"></a>

```typescript
public get(index: number): GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamPrincipalAccessBoundaryPolicyDetailsRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>[]

---


### GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference <a name="GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer"></a>

```typescript
import { googleIamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

new googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamPrincipalAccessBoundaryPolicyDetailsRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyDetailsRules">GoogleIamPrincipalAccessBoundaryPolicyDetailsRules</a>

---


### GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference <a name="GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleIamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

new googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamPrincipalAccessBoundaryPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamPrincipalAccessBoundaryPolicy.GoogleIamPrincipalAccessBoundaryPolicyTimeouts">GoogleIamPrincipalAccessBoundaryPolicyTimeouts</a>

---



