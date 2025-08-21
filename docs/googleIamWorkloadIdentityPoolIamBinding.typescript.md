# `googleIamWorkloadIdentityPoolIamBinding` Submodule <a name="`googleIamWorkloadIdentityPoolIamBinding` Submodule" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamWorkloadIdentityPoolIamBinding <a name="GoogleIamWorkloadIdentityPoolIamBinding" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_iam_binding google_iam_workload_identity_pool_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.Initializer"></a>

```typescript
import { googleIamWorkloadIdentityPoolIamBinding } from '@cdktf/provider-google-beta'

new googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding(scope: Construct, id: string, config: GoogleIamWorkloadIdentityPoolIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig">GoogleIamWorkloadIdentityPoolIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig">GoogleIamWorkloadIdentityPoolIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.putCondition"></a>

```typescript
public putCondition(value: GoogleIamWorkloadIdentityPoolIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition">GoogleIamWorkloadIdentityPoolIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamWorkloadIdentityPoolIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.isConstruct"></a>

```typescript
import { googleIamWorkloadIdentityPoolIamBinding } from '@cdktf/provider-google-beta'

googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.isTerraformElement"></a>

```typescript
import { googleIamWorkloadIdentityPoolIamBinding } from '@cdktf/provider-google-beta'

googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.isTerraformResource"></a>

```typescript
import { googleIamWorkloadIdentityPoolIamBinding } from '@cdktf/provider-google-beta'

googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.generateConfigForImport"></a>

```typescript
import { googleIamWorkloadIdentityPoolIamBinding } from '@cdktf/provider-google-beta'

googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleIamWorkloadIdentityPoolIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIamWorkloadIdentityPoolIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIamWorkloadIdentityPoolIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamWorkloadIdentityPoolIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference">GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition">GoogleIamWorkloadIdentityPoolIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.workloadIdentityPoolIdInput">workloadIdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.condition"></a>

```typescript
public readonly condition: GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference">GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleIamWorkloadIdentityPoolIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition">GoogleIamWorkloadIdentityPoolIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `workloadIdentityPoolIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolIdInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.workloadIdentityPoolIdInput"></a>

```typescript
public readonly workloadIdentityPoolIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamWorkloadIdentityPoolIamBindingCondition <a name="GoogleIamWorkloadIdentityPoolIamBindingCondition" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition.Initializer"></a>

```typescript
import { googleIamWorkloadIdentityPoolIamBinding } from '@cdktf/provider-google-beta'

const googleIamWorkloadIdentityPoolIamBindingCondition: googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_iam_binding#expression GoogleIamWorkloadIdentityPoolIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_iam_binding#title GoogleIamWorkloadIdentityPoolIamBinding#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_iam_binding#description GoogleIamWorkloadIdentityPoolIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_iam_binding#expression GoogleIamWorkloadIdentityPoolIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_iam_binding#title GoogleIamWorkloadIdentityPoolIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_iam_binding#description GoogleIamWorkloadIdentityPoolIamBinding#description}.

---

### GoogleIamWorkloadIdentityPoolIamBindingConfig <a name="GoogleIamWorkloadIdentityPoolIamBindingConfig" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.Initializer"></a>

```typescript
import { googleIamWorkloadIdentityPoolIamBinding } from '@cdktf/provider-google-beta'

const googleIamWorkloadIdentityPoolIamBindingConfig: googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_iam_binding#members GoogleIamWorkloadIdentityPoolIamBinding#members}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_iam_binding#role GoogleIamWorkloadIdentityPoolIamBinding#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_iam_binding#workload_identity_pool_id GoogleIamWorkloadIdentityPoolIamBinding#workload_identity_pool_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition">GoogleIamWorkloadIdentityPoolIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_iam_binding#id GoogleIamWorkloadIdentityPoolIamBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_iam_binding#project GoogleIamWorkloadIdentityPoolIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_iam_binding#members GoogleIamWorkloadIdentityPoolIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_iam_binding#role GoogleIamWorkloadIdentityPoolIamBinding#role}.

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_iam_binding#workload_identity_pool_id GoogleIamWorkloadIdentityPoolIamBinding#workload_identity_pool_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: GoogleIamWorkloadIdentityPoolIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition">GoogleIamWorkloadIdentityPoolIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_iam_binding#condition GoogleIamWorkloadIdentityPoolIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_iam_binding#id GoogleIamWorkloadIdentityPoolIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_iam_workload_identity_pool_iam_binding#project GoogleIamWorkloadIdentityPoolIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference <a name="GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { googleIamWorkloadIdentityPoolIamBinding } from '@cdktf/provider-google-beta'

new googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition">GoogleIamWorkloadIdentityPoolIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIamWorkloadIdentityPoolIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolIamBinding.GoogleIamWorkloadIdentityPoolIamBindingCondition">GoogleIamWorkloadIdentityPoolIamBindingCondition</a>

---



