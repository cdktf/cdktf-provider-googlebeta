# `google_vertex_ai_featurestore_iam_member`

Refer to the Terraform Registory for docs: [`google_vertex_ai_featurestore_iam_member`](https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_vertex_ai_featurestore_iam_member).

# `googleVertexAiFeaturestoreIamMember` Submodule <a name="`googleVertexAiFeaturestoreIamMember` Submodule" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeaturestoreIamMember <a name="GoogleVertexAiFeaturestoreIamMember" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_vertex_ai_featurestore_iam_member google_vertex_ai_featurestore_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreIamMember } from '@cdktf/provider-google-beta'

new googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember(scope: Construct, id: string, config: GoogleVertexAiFeaturestoreIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig">GoogleVertexAiFeaturestoreIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig">GoogleVertexAiFeaturestoreIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.putCondition"></a>

```typescript
public putCondition(value: GoogleVertexAiFeaturestoreIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberCondition">GoogleVertexAiFeaturestoreIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.isConstruct"></a>

```typescript
import { googleVertexAiFeaturestoreIamMember } from '@cdktf/provider-google-beta'

googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.isTerraformElement"></a>

```typescript
import { googleVertexAiFeaturestoreIamMember } from '@cdktf/provider-google-beta'

googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.isTerraformResource"></a>

```typescript
import { googleVertexAiFeaturestoreIamMember } from '@cdktf/provider-google-beta'

googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference">GoogleVertexAiFeaturestoreIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberCondition">GoogleVertexAiFeaturestoreIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.featurestoreInput">featurestoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.featurestore">featurestore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.condition"></a>

```typescript
public readonly condition: GoogleVertexAiFeaturestoreIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference">GoogleVertexAiFeaturestoreIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: GoogleVertexAiFeaturestoreIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberCondition">GoogleVertexAiFeaturestoreIamMemberCondition</a>

---

##### `featurestoreInput`<sup>Optional</sup> <a name="featurestoreInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.featurestoreInput"></a>

```typescript
public readonly featurestoreInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `featurestore`<sup>Required</sup> <a name="featurestore" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.featurestore"></a>

```typescript
public readonly featurestore: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeaturestoreIamMemberCondition <a name="GoogleVertexAiFeaturestoreIamMemberCondition" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberCondition.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreIamMember } from '@cdktf/provider-google-beta'

const googleVertexAiFeaturestoreIamMemberCondition: googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_vertex_ai_featurestore_iam_member#expression GoogleVertexAiFeaturestoreIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_vertex_ai_featurestore_iam_member#title GoogleVertexAiFeaturestoreIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_vertex_ai_featurestore_iam_member#description GoogleVertexAiFeaturestoreIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_vertex_ai_featurestore_iam_member#expression GoogleVertexAiFeaturestoreIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_vertex_ai_featurestore_iam_member#title GoogleVertexAiFeaturestoreIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_vertex_ai_featurestore_iam_member#description GoogleVertexAiFeaturestoreIamMember#description}.

---

### GoogleVertexAiFeaturestoreIamMemberConfig <a name="GoogleVertexAiFeaturestoreIamMemberConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreIamMember } from '@cdktf/provider-google-beta'

const googleVertexAiFeaturestoreIamMemberConfig: googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.featurestore">featurestore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_vertex_ai_featurestore_iam_member#featurestore GoogleVertexAiFeaturestoreIamMember#featurestore}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_vertex_ai_featurestore_iam_member#member GoogleVertexAiFeaturestoreIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_vertex_ai_featurestore_iam_member#role GoogleVertexAiFeaturestoreIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberCondition">GoogleVertexAiFeaturestoreIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_vertex_ai_featurestore_iam_member#id GoogleVertexAiFeaturestoreIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_vertex_ai_featurestore_iam_member#project GoogleVertexAiFeaturestoreIamMember#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_vertex_ai_featurestore_iam_member#region GoogleVertexAiFeaturestoreIamMember#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `featurestore`<sup>Required</sup> <a name="featurestore" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.featurestore"></a>

```typescript
public readonly featurestore: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_vertex_ai_featurestore_iam_member#featurestore GoogleVertexAiFeaturestoreIamMember#featurestore}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_vertex_ai_featurestore_iam_member#member GoogleVertexAiFeaturestoreIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_vertex_ai_featurestore_iam_member#role GoogleVertexAiFeaturestoreIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: GoogleVertexAiFeaturestoreIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberCondition">GoogleVertexAiFeaturestoreIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_vertex_ai_featurestore_iam_member#condition GoogleVertexAiFeaturestoreIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_vertex_ai_featurestore_iam_member#id GoogleVertexAiFeaturestoreIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_vertex_ai_featurestore_iam_member#project GoogleVertexAiFeaturestoreIamMember#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/resources/google_vertex_ai_featurestore_iam_member#region GoogleVertexAiFeaturestoreIamMember#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiFeaturestoreIamMemberConditionOutputReference <a name="GoogleVertexAiFeaturestoreIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { googleVertexAiFeaturestoreIamMember } from '@cdktf/provider-google-beta'

new googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberCondition">GoogleVertexAiFeaturestoreIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiFeaturestoreIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestoreIamMember.GoogleVertexAiFeaturestoreIamMemberCondition">GoogleVertexAiFeaturestoreIamMemberCondition</a>

---



