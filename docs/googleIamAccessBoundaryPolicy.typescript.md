# `googleIamAccessBoundaryPolicy` Submodule <a name="`googleIamAccessBoundaryPolicy` Submodule" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamAccessBoundaryPolicy <a name="GoogleIamAccessBoundaryPolicy" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy google_iam_access_boundary_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.Initializer"></a>

```typescript
import { googleIamAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

new googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy(scope: Construct, id: string, config: GoogleIamAccessBoundaryPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig">GoogleIamAccessBoundaryPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig">GoogleIamAccessBoundaryPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.putRules"></a>

```typescript
public putRules(value: IResolvable | GoogleIamAccessBoundaryPolicyRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules">GoogleIamAccessBoundaryPolicyRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleIamAccessBoundaryPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts">GoogleIamAccessBoundaryPolicyTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isConstruct"></a>

```typescript
import { googleIamAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isTerraformElement"></a>

```typescript
import { googleIamAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isTerraformResource"></a>

```typescript
import { googleIamAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.generateConfigForImport"></a>

```typescript
import { googleIamAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleIamAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIamAccessBoundaryPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIamAccessBoundaryPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamAccessBoundaryPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList">GoogleIamAccessBoundaryPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference">GoogleIamAccessBoundaryPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules">GoogleIamAccessBoundaryPolicyRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts">GoogleIamAccessBoundaryPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.rules"></a>

```typescript
public readonly rules: GoogleIamAccessBoundaryPolicyRulesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList">GoogleIamAccessBoundaryPolicyRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamAccessBoundaryPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference">GoogleIamAccessBoundaryPolicyTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | GoogleIamAccessBoundaryPolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules">GoogleIamAccessBoundaryPolicyRules</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleIamAccessBoundaryPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts">GoogleIamAccessBoundaryPolicyTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamAccessBoundaryPolicyConfig <a name="GoogleIamAccessBoundaryPolicyConfig" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.Initializer"></a>

```typescript
import { googleIamAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

const googleIamAccessBoundaryPolicyConfig: googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.name">name</a></code> | <code>string</code> | The name of the policy. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.parent">parent</a></code> | <code>string</code> | The attachment point is identified by its URL-encoded full resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules">GoogleIamAccessBoundaryPolicyRules</a>[]</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#id GoogleIamAccessBoundaryPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts">GoogleIamAccessBoundaryPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#name GoogleIamAccessBoundaryPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The attachment point is identified by its URL-encoded full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#parent GoogleIamAccessBoundaryPolicy#parent}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | GoogleIamAccessBoundaryPolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules">GoogleIamAccessBoundaryPolicyRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#rules GoogleIamAccessBoundaryPolicy#rules}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#display_name GoogleIamAccessBoundaryPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#id GoogleIamAccessBoundaryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamAccessBoundaryPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts">GoogleIamAccessBoundaryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#timeouts GoogleIamAccessBoundaryPolicy#timeouts}

---

### GoogleIamAccessBoundaryPolicyRules <a name="GoogleIamAccessBoundaryPolicyRules" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules.Initializer"></a>

```typescript
import { googleIamAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

const googleIamAccessBoundaryPolicyRules: googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules.property.accessBoundaryRule">accessBoundaryRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule</a></code> | access_boundary_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules.property.description">description</a></code> | <code>string</code> | The description of the rule. |

---

##### `accessBoundaryRule`<sup>Optional</sup> <a name="accessBoundaryRule" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules.property.accessBoundaryRule"></a>

```typescript
public readonly accessBoundaryRule: GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule</a>

access_boundary_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#access_boundary_rule GoogleIamAccessBoundaryPolicy#access_boundary_rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#description GoogleIamAccessBoundaryPolicy#description}

---

### GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule <a name="GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule.Initializer"></a>

```typescript
import { googleIamAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

const googleIamAccessBoundaryPolicyRulesAccessBoundaryRule: googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availabilityCondition">availabilityCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a></code> | availability_condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availablePermissions">availablePermissions</a></code> | <code>string[]</code> | A list of permissions that may be allowed for use on the specified resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availableResource">availableResource</a></code> | <code>string</code> | The full resource name of a Google Cloud resource entity. |

---

##### `availabilityCondition`<sup>Optional</sup> <a name="availabilityCondition" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availabilityCondition"></a>

```typescript
public readonly availabilityCondition: GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a>

availability_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#availability_condition GoogleIamAccessBoundaryPolicy#availability_condition}

---

##### `availablePermissions`<sup>Optional</sup> <a name="availablePermissions" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availablePermissions"></a>

```typescript
public readonly availablePermissions: string[];
```

- *Type:* string[]

A list of permissions that may be allowed for use on the specified resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#available_permissions GoogleIamAccessBoundaryPolicy#available_permissions}

---

##### `availableResource`<sup>Optional</sup> <a name="availableResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availableResource"></a>

```typescript
public readonly availableResource: string;
```

- *Type:* string

The full resource name of a Google Cloud resource entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#available_resource GoogleIamAccessBoundaryPolicy#available_resource}

---

### GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition <a name="GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.Initializer"></a>

```typescript
import { googleIamAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

const googleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition: googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.description">description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.location">location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.title">title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#expression GoogleIamAccessBoundaryPolicy#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#description GoogleIamAccessBoundaryPolicy#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#location GoogleIamAccessBoundaryPolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#title GoogleIamAccessBoundaryPolicy#title}

---

### GoogleIamAccessBoundaryPolicyTimeouts <a name="GoogleIamAccessBoundaryPolicyTimeouts" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts.Initializer"></a>

```typescript
import { googleIamAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

const googleIamAccessBoundaryPolicyTimeouts: googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#create GoogleIamAccessBoundaryPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#delete GoogleIamAccessBoundaryPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#update GoogleIamAccessBoundaryPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#create GoogleIamAccessBoundaryPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#delete GoogleIamAccessBoundaryPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_iam_access_boundary_policy#update GoogleIamAccessBoundaryPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference <a name="GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.Initializer"></a>

```typescript
import { googleIamAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

new googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a>

---


### GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference <a name="GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.Initializer"></a>

```typescript
import { googleIamAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

new googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.putAvailabilityCondition">putAvailabilityCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailabilityCondition">resetAvailabilityCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailablePermissions">resetAvailablePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailableResource">resetAvailableResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvailabilityCondition` <a name="putAvailabilityCondition" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.putAvailabilityCondition"></a>

```typescript
public putAvailabilityCondition(value: GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.putAvailabilityCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a>

---

##### `resetAvailabilityCondition` <a name="resetAvailabilityCondition" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailabilityCondition"></a>

```typescript
public resetAvailabilityCondition(): void
```

##### `resetAvailablePermissions` <a name="resetAvailablePermissions" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailablePermissions"></a>

```typescript
public resetAvailablePermissions(): void
```

##### `resetAvailableResource` <a name="resetAvailableResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailableResource"></a>

```typescript
public resetAvailableResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availabilityCondition">availabilityCondition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availabilityConditionInput">availabilityConditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availablePermissionsInput">availablePermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availableResourceInput">availableResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availablePermissions">availablePermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availableResource">availableResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityCondition`<sup>Required</sup> <a name="availabilityCondition" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availabilityCondition"></a>

```typescript
public readonly availabilityCondition: GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference</a>

---

##### `availabilityConditionInput`<sup>Optional</sup> <a name="availabilityConditionInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availabilityConditionInput"></a>

```typescript
public readonly availabilityConditionInput: GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a>

---

##### `availablePermissionsInput`<sup>Optional</sup> <a name="availablePermissionsInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availablePermissionsInput"></a>

```typescript
public readonly availablePermissionsInput: string[];
```

- *Type:* string[]

---

##### `availableResourceInput`<sup>Optional</sup> <a name="availableResourceInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availableResourceInput"></a>

```typescript
public readonly availableResourceInput: string;
```

- *Type:* string

---

##### `availablePermissions`<sup>Required</sup> <a name="availablePermissions" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availablePermissions"></a>

```typescript
public readonly availablePermissions: string[];
```

- *Type:* string[]

---

##### `availableResource`<sup>Required</sup> <a name="availableResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availableResource"></a>

```typescript
public readonly availableResource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule</a>

---


### GoogleIamAccessBoundaryPolicyRulesList <a name="GoogleIamAccessBoundaryPolicyRulesList" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.Initializer"></a>

```typescript
import { googleIamAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

new googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.get"></a>

```typescript
public get(index: number): GoogleIamAccessBoundaryPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules">GoogleIamAccessBoundaryPolicyRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamAccessBoundaryPolicyRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules">GoogleIamAccessBoundaryPolicyRules</a>[]

---


### GoogleIamAccessBoundaryPolicyRulesOutputReference <a name="GoogleIamAccessBoundaryPolicyRulesOutputReference" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer"></a>

```typescript
import { googleIamAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

new googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.putAccessBoundaryRule">putAccessBoundaryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.resetAccessBoundaryRule">resetAccessBoundaryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessBoundaryRule` <a name="putAccessBoundaryRule" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.putAccessBoundaryRule"></a>

```typescript
public putAccessBoundaryRule(value: GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.putAccessBoundaryRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule</a>

---

##### `resetAccessBoundaryRule` <a name="resetAccessBoundaryRule" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.resetAccessBoundaryRule"></a>

```typescript
public resetAccessBoundaryRule(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.accessBoundaryRule">accessBoundaryRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.accessBoundaryRuleInput">accessBoundaryRuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules">GoogleIamAccessBoundaryPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessBoundaryRule`<sup>Required</sup> <a name="accessBoundaryRule" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.accessBoundaryRule"></a>

```typescript
public readonly accessBoundaryRule: GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference</a>

---

##### `accessBoundaryRuleInput`<sup>Optional</sup> <a name="accessBoundaryRuleInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.accessBoundaryRuleInput"></a>

```typescript
public readonly accessBoundaryRuleInput: GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule">GoogleIamAccessBoundaryPolicyRulesAccessBoundaryRule</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamAccessBoundaryPolicyRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyRules">GoogleIamAccessBoundaryPolicyRules</a>

---


### GoogleIamAccessBoundaryPolicyTimeoutsOutputReference <a name="GoogleIamAccessBoundaryPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleIamAccessBoundaryPolicy } from '@cdktf/provider-google-beta'

new googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts">GoogleIamAccessBoundaryPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamAccessBoundaryPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamAccessBoundaryPolicy.GoogleIamAccessBoundaryPolicyTimeouts">GoogleIamAccessBoundaryPolicyTimeouts</a>

---



