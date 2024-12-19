# `googleHealthcareFhirStoreIamPolicy` Submodule <a name="`googleHealthcareFhirStoreIamPolicy` Submodule" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleHealthcareFhirStoreIamPolicy <a name="GoogleHealthcareFhirStoreIamPolicy" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_fhir_store_iam_policy google_healthcare_fhir_store_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.Initializer"></a>

```typescript
import { googleHealthcareFhirStoreIamPolicy } from '@cdktf/provider-google-beta'

new googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy(scope: Construct, id: string, config: GoogleHealthcareFhirStoreIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig">GoogleHealthcareFhirStoreIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig">GoogleHealthcareFhirStoreIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleHealthcareFhirStoreIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.isConstruct"></a>

```typescript
import { googleHealthcareFhirStoreIamPolicy } from '@cdktf/provider-google-beta'

googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.isTerraformElement"></a>

```typescript
import { googleHealthcareFhirStoreIamPolicy } from '@cdktf/provider-google-beta'

googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.isTerraformResource"></a>

```typescript
import { googleHealthcareFhirStoreIamPolicy } from '@cdktf/provider-google-beta'

googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.generateConfigForImport"></a>

```typescript
import { googleHealthcareFhirStoreIamPolicy } from '@cdktf/provider-google-beta'

googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleHealthcareFhirStoreIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleHealthcareFhirStoreIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleHealthcareFhirStoreIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_fhir_store_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleHealthcareFhirStoreIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.fhirStoreIdInput">fhirStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.policyDataInput">policyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.fhirStoreId">fhirStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `fhirStoreIdInput`<sup>Optional</sup> <a name="fhirStoreIdInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.fhirStoreIdInput"></a>

```typescript
public readonly fhirStoreIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyDataInput`<sup>Optional</sup> <a name="policyDataInput" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.policyDataInput"></a>

```typescript
public readonly policyDataInput: string;
```

- *Type:* string

---

##### `fhirStoreId`<sup>Required</sup> <a name="fhirStoreId" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.fhirStoreId"></a>

```typescript
public readonly fhirStoreId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleHealthcareFhirStoreIamPolicyConfig <a name="GoogleHealthcareFhirStoreIamPolicyConfig" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig.Initializer"></a>

```typescript
import { googleHealthcareFhirStoreIamPolicy } from '@cdktf/provider-google-beta'

const googleHealthcareFhirStoreIamPolicyConfig: googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig.property.fhirStoreId">fhirStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_fhir_store_iam_policy#fhir_store_id GoogleHealthcareFhirStoreIamPolicy#fhir_store_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig.property.policyData">policyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_fhir_store_iam_policy#policy_data GoogleHealthcareFhirStoreIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_fhir_store_iam_policy#id GoogleHealthcareFhirStoreIamPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fhirStoreId`<sup>Required</sup> <a name="fhirStoreId" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig.property.fhirStoreId"></a>

```typescript
public readonly fhirStoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_fhir_store_iam_policy#fhir_store_id GoogleHealthcareFhirStoreIamPolicy#fhir_store_id}.

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_fhir_store_iam_policy#policy_data GoogleHealthcareFhirStoreIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareFhirStoreIamPolicy.GoogleHealthcareFhirStoreIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_healthcare_fhir_store_iam_policy#id GoogleHealthcareFhirStoreIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



