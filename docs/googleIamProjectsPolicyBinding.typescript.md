# `googleIamProjectsPolicyBinding` Submodule <a name="`googleIamProjectsPolicyBinding` Submodule" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamProjectsPolicyBinding <a name="GoogleIamProjectsPolicyBinding" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding google_iam_projects_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.Initializer"></a>

```typescript
import { googleIamProjectsPolicyBinding } from '@cdktf/provider-google-beta'

new googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding(scope: Construct, id: string, config: GoogleIamProjectsPolicyBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig">GoogleIamProjectsPolicyBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig">GoogleIamProjectsPolicyBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.resetPolicyKind">resetPolicyKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.putCondition"></a>

```typescript
public putCondition(value: GoogleIamProjectsPolicyBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingCondition">GoogleIamProjectsPolicyBindingCondition</a>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.putTarget"></a>

```typescript
public putTarget(value: GoogleIamProjectsPolicyBindingTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTarget">GoogleIamProjectsPolicyBindingTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleIamProjectsPolicyBindingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeouts">GoogleIamProjectsPolicyBindingTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPolicyKind` <a name="resetPolicyKind" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.resetPolicyKind"></a>

```typescript
public resetPolicyKind(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamProjectsPolicyBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.isConstruct"></a>

```typescript
import { googleIamProjectsPolicyBinding } from '@cdktf/provider-google-beta'

googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.isTerraformElement"></a>

```typescript
import { googleIamProjectsPolicyBinding } from '@cdktf/provider-google-beta'

googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.isTerraformResource"></a>

```typescript
import { googleIamProjectsPolicyBinding } from '@cdktf/provider-google-beta'

googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.generateConfigForImport"></a>

```typescript
import { googleIamProjectsPolicyBinding } from '@cdktf/provider-google-beta'

googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleIamProjectsPolicyBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIamProjectsPolicyBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIamProjectsPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamProjectsPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference">GoogleIamProjectsPolicyBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.policyUid">policyUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference">GoogleIamProjectsPolicyBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference">GoogleIamProjectsPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingCondition">GoogleIamProjectsPolicyBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.policyBindingIdInput">policyBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.policyKindInput">policyKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTarget">GoogleIamProjectsPolicyBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeouts">GoogleIamProjectsPolicyBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.policyBindingId">policyBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.policyKind">policyKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.condition"></a>

```typescript
public readonly condition: GoogleIamProjectsPolicyBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference">GoogleIamProjectsPolicyBindingConditionOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyUid`<sup>Required</sup> <a name="policyUid" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.policyUid"></a>

```typescript
public readonly policyUid: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.target"></a>

```typescript
public readonly target: GoogleIamProjectsPolicyBindingTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference">GoogleIamProjectsPolicyBindingTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamProjectsPolicyBindingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference">GoogleIamProjectsPolicyBindingTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleIamProjectsPolicyBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingCondition">GoogleIamProjectsPolicyBindingCondition</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `policyBindingIdInput`<sup>Optional</sup> <a name="policyBindingIdInput" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.policyBindingIdInput"></a>

```typescript
public readonly policyBindingIdInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `policyKindInput`<sup>Optional</sup> <a name="policyKindInput" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.policyKindInput"></a>

```typescript
public readonly policyKindInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.targetInput"></a>

```typescript
public readonly targetInput: GoogleIamProjectsPolicyBindingTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTarget">GoogleIamProjectsPolicyBindingTarget</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleIamProjectsPolicyBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeouts">GoogleIamProjectsPolicyBindingTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `policyBindingId`<sup>Required</sup> <a name="policyBindingId" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.policyBindingId"></a>

```typescript
public readonly policyBindingId: string;
```

- *Type:* string

---

##### `policyKind`<sup>Required</sup> <a name="policyKind" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.policyKind"></a>

```typescript
public readonly policyKind: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamProjectsPolicyBindingCondition <a name="GoogleIamProjectsPolicyBindingCondition" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingCondition.Initializer"></a>

```typescript
import { googleIamProjectsPolicyBinding } from '@cdktf/provider-google-beta'

const googleIamProjectsPolicyBindingCondition: googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingCondition.property.description">description</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingCondition.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingCondition.property.location">location</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingCondition.property.title">title</a></code> | <code>string</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#description GoogleIamProjectsPolicyBinding#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#expression GoogleIamProjectsPolicyBinding#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingCondition.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#location GoogleIamProjectsPolicyBinding#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#title GoogleIamProjectsPolicyBinding#title}

---

### GoogleIamProjectsPolicyBindingConfig <a name="GoogleIamProjectsPolicyBindingConfig" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.Initializer"></a>

```typescript
import { googleIamProjectsPolicyBinding } from '@cdktf/provider-google-beta'

const googleIamProjectsPolicyBindingConfig: googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.location">location</a></code> | <code>string</code> | The location of the Policy Binding. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.policy">policy</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.policyBindingId">policyBindingId</a></code> | <code>string</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTarget">GoogleIamProjectsPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingCondition">GoogleIamProjectsPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.displayName">displayName</a></code> | <code>string</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#id GoogleIamProjectsPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.policyKind">policyKind</a></code> | <code>string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#project GoogleIamProjectsPolicyBinding#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeouts">GoogleIamProjectsPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#location GoogleIamProjectsPolicyBinding#location}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#policy GoogleIamProjectsPolicyBinding#policy}

---

##### `policyBindingId`<sup>Required</sup> <a name="policyBindingId" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.policyBindingId"></a>

```typescript
public readonly policyBindingId: string;
```

- *Type:* string

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#policy_binding_id GoogleIamProjectsPolicyBinding#policy_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.target"></a>

```typescript
public readonly target: GoogleIamProjectsPolicyBindingTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTarget">GoogleIamProjectsPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#target GoogleIamProjectsPolicyBinding#target}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#annotations GoogleIamProjectsPolicyBinding#annotations}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.condition"></a>

```typescript
public readonly condition: GoogleIamProjectsPolicyBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingCondition">GoogleIamProjectsPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#condition GoogleIamProjectsPolicyBinding#condition}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#display_name GoogleIamProjectsPolicyBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#id GoogleIamProjectsPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyKind`<sup>Optional</sup> <a name="policyKind" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.policyKind"></a>

```typescript
public readonly policyKind: string;
```

- *Type:* string

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#policy_kind GoogleIamProjectsPolicyBinding#policy_kind}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#project GoogleIamProjectsPolicyBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamProjectsPolicyBindingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeouts">GoogleIamProjectsPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#timeouts GoogleIamProjectsPolicyBinding#timeouts}

---

### GoogleIamProjectsPolicyBindingTarget <a name="GoogleIamProjectsPolicyBindingTarget" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTarget.Initializer"></a>

```typescript
import { googleIamProjectsPolicyBinding } from '@cdktf/provider-google-beta'

const googleIamProjectsPolicyBindingTarget: googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTarget.property.principalSet">principalSet</a></code> | <code>string</code> | Required. |

---

##### `principalSet`<sup>Optional</sup> <a name="principalSet" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTarget.property.principalSet"></a>

```typescript
public readonly principalSet: string;
```

- *Type:* string

Required.

Immutable. The resource name of the policy to be bound.
The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#principal_set GoogleIamProjectsPolicyBinding#principal_set}

---

### GoogleIamProjectsPolicyBindingTimeouts <a name="GoogleIamProjectsPolicyBindingTimeouts" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeouts.Initializer"></a>

```typescript
import { googleIamProjectsPolicyBinding } from '@cdktf/provider-google-beta'

const googleIamProjectsPolicyBindingTimeouts: googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#create GoogleIamProjectsPolicyBinding#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#delete GoogleIamProjectsPolicyBinding#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#update GoogleIamProjectsPolicyBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#create GoogleIamProjectsPolicyBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#delete GoogleIamProjectsPolicyBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_iam_projects_policy_binding#update GoogleIamProjectsPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamProjectsPolicyBindingConditionOutputReference <a name="GoogleIamProjectsPolicyBindingConditionOutputReference" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.Initializer"></a>

```typescript
import { googleIamProjectsPolicyBinding } from '@cdktf/provider-google-beta'

new googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingCondition">GoogleIamProjectsPolicyBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIamProjectsPolicyBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingCondition">GoogleIamProjectsPolicyBindingCondition</a>

---


### GoogleIamProjectsPolicyBindingTargetOutputReference <a name="GoogleIamProjectsPolicyBindingTargetOutputReference" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.Initializer"></a>

```typescript
import { googleIamProjectsPolicyBinding } from '@cdktf/provider-google-beta'

new googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.resetPrincipalSet">resetPrincipalSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrincipalSet` <a name="resetPrincipalSet" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.resetPrincipalSet"></a>

```typescript
public resetPrincipalSet(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.property.principalSetInput">principalSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.property.principalSet">principalSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTarget">GoogleIamProjectsPolicyBindingTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalSetInput`<sup>Optional</sup> <a name="principalSetInput" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.property.principalSetInput"></a>

```typescript
public readonly principalSetInput: string;
```

- *Type:* string

---

##### `principalSet`<sup>Required</sup> <a name="principalSet" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.property.principalSet"></a>

```typescript
public readonly principalSet: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIamProjectsPolicyBindingTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTarget">GoogleIamProjectsPolicyBindingTarget</a>

---


### GoogleIamProjectsPolicyBindingTimeoutsOutputReference <a name="GoogleIamProjectsPolicyBindingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleIamProjectsPolicyBinding } from '@cdktf/provider-google-beta'

new googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeouts">GoogleIamProjectsPolicyBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamProjectsPolicyBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamProjectsPolicyBinding.GoogleIamProjectsPolicyBindingTimeouts">GoogleIamProjectsPolicyBindingTimeouts</a>

---



