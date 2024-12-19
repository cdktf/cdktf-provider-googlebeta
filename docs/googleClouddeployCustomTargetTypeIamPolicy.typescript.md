# `googleClouddeployCustomTargetTypeIamPolicy` Submodule <a name="`googleClouddeployCustomTargetTypeIamPolicy` Submodule" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleClouddeployCustomTargetTypeIamPolicy <a name="GoogleClouddeployCustomTargetTypeIamPolicy" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_clouddeploy_custom_target_type_iam_policy google_clouddeploy_custom_target_type_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.Initializer"></a>

```typescript
import { googleClouddeployCustomTargetTypeIamPolicy } from '@cdktf/provider-google-beta'

new googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy(scope: Construct, id: string, config: GoogleClouddeployCustomTargetTypeIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig">GoogleClouddeployCustomTargetTypeIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig">GoogleClouddeployCustomTargetTypeIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleClouddeployCustomTargetTypeIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.isConstruct"></a>

```typescript
import { googleClouddeployCustomTargetTypeIamPolicy } from '@cdktf/provider-google-beta'

googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.isTerraformElement"></a>

```typescript
import { googleClouddeployCustomTargetTypeIamPolicy } from '@cdktf/provider-google-beta'

googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.isTerraformResource"></a>

```typescript
import { googleClouddeployCustomTargetTypeIamPolicy } from '@cdktf/provider-google-beta'

googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.generateConfigForImport"></a>

```typescript
import { googleClouddeployCustomTargetTypeIamPolicy } from '@cdktf/provider-google-beta'

googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleClouddeployCustomTargetTypeIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleClouddeployCustomTargetTypeIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleClouddeployCustomTargetTypeIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_clouddeploy_custom_target_type_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleClouddeployCustomTargetTypeIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.policyDataInput">policyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyDataInput`<sup>Optional</sup> <a name="policyDataInput" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.policyDataInput"></a>

```typescript
public readonly policyDataInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleClouddeployCustomTargetTypeIamPolicyConfig <a name="GoogleClouddeployCustomTargetTypeIamPolicyConfig" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.Initializer"></a>

```typescript
import { googleClouddeployCustomTargetTypeIamPolicy } from '@cdktf/provider-google-beta'

const googleClouddeployCustomTargetTypeIamPolicyConfig: googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_clouddeploy_custom_target_type_iam_policy#name GoogleClouddeployCustomTargetTypeIamPolicy#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.policyData">policyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_clouddeploy_custom_target_type_iam_policy#policy_data GoogleClouddeployCustomTargetTypeIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_clouddeploy_custom_target_type_iam_policy#id GoogleClouddeployCustomTargetTypeIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_clouddeploy_custom_target_type_iam_policy#location GoogleClouddeployCustomTargetTypeIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_clouddeploy_custom_target_type_iam_policy#project GoogleClouddeployCustomTargetTypeIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_clouddeploy_custom_target_type_iam_policy#name GoogleClouddeployCustomTargetTypeIamPolicy#name}.

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_clouddeploy_custom_target_type_iam_policy#policy_data GoogleClouddeployCustomTargetTypeIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_clouddeploy_custom_target_type_iam_policy#id GoogleClouddeployCustomTargetTypeIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_clouddeploy_custom_target_type_iam_policy#location GoogleClouddeployCustomTargetTypeIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleClouddeployCustomTargetTypeIamPolicy.GoogleClouddeployCustomTargetTypeIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_clouddeploy_custom_target_type_iam_policy#project GoogleClouddeployCustomTargetTypeIamPolicy#project}.

---



